import * as React from 'react';

import { observer } from 'mobx-react';
import { 
    LargePost, 
    LPostThumbnail, 
    LContent, 
    Tag, 
    Headline, 
    Story, 
    Source, 
    Name, 
    Published, 
    Avatar, 
    SourceContainer,
    SmallPost,
    SPostThumbnail,
    SContent
} from './style';

import * as timeago from 'timeago.js';
import axios from 'axios';
import { getHostname } from '~/shared/utils/url';

const makeBlob = async (href) => {

}

export const Article = observer(({ large, title, story, authorName, thumbnail, published, href, style }: { large?: boolean; title: string; story: string; authorName: string; thumbnail: string; published: string; href: string; style?: any }) => (
    <>
        {large ? <Article_Large title={title} story={story} authorName={authorName} thumbnail={thumbnail} published={published} href={href} /> : <Article_Small title={title} story={story} authorName={authorName} thumbnail={thumbnail} published={published} href={href} />}
    </>
)) 

interface Props {
    title: string; 
    story?: string; 
    authorName: string; 
    thumbnail: string; 
    published: string; 
    href: string; 
    style?: any 
}

@observer
class Article_Large extends React.Component<Props> {
    public state: any = {
        favicons: []
    };

    getFavicon(href) {
        const hostname = getHostname(href)

        fetch(`https://api.faviconkit.com/${hostname}/144`)
            .then(res => res.blob())
            .then(res => { 
                this.setState({ favicons: [...this.state.favicons, {
                    url: href,
                    icon: URL.createObjectURL(res)
                }] })
        })
    }

    componentDidMount() {
        this.getFavicon(this.props.href);
    }

    render() {
        const { href, title, style, thumbnail, authorName, published, story } = this.props;

        return (
            <LargePost href={href} title={title} style={style}>
                <LPostThumbnail thumbnail={thumbnail} />
                <LContent>
                    <Tag>Top Story</Tag>
                    <Headline large>{title}</Headline>
                    <Story>{story}</Story>
                    <Source>
                        <Avatar icon={this.state.favicons.find(i => i.url == href) ? this.state.favicons.find(i => i.url == href).icon : ""} />
                        <SourceContainer>
                            <Name>{authorName}</Name>
                            <Published>{timeago.format(new Date(published))}</Published>
                        </SourceContainer>
                    </Source>
                </LContent>
            </LargePost>
        ) 
    }
}  

@observer
class Article_Small extends React.Component<Props> {
    public state: any = {
        favicons: []
    };

    getFavicon(href) {
        const hostname = getHostname(href)

        fetch(`https://api.faviconkit.com/${hostname}/144`)
            .then(res => res.blob())
            .then(res => { 
                this.setState({ favicons: [...this.state.favicons, {
                    url: href,
                    icon: URL.createObjectURL(res)
                }] })
        })
    }

    componentDidMount() {
        this.getFavicon(this.props.href);
    }

    render() {
        const { href, title, style, thumbnail, authorName, published } = this.props;

        return (
            <SmallPost href={href} title={title} style={style}>
                <SPostThumbnail thumbnail={thumbnail} />
                <SContent>
                    <Headline>{title}</Headline>
                    <Source>
                        <Avatar icon={this.state.favicons.find(i => i.url == href) ? this.state.favicons.find(i => i.url == href).icon : ""} />
                        <SourceContainer>
                            <Name>{authorName}</Name>
                            <Published>{timeago.format(new Date(published))}</Published>
                        </SourceContainer>
                    </Source>
                </SContent>
            </SmallPost>
        )
    }
}