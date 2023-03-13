import { useRef } from "react";
import Card from "../ui/Card";
import classes from './CreateUserForm.module.css';

function CreateUserForm(props) {
    const nameInputRef = useRef();
    const birthDateInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredBirthDate = birthDateInputRef.current.value;
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const createUserData = {
            name: enteredName,
            birthDate: enteredBirthDate,
            username: enteredUsername,
            password: enteredPassword,
        };

        props.createUser(createUserData);
    }
    return (
        <section>
            <div className={classes.title}>
                <h3>Create your User</h3>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" required id="name" ref={nameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="birthdate">Birth Date</label>
                        <input type="date" required id="birthdate" ref={birthDateInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="username">Username</label>
                        <input type="text" required id="username" ref={usernameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" ref={passwordInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Join us!</button>
                    </div>
                </form>
            </Card>
            <p></p>
        </section>
    );
}


export default CreateUserForm;