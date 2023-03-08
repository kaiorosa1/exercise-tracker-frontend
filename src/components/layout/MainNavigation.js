import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Exercise Tracker App</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Exercises Logged</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    );
}


export default MainNavigation;