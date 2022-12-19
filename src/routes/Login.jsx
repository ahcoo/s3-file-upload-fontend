import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../utils/env";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onChangeIdInput = (e) => {
    setUserId(e.target.value);
  };

  const onChangePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  const doLogin = (e) => {
    e.preventDefault();
    const login = async () => {
      const data = await axios({
        method: "POST",
        url: `${BACKEND_URL}/login`,
        data: {
          username: userId,
          password: userPassword,
        },
      });
      console.log(data.headers.authorization);
    };
  };

  return (
    <div className="">
      <h2 className="text-3xl h-16">Login</h2>
      <form action="" onSubmit={doLogin} className="flex flex-col">
        <input
          className="login-input"
          type="text"
          placeholder="ID"
          value={userId}
          onChange={onChangeIdInput}
        />
        <input
          className="login-input"
          type="password"
          placeholder="PASSWORD"
          value={userPassword}
          onChange={onChangePasswordInput}
        />
        <button type="submit" className="w-32" onClick={() => {}}>
          [Login]
        </button>
      </form>
    </div>
  );
};

export default Login;
<h2>Login</h2>;
