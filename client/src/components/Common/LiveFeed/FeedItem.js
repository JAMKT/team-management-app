import React from 'react'

export default function FeedItem(props) {
    return (
        <div className="row feed-item">
            <div className="col comment-icon-col">
                <img className="user-icon" src="https://via.placeholder.com/32" />
            </div>
            <div className="col">
                <h4>{props.feed.title}</h4>
                <span>{props.feed.time} minutes ago</span>
                <p>{props.feed.content}</p>
            </div>
        </div>
    )
}
