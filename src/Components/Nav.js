import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Nav() {

    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&sortBy=popularity&apiKey=e10abc913b494678803a08f00dca3336`)
                .then(res => {
                    console.log({
                        Google: res
                    });
                    setNews(oldData => res.data.articles)
                })
        }

        // const timer = setTimeout(() => {
        // }, 5000);
        fetchData();

        // return () => clearTimeout(timer);
    }, [])


    return (
        <nav>
            <ul className="google-news-container">
                <li className="news-item">
                    <Link to="/" className="home-link">Home</Link>
                </li>
                {

                    (news && news.length > 0) ?
                        news.map(n => {
                            return (
                                <li className="news-item">
                                    <img src={n.urlToImage} alt={n.title} srcset="" style={{ width: '100%' }} />
                                    <h5>{n.title}</h5>
                                    <p>{n.content}</p>
                                </li>
                            )
                        }) :
                        <li>No News Today</li>
                }
            </ul>
        </nav>
    )
}

export default Nav
