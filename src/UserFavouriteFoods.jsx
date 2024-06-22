import styles from './user.module.scss'
export function UserFavouriteFoods() {
  return (
    <section>
      <span className={styles.foodsTitle}>Favourite Food: </span>
      <br />
      <ul>
        <li>Sushi</li>
        <li>Pizza</li>
        <li>Mediteranian food</li>
      </ul>
    </section>
  );
}
