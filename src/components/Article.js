import React from 'react';

const Article = ({ title, category, image, link}) => {

    return (
        <div className='tc article-item'>
            <img alt='ipropaganda' src={`https://ipropaganda.com/sites/default/files/articles/${image}`} />
            <h2>{title}</h2>
            <p className='category'>{category}</p>
            <div className='link'><a href={link} target='_blank' rel="noopener noreferrer">Read full article</a></div>
        </div>
    );
}

export default Article;