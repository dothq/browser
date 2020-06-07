import React from "react";

import { observer } from "mobx-react";
import { StyledNews, NewsTitle } from "./style";
import { LargeCard } from "../Cards/Large";
import { SmallCard } from "../Cards/Small";

import dot from '../../store'

export const News = observer(() => (
    <StyledNews>
        <NewsTitle>News</NewsTitle>
        <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: '0 -26px', marginBottom: '36px' }}>
            {dot.news.map((article, index) => (
                <>
                    {article.large && <LargeCard background={article.urlToImage} headline={article.title} href={article.url} />}
                    {!article.large && <SmallCard background={article.urlToImage} headline={article.title} href={article.url} />}
                </>
            ))}
        </div>
    </StyledNews>
))