import React from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/dashboard">Get Start</Link>
    </div>
  );
};

export default Home;
