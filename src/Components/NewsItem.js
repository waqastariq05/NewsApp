import React from 'react'

const NewsItem = (props) => {
    let { title, desc, imageUrl, newsUrl, mode } = props
    return (
        <>
            <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`} >
                <img src={!imageUrl ? "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" : imageUrl} className="card-img-top overflow-hidden" alt="..." />
                <div className={`card-body text-${mode === 'light' ? 'dark' : 'light'}`}>
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{desc}..</p>
                    <a href={newsUrl} target="blank_" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem