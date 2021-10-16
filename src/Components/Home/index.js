import React from "react";
import "./style.css";
import { Button } from "antd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Home() {
  return (
    <div className="home">
      <Button className="home__button" type="primary" shape="round">
        Add Teacher <AddCircleOutlineIcon fontSize="small" />{" "}
      </Button>
    </div>
  );
}

export default Home;
