import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setAricles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // document.title = `${capitalize(props.categories)} - Get Daily News Free`

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.categories}&apiKey=3f66430edbe84c7394ff9c30f26f06b5&page=${page}&pageSize=${props.pageSize}`
        try {
            const res = await fetch(url);
            const data = await res.json();
            setAricles(data.articles)
            setTotalResults(data.totalResults)
        }
        catch (e) {
            console.log("something is not working");
        }
    }
    useEffect(() => {
        updateNews();
    }, [])

    const handleNextClick = async () => {
        setPage(page + 1)
        updateNews();
    }

    const handlePrevClick = async () => {
        setPage(page - 1)
        updateNews();
    }
    return (
        <div className='container my-5 pt-5'>
            <h1 className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>TOP {props.categories.toUpperCase()} NEWS</h1>
            <div className="row">
                {articles && articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 50) : ""} desc={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} mode={props.mode} />
                    </div>
                })}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination d-flex justify-content-end">
                    <li className="page-item">
                        <button disabled={page <= 1} onClick={handlePrevClick} type="button" className="btn btn-primary rounded-0">&laquo;</button>
                    </li>
                    <li className="page-item mx-1">
                        <button disabled={page + 1 > Math.ceil(totalResults / 10)} type="button" onClick={handleNextClick} className="btn btn-primary rounded-0">&raquo;</button>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

News.defaultProps = {
    pageSize: 10,
    categories: 'general',
    mode: 'light'
}

News.propTypes = {
    pageSize: PropTypes.number,
    categories: PropTypes.string,
    mode: PropTypes.string
}

export default News
