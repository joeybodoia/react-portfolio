import React from "react";

const Project = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>
        <a href={props.git}>github page</a>
      </h3>
      <h3>
        <a href={props.live}>Live app</a>
      </h3>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default Project;
