import styles from './styles.module.css'

export default function UserUsername(props) {
  console.log(props);
  return (
    <>
      <b className={styles.username}>Username:</b>
      <span>{props.username}</span>
    </>
  );
}
