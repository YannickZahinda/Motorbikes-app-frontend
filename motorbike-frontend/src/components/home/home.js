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
            <ul className='side-list-ul'>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
            </ul>
        </aside>
    </div>
)