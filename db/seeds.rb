puts "🏓 Seeding users..."

# Am I supposed to be using password or password_digest as a parameter? Password isn't working..

# User.create(first_name: "Leigh", last_name: "Ryffel", username: "lryffel", password_digest: "12345", skill_level: 2.5)
# User.create(first_name: "Peter", last_name: "Ryffel", username: "pryffel", password_digest: "12345", skill_level: 3.0)

puts "🏓 Seeding courts..."

Court.create(name: "McCarren Park Court 1", location: "Williamsburg")
Court.create(name: "McCarren Park Court 2", location: "Williamsburg")
Court.create(name: "McCarren Park Court 3", location: "Williamsburg")
Court.create(name: "Brooklyn Bridge Park Court 1", location: "DUMBO")
Court.create(name: "Brooklyn Bridge Park Court 2", location: "DUMBO")
Court.create(name: "Prospect Park Court 1", location: "Park Slope")
Court.create(name: "Prospect Park Court 2", location: "Park Slope")

puts "🏓 Seeding signups..."

# Signup.create(date: "2022/07/20", time: "12:00", user_id: 1, court_id: 1)
# Signup.create(date: "2022/07/20", time: "12:00", user_id: 2, court_id: 1)

puts "🏓 Data seeded!"