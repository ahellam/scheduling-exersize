import React from 'react'

function Schedule({shift}) {

  const daySelector = (num) => shift.shifts.filter(s => s.day === num)
  // defining filter functions for each day
  const sundayFilter = daySelector(0)
  const mondayFilter = daySelector(1)
  const tuesdayFilter = daySelector(2)
  const wednesdayFilter = daySelector(3)
  const thursdayFilter = daySelector(4)
  const fridayFilter = daySelector(5)
  const saturdayFilter = daySelector(6)
  // console.log('sunday shifts:', sundayFilter)

  // checks the color value of the shift and sets css accordingly
  function roleColor(dayFilter) {
    if (dayFilter[0].color === 'red')
      return 'text-red-700'
    if (dayFilter[0].color === 'orange')
      return 'text-orange-500'
    if (dayFilter[0].color === 'green')
      return 'text-green-600'
    else 
      return 'text-purple-700'
  }

  return (

    <div className="font-bold grid grid-cols-9 grid-rows-5 grid-flow-col text-center border-[1.5px] border-black m-[1px]">
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

{/* HOURS & ROLES */}
{/* SUNDAY */}
      { sundayFilter[0] && <div className={`col-start-3 row-start-2 ${roleColor(sundayFilter)}`}>
        { sundayFilter[0].start_at } - { sundayFilter[0].end_at }
      </div> }

      { sundayFilter[0] && <div className={`col-start-3 row-start-4 ${roleColor(sundayFilter)}`}>
        { sundayFilter[0].role }
      </div> }

{/* MONDAY */}
      { mondayFilter[0] && <div className={`col-start-4 row-start-2 ${roleColor(mondayFilter)}`}>
        { mondayFilter[0].start_at } - { mondayFilter[0].end_at }
      </div> }

      { mondayFilter[0] && <div className={`col-start-4 row-start-4 ${roleColor(mondayFilter)}`}>
        { mondayFilter[0].role }
      </div> }

{/* TUESDAY */}
      { tuesdayFilter[0] && <div className={`col-start-5 row-start-2 ${roleColor(tuesdayFilter)}`}>
        { tuesdayFilter[0].start_at } - { tuesdayFilter[0].end_at }
      </div> }

      { tuesdayFilter[0] && <div className={`col-start-5 row-start-4 ${roleColor(tuesdayFilter)}`}>
        { tuesdayFilter[0].role }
      </div> }

{/* WEDNESDAY */}
      { wednesdayFilter[0] && <div className={`col-start-6 row-start-2 ${roleColor(wednesdayFilter)}`}>
        { wednesdayFilter[0].start_at } - { wednesdayFilter[0].end_at }
      </div> }

      { wednesdayFilter[0] && <div className={`col-start-6 row-start-4 ${roleColor(wednesdayFilter)}`}>
        { wednesdayFilter[0].role }
      </div> }

{/* THURSDAY */}
      { thursdayFilter[0] && <div className={`col-start-7 row-start-2 ${roleColor(thursdayFilter)}`}>
        { thursdayFilter[0].start_at } - { thursdayFilter[0].end_at }
      </div> }

      { thursdayFilter[0] && <div className={`col-start-7 row-start-4 ${roleColor(thursdayFilter)}`}>
        { thursdayFilter[0].role }
      </div> }

{/* FRIDAY */}
      { fridayFilter[0] && <div className={`col-start-8 row-start-2 ${roleColor(fridayFilter)}`}>
        { fridayFilter[0].start_at } - { fridayFilter[0].end_at }
      </div> }

      { fridayFilter[0] && <div className={`col-start-8 row-start-4 ${roleColor(fridayFilter)}`}>
        { fridayFilter[0].role }
      </div> }

{/* SATURDAY */}
      { saturdayFilter[0] && <div className={`col-start-9 row-start-2 ${roleColor(saturdayFilter)}`}>
        { saturdayFilter[0].start_at } - { saturdayFilter[0].end_at }
      </div> }

      { saturdayFilter[0] && <div className={`col-start-9 row-start-4 ${roleColor(saturdayFilter)}`}>
        { saturdayFilter[0].role }
      </div> }

    </div>
  )
}

export default Schedule