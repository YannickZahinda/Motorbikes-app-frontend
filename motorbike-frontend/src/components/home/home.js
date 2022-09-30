import React from 'react'
import { Nav } from '../navigation/Nav'
import './home.css'

export const Home = () => (
    <div className='main'>
        <header className='nav'>
            <Nav/>
        </header>
        <main>
            <p>Here the main page</p>
        </main>
        <aside>
            <ul>
                <li className='side-list'>My aside list</li>
                <li className='side-list'>My aside list</li>
                <li className='side-list'>My aside list</li>
            </ul>
        </aside>
    </div>
)