import styles from './button.module.css'

const Button = (props) => {
    return (
        <div style={{color: props.color, borderColor: props.color}} className={styles.button}>
            <a>
                <p>{props.text}</p>
            </a>
        </div>
    );
}

export default Button;