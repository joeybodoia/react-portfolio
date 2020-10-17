import React from "react";
import "./styles.css";
import Project from "./funccomp/project";

const App = () => {
  // const [state, setState] = React.useState({
  //   Project: {
  //     name: "Project Name",
  //     git: "github url",
  //     live: "live link",
  //     img: "project image"
  //   }
  // })
  return (
    <>
      <h1 className="portfolio"> My Portfolio </h1>

      <div className="container">
        <div className="project">
          <Project
            name={"Superhero Showdown"}
            git={"https://github.com/joeybodoia/generalAssemblyProjects"}
            live={"https://ga-project1.vercel.app/"}
            img={"https://i.imgur.com/Or6MzZK.png"}
          />
        </div>
        <div className="project">
          <Project
            name={"AnimeRex"}
            git={"https://github.com/joeybodoia/testProject"}
            live={"https://jbproject2.herokuapp.com/animeRec"}
            img={"https://i.imgur.com/1wY7gZ9.png"}
          />
        </div>
      </div>
    </>
  );
};

export default App;
