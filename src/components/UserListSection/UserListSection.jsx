import users from "../users.json";

const UserListSection = () => {
  return (
    <ul>
      {users.map(({ id, username, email, bio, online }) => (
        <li key={id}>
          <h3>{username}</h3>
          <p>{email}</p>
          <p>{bio}</p>
          <span>{online ? "Online" : "Offline"}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserListSection;
