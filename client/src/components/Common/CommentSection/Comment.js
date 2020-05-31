import React from 'react'

export default function Comment() {
    return (
        <div className="row bottom-margin-s">
            <div className="col comment-icon-col">
                <img className="user-icon" src="https://via.placeholder.com/32" />
            </div>
            <div className="col">
                <h4>Kirsten Hansen</h4>
                <p>As mentioned in the post, please contact me (or write a comment here) if you have questions. :)</p>
            </div>
        </div>
    )
}
