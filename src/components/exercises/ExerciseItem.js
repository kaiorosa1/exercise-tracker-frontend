import Card from '../ui/Card';
import classes from './ExerciseItem.module.css';

function ExerciseItem(props){
    return(
        <li className={classes.item}>
        <Card>
            <div className={classes.content}>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
                <p>{props.data.date}</p>
                <p>{props.data.category}</p>
            </div>
        </Card>
    </li>
    );
}

export default ExerciseItem;