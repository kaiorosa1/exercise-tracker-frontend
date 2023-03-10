import ExerciseItem from "./ExerciseItem";
import classes from './ExerciseList.module.css';

const DUMMY_DATA = [
    {
        title: "This is a dummy title",
        description: "this is a description",
        date: '2023-03-09',
        category: "Exercise Category"
    }
];

function ExerciseList() {
    return (
        <div>
            <ul className={classes.list}>
                <ExerciseItem data={DUMMY_DATA[0]} />
            </ul>
        </div>
    );
}

export default ExerciseList;