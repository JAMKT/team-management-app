import React from 'react'
import Comment from './Comment';
export default function CommentSection() {
    return (
        <div className="card card-secondary col">
            <div className="row justify-space-between align-items-center bottom-border">
                <h3>Comments</h3>
            </div>
            <Comment />
            <Comment />
            <div className="row">
                <div className="width-100 align-items-center justify-space-between comment-input-field-wrapper">
                    <input className="comment-input-field" placeholder="Write a comment..." type="text" />
                    <img src="https://via.placeholder.com/16" />   
                </div>
            </div>
        </div>
    )
}
