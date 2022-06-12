import { useState, useEffect } from "react";
// import { useTable } from "react-table";

import "./App.css";
import Schedule from "./Schedule";
import Weekdays from "./Weekdays";

function App() {
  const shiftURL = "http://localhost:3000/employees"
  const [shifts, setShifts] = useState([]);
  const [firstOrLast, setFirstOrLast] = useState("first_name");
  // console.log(firstOrLast)
  // console.log(shifts)

  useEffect (() => {
    fetch(`${shiftURL}?sort_by=${firstOrLast}`)
    .then(res => res.json())
    .then(setShifts)
  },[firstOrLast])


  // const sunFilter = shifts.map((sh) => sh.shifts.filter(s => s.day === 0)).filter(s => s.length >= 1)
  function dayHrs(day) {
    const hrs = shifts.map((sh) => sh.shifts.filter(s => s.day === day))
    .filter(s => s.length >= 1).flat()
    .map(s => s.duration)
    .reduce((prevVal, currVal) => prevVal + currVal, 0)

    return hrs
  }


  return (
    <div>
      <div className="SELECT-CONTAINER m-1">
        <label>
          Sort by 
          <select 
          className="border-[1px] border-black rounded-md ml-1"
          value={firstOrLast}
          onChange={(e) => setFirstOrLast(e.target.value)}
          >
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-9 grid-rows-1 grid-flow-col text-center bg-gray-300">
{/* SUN */}
        <div className="col-start-3">
          {`Sun (${dayHrs(0)} hrs)`} 
        </div>
{/* MON */}
        <div className="col-start-4">
        {`Mon (${dayHrs(1)} hrs)`} 
        </div>
{/* TUE */}
        <div className="col-start-5">
        {`Tue (${dayHrs(2)} hrs)`} 
        </div>
{/* WED */}
        <div className="col-start-6">
        {`Wed (${dayHrs(3)} hrs)`} 
        </div>
{/* THU */}
        <div className="col-start-7">
        {`Thu (${dayHrs(4)} hrs)`} 
        </div>
{/* FRI */}
        <div className="col-start-8">
        {`Fri (${dayHrs(5)} hrs)`} 
        </div>
{/* SAT */}
        <div className="col-start-9">
        {`Sat (${dayHrs(6)} hrs)`} 
        </div>
      


      </div>

      {/* <div className="SCHED-CONTAINER grid grid-cols-9 grid-rows-6 grid-flow-col m-1"> */}
        {shifts.map(shift => (
          <Schedule key={shift.id} shift={shift} shifts={shifts} />
        ))}
      {/* </div> */}
    </div>
  );
}

export default App;
