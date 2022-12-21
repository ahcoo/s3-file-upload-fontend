import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Write from "./routes/Write";
import Edit from "./routes/Edit";
import Login from "./routes/Login";
import AuthRoute from "./auth/AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthRoute />}>
          <Route path="/write" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
