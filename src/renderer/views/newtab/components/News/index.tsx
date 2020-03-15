import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledNews, Articles, Spinner } from './style';
import { Article } from '../Article';

import axios from 'axios';
import { icons } from '~/renderer/views/app/constants';
import { observable } from 'mobx';

@observer
export class News extends React.Component {
    public state: any = {};

    @observable
    public i: number = 0;

    componentDidMount() {
        const code = navigator.language.split("-").length == 1 ? navigator.language.split("-")[0] : navigator.language.split("-")[1]

        axios.get(`https://api.dothq.co/browser.news?country=${code.toLowerCase()}`)
            .then(resp => { 
                this.setState({ ...resp.data }) 
                resp.data.articles.forEach(i => {
                    this.i++;
                })
            })

    }

    render() {
        const length = this.state.articles ? this.state.articles.length : -1;

        return (
            <StyledNews>
                <Articles>
                    {this.state.articles ? this.state.articles.map((item, key) => (
                        <Article
                            large={key == 0 ? true : false}
                            title={item.title} 
                            story={item.content}
                            authorName={item.source.name}
                            thumbnail={item.urlToImage ? item.urlToImage : icons.images.missing}
                            published={item.publishedAt}
                            href={item.url}
                            key={key}
                            style={{ marginRight: `${key-1 % 3 ? 0 : ''}` }}
                        />  
                    )) : ''}
                    {length !== this.i ? ( <Spinner /> ) : ""}
                </Articles>
            </StyledNews>
        )
    }
}
