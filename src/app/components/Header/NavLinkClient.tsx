'use client'
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import './header.css'

type IProps = {
    path: string;
    children: React.ReactNode;
}

const NavLinkClient: FC<IProps> = ({path, children}) => {
    const pathname = usePathname();
    return (
        <div>

            <Link href={path} className={pathname === path? 'active': ''}>
                {children}
            </Link>


        </div>
    );
};

export default NavLinkClient;