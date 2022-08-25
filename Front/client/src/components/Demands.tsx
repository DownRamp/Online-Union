import React, { useState, useEffect } from "react";

import UnionService from "../services/user.service";

const Demands: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UnionService.getVotes(1,1).then(

      (response) => {
        setContent(response.data.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  function VoteList(){
    const sidebar = (
      <ul>
        {content?.map((post:any) =>(
          <li key={post.id}>
            {post.name}
          </li>
        ))}
      </ul>
    );
    const current = content?.map((content:any) =>
      <div key={content.id}>
        <h2>{content.area_id}</h2>
        <h3>{content.title}</h3>
        <p>{content.reason}</p>
        <p>Number of votes: {content.votes}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {current}
      </div>
    );
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Demands List</h3>
      </header>
      <VoteList/>
    </div>
  );
};

export default Demands;
