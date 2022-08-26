import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { RouteComponentProps } from "react-router-dom";

import * as AuthService from "../services/auth.service";

import UnionService from "../services/user.service";
import EventBus from "../common/EventBus";
import Button from "./Button";


interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const BoardUser:  React.FC<Props> = ({ history }) => {

  const initialValues: {
    name: string;
    description: string;
  } = {
    name: "",
    description: "",
  };

  type Area = {
    area_id: number;
    location: string;
    job_id: number;
  };
  
  const areaValues:{
    location: string;
    job_id: number;
  } = {
    location: "",
    job_id: 0
  };

  const [content, setContent] = useState([]);
  const [area, setArea] = useState<Area[]>([]);
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // validate for job addition
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    description: Yup.string().required("This field is required!"),
  });

  // validate for area addition
  const areaValidationSchema = Yup.object().shape({
    location: Yup.string().required("This field is required!"),
    job_id: Yup.number().required("This field is required!"),
  });

  // Get initial job list
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

  // fetch all areas for this job and print to page new stuff
  function handleClick(value:Number){
    UnionService.getAreasForJob(value).then(
      (response) => {
        setArea(response.data.data);
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  function handleClickArea(value:Number, area_id:Number, job_id:Number){
    // Send to demands with info
    // Send to complaints with info
  }

  // send to different locations (Demands, complaints, Strikes)
  function addJob(){
    setForm(true);
  }

  function addArea(){
    setForm(true);
  }

const handlePostJob = (formValue: { name: string; description: string }) => {
    setMessage("");
    setLoading(true);
    console.log(formValue);
    UnionService.postJob(formValue).then(
      () => {
        history.push("/user");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  const handlePostArea = (formValue: { name: string; description: string }) => {
    setMessage("");
    setLoading(true);
    console.log(formValue);
    UnionService.postJob(formValue).then(
      () => {
        history.push("/user");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  function JobList(){
    // check if user has access
    const userStr = localStorage.getItem("user");
    const sidebar = (
      <ul>
        {content?.map((post:any) =>(
          <li key={post.id}>
            {post.name}
          </li>
        ))}
      </ul>
    );
    // button click opens areas for job
    // if area is longer then 0 then show 
    var areas = area.map((content:Area) =>
      <div className = "row" key={content.area_id} style={{paddingLeft:20}}>
      <h3>{content.location}</h3>
      <Button 
      border="line"
      color="#990000"
      height = "100px"
      onClick={()=>handleClickArea(1,content.area_id, content.job_id)}
      radius = "5%"
      width = "100px"
      children = "Check Demands"
    />
    <Button 
      border="line"
      color="#990000"
      height = "100px"
      onClick={()=>handleClickArea(2,content.area_id, content.job_id)}
      radius = "5%"
      width = "100px"
      children = "Check Complaints"
    />
    </div>
    );

    var current;
    if(area.length > 0){
      // console.log(area);
      current = content?.map((content:any) =>{
      if(content.id === area[0].job_id){
        return(
        <div className = "row" key={content.id}>
        <h3>{content.name}</h3>
        <p>{content.description}</p>
        <Button 
        border="line"
        color="#990000"
        height = "100px"
        onClick={()=>handleClick(content.id)}
        radius = "5%"
        width = "100px"
        children = "Add Area"
      />
      {areas}
      </div>);
      }
      else{
        return(
      <div key={content.id}>
        <h3>{content.name}</h3>
        <p>{content.description}</p>
        <Button 
        border="line"
        color="#990000"
        height = "100px"
        onClick={()=>handleClick(content.id)}
        radius = "5%"
        width = "100px"
        children = "Select"
      />
      </div>);}
      }
    );
    console.log(current);
    }
    
    else{
      current = content?.map((content:any) =>
      <div key={content.id}>
        <h3>{content.name}</h3>
        <p>{content.description}</p>
        <Button 
        border="line"
        color="#990000"
        height = "100px"
        onClick={()=>handleClick(content.id)}
        radius = "5%"
        width = "100px"
        children = "Select"
      />
      </div>
    );
    }
    const user = AuthService.getCurrentUser();
    if(user.roles.includes("ROLE_MODERATOR")){
      if(form){
      return(<div>
      <div className="card card-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePostJob}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name of job</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description of job</label>
              <Field name="description" type="description" className="form-control" />
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Submit</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>);
      }
      else{
      return (
        <div>
          <Button 
          border="line"
          color="#990000"
          height = "100px"
          onClick={()=>addJob()}
          radius = "5%"
          width = "100px"
          children = "Add a job"
        />
          {sidebar}
          <hr />
          {current}
        </div>
      );
      }
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
