import React from 'react';
import NavLinkClient from "@/app/components/Header/NavLinkClient";
import './header.css'
import UserInfo from "@/app/components/UserInfo/userInfo";

const Menu = () => {
    return (
        <div className={'header'}>

            <ul className={'nav'}>
                <li><UserInfo /></li>
                <li>
                    <NavLinkClient path={'/'}>Home</NavLinkClient>
                </li>
                <li>
                    <NavLinkClient path={'/movies'}>Movies</NavLinkClient>
                </li>
                <li>
                    <NavLinkClient path={'/genres'}>Genres</NavLinkClient>
                </li>


            </ul>

        </div>
    );
};

export default Menu;