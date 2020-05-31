import React from 'react'
import FeedItem from './FeedItem';

export default function LiveFeed() {
    const feed1 = {
        title: "Commented on Chat App",
        content: "I think we should start designing more components at this point...",
        time: "12"
    }

    const feed2 = {
        title: "Liked Tim’s post on Team Management App",
        content: "",
        time: "45"
    }

    const feed3 = {
        title: "Tim created Team Management App Project",
        content: "",
        time: "52"
    }

    return (
        <div className="col">
            
                <FeedItem feed={feed1}/>
                <FeedItem feed={feed2}/>
                <FeedItem feed={feed3}/>

        </div>
    )
}
