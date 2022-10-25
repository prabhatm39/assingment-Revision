import data from '../fiction.json'
import styles from './friction.module.css';
import  '../app.css'

export default function Fiction() {
  console.log(data)
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{"Fictional Books"}</h1>

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
