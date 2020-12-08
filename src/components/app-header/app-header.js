import React from 'react'
import './app-header.css'

const AppHeader = ({allPosts, liked}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Panahov Khanali</h1>
            <h2>{allPosts} записей, из них понравилос {liked}</h2>
        </div>
    )
}

export default AppHeader