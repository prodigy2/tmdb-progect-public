// src/app/components/Header/Menu.tsx

'use client'; // Aggiungi questa riga per abilitare i React Hooks nel lato client

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Per aggiornare la query
import NavLinkClient from "@/app/components/Header/NavLinkClient";
import './header.css';
import UserInfo from "@/app/components/UserInfo/userInfo";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/movies?search=${encodeURIComponent(searchQuery)}`); // Aggiorna la query
    };

    return (
        <div className="header">
            <ul className="nav">
                <li><UserInfo /></li>
                <li>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </li>
                <li><NavLinkClient path="/movies">Movies</NavLinkClient></li>
                <li><NavLinkClient path="/genres">Genres</NavLinkClient></li>
            </ul>
        </div>
    );
};

export default Menu;
