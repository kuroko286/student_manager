import React, { useEffect, useRef, useState } from "react";
import { updateStudentPoint } from "../services/CourseService";

function Point({ courseId, msv, point,updatePoint}) {
  const [quantity,setQuantity] = useState(0);
  const [edit, setEdit] = useState("off");
  const [newPoint, setNewPoint] = useState({
    prev:point,
    curr:point
  });
  // useEffect(()=>{
  //   console.log("effect");
  //   prevPointRef.current = newPoint;
  // },[newPoint])
  const handleChange = async (event) => {
    setNewPoint({
      prev:newPoint.curr,
      curr:+event.target.value
    });
    setQuantity(quantity + (event.target.value - newPoint.curr));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEdit("off");
    await updateStudentPoint(courseId,msv,newPoint.curr).then(res => console.log(res)).catch(err=>console.log(err));
    await updatePoint(quantity);
    setQuantity(0);
};

  return (
    <div>
      {edit === "off" ? (
        <>
          <span>{newPoint.curr}</span>
          <i
            onClick={() => setEdit("on")}
            class="fa-solid fa-pen-to-square orange icon p-2"
          ></i>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
          type="number"
          required
            autoFocus
            style={{ maxWidth: "45px" }}
            value={newPoint.curr}
            onChange={handleChange}
          ></input>
          <button className="btn-icon" type="submit"><i class="fa-solid fa-check green"></i></button>
        </form>
      )}
    </div>
  );
}

export default React.memo(Point);
