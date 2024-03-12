import styles from '../BtnHook/Btn.module.css';

export const ButtonNavigator = ({ direction, handleClick, disabled, text }) => {
    return (
        <div className={`${styles.mainContainerBtn} ${styles.btnSpan} ${direction === 'right' ? styles.btnRight : styles.btnLeft}`}>
            <button className={styles.btn} onClick={handleClick} disabled={disabled}>
                {text}
            </button>
        </div>
    );
};