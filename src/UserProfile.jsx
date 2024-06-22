import PropTypes from "prop-types";
import UserUsername from "./UserUsername";
import { UserFavouriteFoods } from "./UserFavouriteFoods";

export function UserProfile(props) {
  console.log(props);
  return (
    <>
      <b>Age: </b>
      <span>{props.age}</span>
      <>
        <UserUsername username={props.username} />
        <UserFavouriteFoods />
      </>
    </>
  );
}

// Props validation(like typescript)
UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
