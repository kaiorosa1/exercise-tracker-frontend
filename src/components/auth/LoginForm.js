import { useRef } from "react";
import Card from "../ui/Card";
import classes from './LoginForm.module.css';
import { Link } from "react-router-dom";

function LoginForm(props) {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const loginData = {
            username: enteredTitle,
            password: enteredPassword,
        };

        props.login(loginData);
    }
    return (
        <section>
            <div className={classes.title}>
                <h3>Start Tracking Your Workouts</h3>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="username">Username</label>
                        <input type="text" required id="username" ref={usernameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" ref={passwordInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Login</button>
                    </div>
                </form>
            </Card>
            <p></p>
            <div>
                <Link to="/create-user">New here? - sign up here </Link>
            </div>
        </section>
    );
}


export default LoginForm;