import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticationState } from "../recoil/store";
import Login from "../routes/Login";

const Header = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useRecoilState(authenticationState);
  return (
    <header>
      <div className="navbar bg-base-100">
        <div
          className="flex-1"
          onClick={() => {
            navigate("/");
          }}
        >
          <a className="btn btn-ghost normal-case text-xl">SBS community</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered search-input"
            />
          </div>
          {authenticated ? (
            <div
              className="cursor-pointer"
              onClick={() => {
                //인증 해제
                setAuthenticated(false);
                //로그인 토큰 삭제
                localStorage.removeItem("login-token");
              }}
            >
              로그아웃
            </div>
          ) : (
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(`/login`);
              }}
            >
              로그인
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
