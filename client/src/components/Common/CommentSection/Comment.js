import React from 'react'

export default function Comment() {
    return (
        <div className="row bottom-margin-s">
            <div className="col comment-icon-col">
                <img className="user-icon" src="https://via.placeholder.com/32" />
            </div>
            <div className="col">
                <h4>Name Last-name</h4>
                <p>Comment text goes here...</p>
            </div>
        </div>
    )
}
