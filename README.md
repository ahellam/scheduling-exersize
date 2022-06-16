## Scheduling Exercise

### Intro

Congratulations! You're the first software engineer at Homebase. Your efforts could 
revolutionize the tedious, error-prone process of pen-and-paper scheduling that plagues 
the majority of local businesses. Your work may even create the world's best, cheapest, 
and most beloved software for scheduling, time tracking, and team management!

### Build a Schedule

The first step on our path to radically improving scheduling for our customers is building
a digital schedule. You receive the following ticket from your product manager:

#### Ticket

*Online Schedule for Managers & Employees*

As a manager using Homebase, I want to see an online schedule for all my employees for the
current week so that I and my employees have a globally accessible single source of truth
 for this week's schedule. 

Acceptance Criteria:
- Build a simple Ruby-based server that exposes an endpoint to fetch shifts. Feel free to use any Ruby server, but [Sinatra](https://github.com/sinatra/sinatra) is probably the easiest/most lightweight
  - Endpoint: `GET /shifts`
  - It accepts one string parameter, `sort_by`, which will either be `first_name` or `last_name`
  - It returns this [JSON payload](https://gist.githubusercontent.com/jordanfbrown/593c53ab9255a0934dbdf8e6f079e046/raw/823e34a3a702a9b6cc73f0d74e5ac4cf15f89a7b/shifts.json), sorted by first name or by last name 
- Using the JSON data returned by the server, build a schedule that looks like the mock below
- Each row shows a different employee
- Each column shows a different day of the week
- Sum the total duration of all shifts for each day and render in the header cell for each day
- Sum the total duration of all shifts for each employee and render in the name cell for each employee
- Add a dropdown that allows sorting the table by first name or by last name. The table should sort by first name by default. Selecting a new sorting value should rerender the table accordingly, and the dropdown should reflect the current sort state.

![mock](https://user-images.githubusercontent.com/467728/54561809-bb644e80-4982-11e9-83ca-488349e765ef.png)

### Setup

Use [create-react-app](https://facebook.github.io/create-react-app/) to setup an empty
React app to work with. 

#### Dev Notes
- This should be an MVP (minimum viable product). Remember, you're the founding engineer at a scrappy startup
- While you may use third party libraries, they are not necessary for this ticket
- Use any tools you'd normally use in development (looking at you, internet)