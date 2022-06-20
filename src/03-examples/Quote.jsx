import React from 'react'

const Quote = ({ quote, author }) => {
    return (
        <blockquote className="blockquote text-right mr-5">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    )
}

export default Quote