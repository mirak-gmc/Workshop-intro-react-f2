import React from "react";

const user = {
  name: "John",
  lastName: "Doe",
  age: 40,
  email: "John@gmail.com",
};

const SecondComponent = () => {
  return (
    <div className="user-container">
      <h3> Name : {user.name} </h3>
      <h3> last Name : {user.lastName} </h3>
      <h3> Age : {user.age} </h3>
      <h3> Email : {user.email} </h3>
    </div>
  );
};

export default SecondComponent;
