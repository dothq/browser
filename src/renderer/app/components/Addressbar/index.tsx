import React from 'react';
import { StyledAddressbar, SearchIcon, Input, InputPlaceholder } from "./style"
import { Icon } from '../Icon';
import { observer } from 'mobx-react-lite';
import cheerio from 'cheerio';
import request from 'request';

import dot from '../../store'
import { ipcRenderer } from 'electron';

const isURL = /(?:[-a-zA-Z0-9@:%_\+~.#=]{2,256}\.)?([-a-zA-Z0-9@:%_\+~#=]*)\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
const createURL = (url: string) => {
	if (!isURL.test(url)) {
		return new URL(`http://www.google.com/search?q=${url}`).href;
	} 
	if (!url.includes('http')) {
		return new URL(`http://${url}`).href;
	}

	return new URL(url).href;
}

export const Addressbar = observer(() => {
    const [inputFocused, setInputFocused] = React.useState(true);
    const [placeholderVisible, setPlaceholderVisibility] = React.useState(true);

    const onSearchBlur = () => {
        window.getSelection().removeAllRanges()

        if(dot.searchRef.current.value.length == 0) {
            dot.searchRef.current.blur()
            setPlaceholderVisibility(true)
            setInputFocused(false)
        }
    }

    const onClick = () => {
        dot.searchRef.current.focus();
        dot.searchRef.current.select();
    }

    const onMouseDown = () => {
        if(dot.searchRef.current.value.length == 0) {
            setInputFocused(a => !a)
        }
    }

    const onInput = () => {
        if(dot.searchRef.current.value.length !== 0) {
            setPlaceholderVisibility(false)
        } else {
            setPlaceholderVisibility(true)
        }
    }

    const onKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode == 13) {
						const { value } = dot.searchRef.current;
						const url = createURL(value);
						await request({uri: url}, ((_error, response, body) => {
							const $ = cheerio.load(body);
							const title = $('head > title').text();

							dot.searchRef.current.value = url;
							dot.tabs.update({ id: dot.tabs.selectedTab.id, title });
						});

						ipcRenderer.send('view-navigate', dot.tabs.selectedTab.id, url);

						dot.searchRef.current.blur();
        }
    }

    return (
        <StyledAddressbar>
            <SearchIcon focused={inputFocused}>
                <Icon icon={"search"} size={14} />
            </SearchIcon>
            <Input 
                placeholder={""} 
                ref={dot.searchRef} 
                onBlur={onSearchBlur} 
                onClick={onClick} 
                onMouseDown={onMouseDown}
                onInput={onInput}
                onKeyUp={(event) => onKeyUp(event)}
            />
            {placeholderVisible && <InputPlaceholder focused={inputFocused}>Search Google or type a URL</InputPlaceholder>}
        </StyledAddressbar>
    )
})