import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>

    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/695/273/small/navy-blue-abstract-curve-and-wavy-background.jpg" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Jack Patrik</h2>
                <h4>jack.patrik@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    {/* <p>Views on post</p> */}
                    <p className="sidebar_statNumber">2.543</p>

                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2.543</p>
                    {/* <p className="sidebar_statNumber">2.448</p> */}

                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>

                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareEngineering")}
                {recentItem("design")}
                {recentItem("developer")}
                <br />
                <p>Groups</p>
                {recentItem("Top Talent Community")}
                {recentItem("programmers")}
                {recentItem("React Developers")}
                <br />
                <p>Followed Hashtags</p>
                {recentItem(" Talent Community")}
            </div>


        </div>
    )
}

export default Sidebar
