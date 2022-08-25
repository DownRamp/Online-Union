import React, { useState, useEffect } from "react";

// import UnionService from "../services/user.service";

const Companies: React.FC = () => {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    const companies:any[] = [
      { id: 1, title: "Make1",  description: 2016 },
      { id: 2, title: "Make2",  description: 2016},
      { id: 3, title: "Make3",  description: 2016 },
    ];
    setContent(companies);
  }, []);

  function CompanyList(){
    const sidebar = (
      <ul>
        {content?.map((post:any) =>(
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    );
    const current = content?.map((content:any) =>
      <div key={content.id}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
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
        <h3>Company List</h3>
      </header>
      <CompanyList/>
    </div>
  );
};

export default Companies;
