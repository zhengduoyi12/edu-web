import React from "react";

import { useHistory } from "react-router-dom";

const PositionCard = (props) => {
  const { params }= props;
  const history = useHistory();
  function goRoleDetails() {
    history.push("/positionDetails");
  }

  return (
    <div className="positionCard">
      <div
        onClick={() => {
          goRoleDetails();
        }}
        style={{
          width: "382px",
          height: "182px",
          border: "1px solid #cccccc",
          borderRadius: "8px",
          display: "flex",
          flexWrap: "wrap",
          margin: "8px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "100px",
            lineHeight: "100px",
            fontSize: "24px",
            color: "#666666",
            paddingLeft: "20px",
          }}
        >
          {params.name}
        </div>
        <div
          style={{
            width: "80px",
            height: "100px",
            fontSize: "24px",
            color: "#FF8C00",
            lineHeight: "100px",
          }}
        >
          {params.salary}
        </div>
        <div
          style={{
            width: "380px",
            height: "80px",
            lineHeight: "80px",
            paddingLeft: "20px",
            fontSize: "18px",
            color: "#666666",
          }}
        >
          <span>{params.education}</span>
          <span style={{ marginLeft: "20px" }}>{params.year}工作经验</span>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
