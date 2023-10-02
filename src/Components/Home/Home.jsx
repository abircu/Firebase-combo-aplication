import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div className=" text-2xl font-600">
      <h1>this is home page here and context api value is:{authInfo.name}</h1>
    </div>
  );
};

export default Home;
