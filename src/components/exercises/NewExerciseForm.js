import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewExerciseForm.module.css';

function NewExerciseForm(props) {
    /**
     * title": "Exercise from Month X",
    "description": "This is another test description",
    "duration": "25 min",
    "date": "2022-07-15",
    "user_id": "95c48dd7-1176-4092-8297-23d17ab4f02d",
    "category_id": "98a58c32-5341-4405-bec9-8e9e78ce199e"
     */
    const titleInputRef = useRef();
    const dateInputRef = useRef();
    const categoryInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;


        const exerciseData = {
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
            category: enteredCategory

        };

        console.log(exerciseData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Exercise Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Exercise Description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="date">Exercise date</label>
                    <input type="date" required id="date" ref={dateInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="category">Exercise Category</label>
                    <select name="category" required id="category" ref={categoryInputRef} >
                        <option value="cardio">Cardio</option>
                        <option value="fitness">Fitness</option>
                        <option value="madeup">Madeup</option>
                    </select>
                </div>

                <div className={classes.actions}>
                    <button>Add Exercise</button>
                </div>
            </form>
        </Card>
    );
}


export default NewExerciseForm;