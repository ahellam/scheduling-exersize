import React from 'react'

function Schedule({shift}) {

  // const daysToWords = (dayNum) => {
  //   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  //   return days[dayNum] 
  // }

  const sundayFilter = shift.shifts.filter(s => s.day === 0)
  const mondayFilter = shift.shifts.filter(s => s.day === 1)
  const tuesdayFilter = shift.shifts.filter(s => s.day === 2)
  const wednesdayFilter = shift.shifts.filter(s => s.day === 3)
  const thursdayFilter = shift.shifts.filter(s => s.day === 4)
  const fridayFilter = shift.shifts.filter(s => s.day === 5)
  const saturdayFilter = shift.shifts.filter(s => s.day === 6)

  // const mappedSunday = sundayFilter.map(s => s.duration)
  // const emptyArr = []
  // const reducedMappedSun = mappedSunday.reduce(function (s, v) { return s + (v || 0); }, 0)
  
  return (

    <div className="grid grid-cols-9 grid-rows-5 grid-flow-col text-center">
{/* NAMES */}
      <div className="col-start-1 row-start-3">
        {shift.name}
      </div>
{/* HOURS SUMMED */}
      <div className="col-start-2 row-start-3">
        {
          `(${shift.shifts.map(s => s.duration)
          .reduce((prevVal, currVal) => prevVal + currVal, 0)} hrs)`
        }
      </div>

{/* SUNDAY */}
      { sundayFilter[0] && <div className="col-start-3 row-start-2">
        { sundayFilter[0].start_at } - { sundayFilter[0].end_at }
      </div> }

      { sundayFilter[0] && <div className="col-start-3 row-start-4">
        { sundayFilter[0].role }
      </div> }

{/* MONDAY */}
      { mondayFilter[0] && <div className="col-start-4 row-start-2">
        { mondayFilter[0].start_at } - { mondayFilter[0].end_at }
      </div> }

      { mondayFilter[0] && <div className="col-start-4 row-start-4">
        { mondayFilter[0].role }
      </div> }

{/* TUESDAY */}
      { tuesdayFilter[0] && <div className="col-start-5 row-start-2">
        { tuesdayFilter[0].start_at } - { tuesdayFilter[0].end_at }
      </div> }

      { tuesdayFilter[0] && <div className="col-start-5 row-start-4">
        { tuesdayFilter[0].role }
      </div> }

{/* WEDNESDAY */}
      { wednesdayFilter[0] && <div className="col-start-6 row-start-2">
        { wednesdayFilter[0].start_at } - { wednesdayFilter[0].end_at }
      </div> }

      { wednesdayFilter[0] && <div className="col-start-6 row-start-4">
        { wednesdayFilter[0].role }
      </div> }

{/* THURSDAY */}
      { thursdayFilter[0] && <div className="col-start-7 row-start-2">
        { thursdayFilter[0].start_at } - { thursdayFilter[0].end_at }
      </div> }

      { thursdayFilter[0] && <div className="col-start-7 row-start-4">
        { thursdayFilter[0].role }
      </div> }

{/* FRIDAY */}
      { fridayFilter[0] && <div className="col-start-8 row-start-2">
        { fridayFilter[0].start_at } - { fridayFilter[0].end_at }
      </div> }

      { fridayFilter[0] && <div className="col-start-8 row-start-4">
        { fridayFilter[0].role }
      </div> }

{/* SATURDAY */}
      { saturdayFilter[0] && <div className="col-start-9 row-start-2">
        { saturdayFilter[0].start_at } - { saturdayFilter[0].end_at }
      </div> }

      { saturdayFilter[0] && <div className="col-start-9 row-start-4">
        { saturdayFilter[0].role }
      </div> }

    </div>
  )
}

export default Schedule