import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authenticationState } from "../recoil/store";
import { BACKEND_URL } from "../utils/env";
import { useNavigate } from "react-router-dom";

const Login = ({ to }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const setAuthenticated = useSetRecoilState(authenticationState);

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
      if (data.status === 200) {
        if (data.headers.authorization) {
          setAuthenticated(true);
          localStorage.setItem("login-token", data.headers.authorization);
          if (to === undefined) {
            navigate("/");
          } else {
            navigate(to);
          }
          alert("로그인 성공");
        }
      } else {
        alert("로그인 실패");
        return;
      }
    };
    login();
  };

  return (
    <div className="ml-8 mt-8 text-3xl">
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
        <button type="submit" className="w-32 mt-8" onClick={() => {}}>
          [Login]
        </button>
      </form>
    </div>
  );
};

export default Login;
<h2>Login</h2>;
