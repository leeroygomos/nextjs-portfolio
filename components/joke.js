import utilStyles from '../styles/utils.module.css';

export default function joke({setup, delivery, getJoke}){

    return (
        <div className={utilStyles.joke}>
            <h3>Programming joke of the day:</h3>
            <p>{setup}</p>
            <p>{delivery}</p>
            <button onClick={() => getJoke()}>New joke?</button>
        </div>
    );
}