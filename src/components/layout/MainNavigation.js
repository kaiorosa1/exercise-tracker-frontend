import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function MainNavigation() {
    const authCtx = useContext(AuthContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Exercise Tracker App</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        {authCtx.isLoggedIn && <Link to='/new-exercise'>Add New Exercise</Link>}
                    </li>
                    <li>
                        {authCtx.isLoggedIn && <Link to='/exercises-logged'>Exercises Logged</Link>}
                    </li>
                    <li>
                        {authCtx.isLoggedIn && <Link to='/'><span onClick={authCtx.logoutUser}>Logout</span></Link>}
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default MainNavigation;