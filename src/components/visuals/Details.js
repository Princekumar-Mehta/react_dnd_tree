import React from "react";

const Details = ({ id, uid, title }) => {
  return (
    <div className="details">
      <span class="details-text">uid:{uid.toString().substring(0, 20)}...</span>
      <span class="details-text">
        id:
        {id}
      </span>
      <span class="details-text">title:{title}</span>
    </div>
  );
};

export default Details;
