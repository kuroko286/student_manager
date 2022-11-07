import React, { useState } from "react";
import { updateStudentPoint } from "../services/CourseService";

function Point({ courseId, msv, point }) {
  const [edit, setEdit] = useState("off");
  const [newPoint, setNewPoint] = useState(point);
  const handleChange = (event) => {
    setNewPoint(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEdit("off");
    await updateStudentPoint(courseId,msv,newPoint).then(res => console.log(res)).catch(err=>console.log(err));
};

  return (
    <div>
      {edit === "off" ? (
        <>
          <span>{newPoint}</span>
          <i
            onClick={() => setEdit("on")}
            class="fa-solid fa-pen-to-square orange icon p-2"
          ></i>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            style={{ maxWidth: "45px" }}
            value={newPoint}
            onChange={handleChange}
          ></input>
          <button className="btn-icon" type="submit"><i class="fa-solid fa-check green"></i></button>
        </form>
      )}
    </div>
  );
}

export default React.memo(Point);
