import * as React from 'react';
import { observer, inject } from "mobx-react";
import { StyledSelect, SelectOption, SelectContainer, Icon, Selection, SelectItems, ItemIcon } from "./style";
import { icons } from '../../constants';
import onClickOutside from "react-onclickoutside";
import console = require('console');
import store from '../../store';

interface Props {
    children: any;
    value: any;
    parentRef: any;
    icon: any;
}

interface ItemProps {
    children: any;
    onClick: any;
    parentRef: any;
    icon: any;
}

class SelectList extends React.Component<Props, {}> {

    public view: boolean = false;

    public value = this.props.value;

    public toggleView() { 
        this.view = this.view == false ? this.view = true : this.view = false; 
    }

    public changeValue(newValue: any) {
        this.value = newValue;
    }

    handleClickOutside = (e: any) => {
        this.view = false;
    }

    public render() {

        let {
            children,
            parentRef,
            icon,
        } = this.props;

        console.log(store.preferences.conf.appearance.theme)

        return (
            <StyledSelect onClick={() => this.toggleView()} isOpen={this.view}>
                <Icon src={icons.down} white={true} isOpen={this.view}/>
                <SelectContainer isOpen={this.view} canBeHovered={false}>
                    <SelectOption>
                        <ItemIcon src={icon} />
                        <span ref={parentRef}>{this.value}</span>
                    </SelectOption>
                </SelectContainer>
                <SelectItems visible={this.view}>
                    {children}
                </SelectItems>
            </StyledSelect>
        )
    }
}

export default onClickOutside(SelectList);

export class SelectListItem extends React.Component<ItemProps, {}> {

    public render() {

        const {
            onClick,
            parentRef,
            icon,
        } = this.props;

        var clickEvent = () => {
            onClick()
            parentRef.current.innerText = this.props.children
        }

        return (
            <SelectContainer 
                canBeHovered={true}
                onClick={clickEvent}
            >
                <SelectOption>
                    <ItemIcon src={icon} />
                    {this.props.children}
                </SelectOption>
            </SelectContainer>
        )
    }

};

