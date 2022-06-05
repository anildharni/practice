import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            <nav>
                <ul className={classes.navbar}>
                    <li className={classes.navEl}>
                        React Meetups
                    </li>
                    <li className={classes.navEl}>
                        <Link to="/allmeetups">All Meetups</Link>
                    </li>
                    <li className={classes.navEl}>
                        <Link to="/newmeetup">New meetup</Link>
                    </li>
                    <li className={classes.navEl}>
                        <Link to="/favmeetups">Favorites</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout