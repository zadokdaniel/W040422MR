import { useState, useEffect } from "react";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const body = await response.json();

      setUser(body);
    };

    getUser();
  }, [userId]);

  if (!user) {
    return <p>loading...</p>;
  }

  const {
    name,
    username,
    address: { city, street, suite },
    phone,
    company: { name: companyName, catchPhrase },
  } = user;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {name} ({username})
        </h5>
        <p className="card-text">
          {suite}, {street}, {city}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{phone}</li>
        <li className="list-group-item">{companyName}</li>
        <li className="list-group-item">{catchPhrase}</li>
      </ul>
    </div>
  );
};

export default User;
