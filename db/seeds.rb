# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "S E E D I N G........"

e1 = Employee.create(first_name: 'Alfred', last_name: 'Brown')
e2 = Employee.create(first_name: 'Tim', last_name: 'Cannady')
e3 = Employee.create(first_name: 'Jeff', last_name: 'Auston')

s1 = Shift.create(employee_id: e1.id, day: 0, start_at: '12pm', end_at: '5pm', duration: 5, role: 'Server', color: 'red')
s2 = Shift.create(employee_id: e1.id, day: 1, start_at: '9am', end_at: '12pm', duration: 3, role: 'Host', color: 'green')
s3 = Shift.create(employee_id: e1.id, day: 3, start_at: '9am', end_at: '4pm', duration: 7, role: 'Server', color: 'red')
s4 = Shift.create(employee_id: e1.id, day: 5, start_at: '9am', end_at: '2pm', duration: 5, role: 'Host', color: 'green')

s5 = Shift.create(employee_id: e2.id, day: 0, start_at: '11am', end_at: '6pm', duration: 7, role: 'Chef', color: 'orange')
s6 = Shift.create(employee_id: e2.id, day: 1, start_at: '9am', end_at: '3pm', duration: 6, role: 'Dishwasher', color: 'purple')
s7 = Shift.create(employee_id: e2.id, day: 2, start_at: '9am', end_at: '1pm', duration: 4, role: 'Chef', color: 'orange')
s8 = Shift.create(employee_id: e2.id, day: 5, start_at: '9pm', end_at: '4am', duration: 7, role: 'Dishwasher', color: 'purple')

s9 = Shift.create(employee_id: e3.id, day: 1, start_at: '11am', end_at: '6pm', duration: 7, role: 'Chef', color: 'orange')
s10 = Shift.create(employee_id: e3.id, day: 2, start_at: '9am', end_at: '3pm', duration: 6, role: 'Dishwasher', color: 'purple')
s11 = Shift.create(employee_id: e3.id, day: 4, start_at: '9am', end_at: '1pm', duration: 4, role: 'Chef', color: 'orange')
s12 = Shift.create(employee_id: e3.id, day: 6, start_at: '9am', end_at: '4pm', duration: 7, role: 'Dishwasher', color: 'purple')

puts 'SEEDING DONE!!!!!!!'



# shifts.json
# [
#     {
#     "name": "Alfred Brown",
#     "shifts": [
#     {
#     "day": 0,
#     "start_at": "12pm",
#     "end_at": "5pm",
#     "duration": 5,
#     "role": "Server",
#     "color": "red"
#     },
#     {
#     "day": 1,
#     "start_at": "9am",
#     "end_at": "12pm",
#     "duration": 3,
#     "role": "Host",
#     "color": "green"
#     },
#     {
#     "day": 3,
#     "start_at": "9am",
#     "end_at": "4pm",
#     "duration": 7,
#     "role": "Server",
#     "color": "red"
#     },
#     {
#     "day": 5,
#     "start_at": "9am",
#     "end_at": "2pm",
#     "duration": 5,
#     "role": "Host",
#     "color": "green"
#     }
#     ]
#     },
#     {
#     "name": "Tim Cannady",
#     "shifts": [
#     {
#     "day": 0,
#     "start_at": "11am",
#     "end_at": "6pm",
#     "duration": 7,
#     "role": "Chef",
#     "color": "orange"
#     },
#     {
#     "day": 1,
#     "start_at": "9am",
#     "end_at": "3pm",
#     "duration": 6,
#     "role": "Dishwasher",
#     "color": "purple"
#     },
#     {
#     "day": 2,
#     "start_at": "9am",
#     "end_at": "1pm",
#     "duration": 4,
#     "role": "Chef",
#     "color": "orange"
#     },
#     {
#     "day": 5,
#     "start_at": "9pm",
#     "end_at": "4am",
#     "duration": 7,
#     "role": "Dishwasher",
#     "color": "purple"
#     }
#     ]
#     },
#     {
#     "name": "Jeff Auston",
#     "shifts": [
#     {
#     "day": 1,
#     "start_at": "11am",
#     "end_at": "6pm",
#     "duration": 7,
#     "role": "Chef",
#     "color": "orange"
#     },
#     {
#     "day": 2,
#     "start_at": "9am",
#     "end_at": "3pm",
#     "duration": 6,
#     "role": "Dishwasher",
#     "color": "purple"
#     },
#     {
#     "day": 4,
#     "start_at": "9am",
#     "end_at": "1pm",
#     "duration": 4,
#     "role": "Chef",
#     "color": "orange"
#     },
#     {
#     "day": 6,
#     "start_at": "9am",
#     "end_at": "4pm",
#     "duration": 7,
#     "role": "Dishwasher",
#     "color": "purple"
#     }
#     ]
#     }
#     ]