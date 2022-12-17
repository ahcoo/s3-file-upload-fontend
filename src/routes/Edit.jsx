import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    

    useEffect(() => {
        setTitle(location.state.article.title);
        setBody(location.state.article.body);
    },[])


    return (
        <div className="flex flex-col max-w-5xl m-auto">
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-4 w-24"
        onClick={() => {
          navigate('/');
        }}
      >
        메인으로
      </button>
      <div className="mt-12">글 수정 페이지입니다.</div>
      <div className="form-control w-full mt-8">
        <label className="label">
          <span className="label-text">제목을 입력해주세요</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목을 입력해주세요."
          className="input input-bordered w-full h-20"
        />
      </div>
      <div className="form-control w-full mt-6">
        <label className="label">
          <span className="label-text">내용을 입력해주세요</span>
        </label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder="내용을 입력해주세요."
          className="input input-bordered w-full h-96"
        />
      </div>
      <div className="flex w-full mt-4">
        {location.state.article.imageList.map((image, index) => {
        return (
          <div key={index} className="w-36">
            <img src={image.imgUrl} alt="article image" />
          </div>
        )})}
      </div>
      
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-4 w-24"
        onClick={() => {
          
        }}
      >
        완료
      </button>
    </div>
    );
};

export default Edit;