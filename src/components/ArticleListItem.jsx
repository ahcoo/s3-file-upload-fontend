import React from 'react';

const ArticleListItem = ({article}) => {
    console.log(article);
    const {id, title, body, createDate, updatedDate} = article;
    return (
        <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>{createDate}</td>
    </tr>
    );
};

export default ArticleListItem;