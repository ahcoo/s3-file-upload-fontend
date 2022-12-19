import axios from "axios";
import { BACKEND_URL } from "../utils/env";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import Layout from "../layout/Layout";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        method: "GET",
        url: `${BACKEND_URL}/article/${id}`,
      });

      setArticle(data.data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <div className="flex flex-col max-w-5xl m-auto">
        <button
          className="btn btn-outline btn-info ml-auto mr-0 mt-4 w-24"
          onClick={() => {
            navigate("/");
          }}
        >
          메인으로
        </button>
        <button
          className="btn btn-outline btn-info ml-auto mr-0 mt-4 w-24"
          onClick={() => {
            navigate(`/edit/${id}`, { state: { article } });
          }}
        >
          수정하기
        </button>

        <div className="ml-auto mr-0">{article?.createDate}</div>
        <div className="form-control w-full mt-8 mb-12 text-3xl">
          {article?.title}
        </div>
        <Viewer
          initialValue={article?.body}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        <div className="flex w-full mt-4">
          {article.imageList.map((image, index) => {
            return (
              <div key={index} className="w-36">
                <img src={image.imgUrl} alt="article image" />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
