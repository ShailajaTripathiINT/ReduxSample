import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./redux/action";
import "./style.css";

function Dashboard() {
  let dispatch = useDispatch();
  const data = useSelector((state) =>state.NAME);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>{data}</p>

      <button
        className="btn-redux"
        onClick={() => {
          dispatch(changeName("Sample1"));
        }}
      >
        Click !
      </button>
    </div>
  );
}
export default Dashboard;
