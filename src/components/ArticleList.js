import React from 'react';
import Article from './Article';

const ArticleList = ({ items }) => {
    return (
        <div className='article-list'>
            {
                items.map((item, i) => {
                    return (
                        <Article
                            key={i}
                            image={items[i].image}
                            title={items[i].title}
                            category={items[i].category}
                            link={items[i].link}
                        />
                    )
                })
            }
        </div>
    )
}

export default ArticleList;

