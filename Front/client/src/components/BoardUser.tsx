import React, { useState, useEffect } from "react";
import * as AuthService from "../services/auth.service";

import UnionService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardUser: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UnionService.getJobs().then(

      (response) => {
        setContent(response.data.data);
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  function JobList(){
    const userStr = localStorage.getItem("user");
    console.log(userStr);
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
        <h3>{content.name}</h3>
        <p>{content.description}</p>
      </div>
    );
    const user = AuthService.getCurrentUser();
    if(user.roles.includes("ROLE_MODERATOR")){
      return (
        <div>
          HI MODERATOR
          {sidebar}
          <hr />
          {current}
        </div>
      );
    }
    else{
    return (
      <div>
        {sidebar}
        <hr />
        {current}
      </div>
    );
    }
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Job List</h3>
      </header>
      <JobList/>
    </div>
  );
};


export default BoardUser;
