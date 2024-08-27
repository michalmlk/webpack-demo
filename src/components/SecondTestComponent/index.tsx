import { ReactNode, useState } from "react";
import * as styles from "./styles.module.scss";

export default function SecondTestComponent(): ReactNode {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => setCounter(prevState => prevState + 1);
    const handleDecrease = () => setCounter(prevState => prevState - 1);
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={handleDecrease}>-</button>
            <div className={styles["counter-container"]}>{counter}</div>
            <button className={styles.button} onClick={handleIncrease}>+</button>
        </div>
    );
}