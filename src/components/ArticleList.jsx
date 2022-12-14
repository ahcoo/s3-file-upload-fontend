import React from "react";
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles, setArticles }) => {
  return (
    <div className="overflow-x-auto flex justify-center mt-16">
      <table className="max-w-5xl table table-compact w-full lg">
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>작성 일시</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <ArticleListItem
              key={index}
              article={article}
              setArticles={setArticles}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
