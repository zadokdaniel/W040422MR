import Product from "./product";

const Profile = ({ name, profileImage, email, age, favoriteColor }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={profileImage}
        className="card-img-top"
        alt={name + " Profile"}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{age}</li>
        <li className="list-group-item">{email}</li>
        <li className="list-group-item" style={{ color: favoriteColor }}>
          {favoriteColor}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
