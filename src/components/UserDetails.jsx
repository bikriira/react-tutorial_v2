import PropTypes from "prop-types";
import { useState } from "react";

export default function UserDeatails(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);

  return (
    <div>
      <div>
        <button onClick={(e) => setIsEditing(!isEditing)}>Edit</button>
        {isEditing && (
          <button
            onClick={() => {
              props.setUsers((curentUsersList) =>
                curentUsersList.map((currentUser) =>
                  currentUser.id === props.user.id
                    ? { ...currentUser, name: username, email: email }
                    : currentUser
                )
              );
              setIsEditing(!isEditing);
            }}
          >
            Save
          </button>
        )}
        <button
          onClick={() => {
            props.setUsers((curentUsersList) =>
              curentUsersList.filter(
                (currentUser) => currentUser.id !== props.user.id
              )
            );
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            props.setUsers((curentUsersList) =>
              curentUsersList.filter(
                (currentUser) => currentUser.id !== props.user.id
              )
            );
          }}
        >
          New
        </button>
      </div>
      <b>Id: </b>
      <span>{props.user.id}</span>
      <br />
      <b>Username: </b>
      {isEditing ? (
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      ) : (
        <span>{props.user.username}</span>
      )}
      <br />
      <b>Email: </b>
      {isEditing ? (
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      ) : (
        <span>{props.user.email}</span>
      )}
      <hr />
    </div>
  );
}

UserDeatails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  setUsers: PropTypes.func.isRequired,
};
