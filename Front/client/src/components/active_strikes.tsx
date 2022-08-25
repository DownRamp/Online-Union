import React, { useState, useEffect } from "react";

import UnionService from "../services/user.service";

const Strike: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UnionService.getStrike().then(
      (response) => {
        console.log(response);
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

  function StrikeList(){
    console.log(content);
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
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <ul>
            <li>Area id:{content.area_id}</li>
            <li>Job id: {content.job_id}</li>
        </ul>
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
        <h3>Strikes</h3>
      </header>
      <StrikeList/>
    </div>
  );
};

export default Strike;
