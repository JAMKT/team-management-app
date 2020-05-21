import React from 'react'
import SideNav from '../components/Common/SideNav/SideNav';
import TopNav from '../components/Common/TopNav/TopNav';
import SearchField from '../components/Common/SearchFIeld/SearchField';
import PillTab from '../components/Common/PillTab/PillTab';
import UserCardHorizontal from '../components/Common/UserCard/UserCardHorizontal';
import { Link } from 'react-router-dom';
import LinkList from '../components/Common/LinkList/LinkList';
import CommentSection from '../components/Common/CommentSection/CommentSection'

export default function OnboardingDocumentation() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-fixed-468 card gutter-right">
                    <div className="row">
                        <div className="col gutter-s-right bottom-border">
                            <h3 className="margin-bottom">Job Title</h3>
                            <SearchField />
                        </div>
                        <div className="col gutter-s-left bottom-border">
                            <h3>Responsibilities</h3>
                            <SearchField />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col gutter-s-right">
                            <PillTab />
                            <PillTab />
                            <PillTab />
                        </div>
                        <div className="col gutter-s-left">
                            <PillTab />
                        </div>
                        
                    </div>
                </div>
                
                <div className="col ">
                    <div className="row card gutter-bottom pill-tab-horizontal">
                        <PillTab />
                        <PillTab />
                    </div>
                    <div className="row">
                        <div className="col card gutter-right">
                            Main col. User created content goes here...
                        </div>
                        <div className="col col-fixed-468 card">
                            
                            <h3 className="width-100">Have any questions?<br></br>Feel free to contact our lead.</h3>
                            
                            <UserCardHorizontal />
                            <div className="row">
                                Icon text here
                            </div>
                            <div className="row highlighted-link">
                                <Link>See all front-end developers</Link>
                            </div>
                            <div className="row">
                                <LinkList />
                            </div>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>

            
            <TopNav />
            <SideNav />
        </div>
    )
}
