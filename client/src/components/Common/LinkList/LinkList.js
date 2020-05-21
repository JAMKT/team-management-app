import React from 'react'
import { Link } from 'react-router-dom';

export default function LinkList() {
    return (
        <div className="row">
            <h3 className="width-100">List Title</h3>
            <ul className="remote-list-style">
                <li><Link>Link text here</Link></li>
                <li><Link>Link text here</Link></li>
                <li><Link>Link text here</Link></li>
            </ul>
        </div>
    )
}
