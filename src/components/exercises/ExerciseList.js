import ExerciseItem from "./ExerciseItem";
import classes from './ExerciseList.module.css';

const DUMMY_DATA = [
    {
        id: 1,
        title: "This is a dummy title",
        description: "this is a description",
        date: '2023-03-09',
        category: "Exercise Category"
    },
    {
        id:2,
        title: "This is a dummy title 2",
        description: "this is a description 2",
        date: '2023-03-10',
        category: "Exercise Category"
    }
];

function ExerciseList() {
    return (
        <div>
            <ul className={classes.list}>
                {DUMMY_DATA.map((data) => <ExerciseItem  key={data.id} data={data} />)}
            </ul>
        </div>
    );
}

export default ExerciseList;