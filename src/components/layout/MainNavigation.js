import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Exercise Tracker App</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main Page</Link>
                    </li>
                    <li>
                        <Link to='/new-exercise'>Add New Exercise</Link>
                    </li>
                    <li>
                        <Link to='/exercises-logged'>Exercises Logged</Link>
                    </li>
                    <li>
                        <Link to='/'>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default MainNavigation;