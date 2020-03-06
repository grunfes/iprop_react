import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './AppArticles.css';

class AppArticles extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://ipropaganda.com/content/article-simple?_format=json')
            .then(response=> response.json())
            .then(articles => this.setState({ items: articles }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const { items, searchfield } = this.state;
        const filteredItems = items.filter(item => {
            return item.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        // if(items.length === 0) { return first } else { return second} 
        return !items.length ?           
            <div className='loading f3'>Content is fetching ...</div> :
            
            (
                <div className='tc container'>
                    <h1 className='f1'>ipropaganda Articles</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ArticleList items={filteredItems} />
                    </Scroll>
                </div>
            );
    }
    
}

export default AppArticles;