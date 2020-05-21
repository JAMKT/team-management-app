import React from 'react'

export default function FeedItem() {
    return (
        <div className="row feed-item">
            <div className="col comment-icon-col">
                <img className="user-icon" src="https://via.placeholder.com/32" />
            </div>
            <div className="col">
                <h4>Commented on Chat App</h4>
                <span>12 minutes ago</span>
                <p>Activity feed text goes here...</p>
            </div>
        </div>
    )
}
