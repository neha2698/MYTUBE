import { Link } from "@reach/router";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';
import React from "react";

TimeAgo.addDefaultLocale(en);

const Video = (props) => {
  const timeAgo = new TimeAgo("en-us");
  const dateAdded = new Date(props.dateAdded);
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
       <div className="video-image">
         <img src={props.thumbnail.url} alt=""/> 
       </div>
       <div className="video-info">
          <h3>{props.title}</h3>
          <h4>{timeAgo.format(dateAdded)}</h4>
          <h4>{props.channel}</h4>
          <p>{props.description}</p>
        </div>
   </Link>
  );
    // return React.createElement("div", {}, [
    //   React.createElement("h2", {}, props.title),
    //   React.createElement("h3", {}, props.dateAdded),
    //   React.createElement("h3", {}, props.channel),
    // ]);
  };

  export default Video;