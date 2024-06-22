import PropTypes from "prop-types";

export function UserDeatails(props) {
  return (
    <div>
      <b>Id: </b>
      <span>{props.user.id}</span>
      <br />
      <b>Username: </b>
      <span>{props.user.name}</span>
      <br />
      <b>Email: </b>
      <span>{props.user.email}</span>
    </div>
  );
}

UserDeatails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
