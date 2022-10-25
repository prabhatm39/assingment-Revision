import data from '../nonfiction.json';
import styles from './friction.module.css';

export default function NonFiction() {
  
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{"Non-Fiction Books"}</h1>

      <div className="books-container">
      {data.map((el) => {
          return (<div className={styles.maindiv}>
            <div className={styles.image}>
              <img src={el.img} />
            </div>
            <div className={styles.title}>{el.title}  ({el.year})</div>
            <div>{el.author}</div>
            <div>Price : {el.price}</div>
          </div>)
        })}
      </div>
    </div>
  );
}
