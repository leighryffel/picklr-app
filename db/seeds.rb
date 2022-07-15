# puts "🏓 Seeding users..."

# Am I supposed to be using password or password_digest as a parameter? Password isn't working..

# User.create(username: "lryffel", password_digest: "12345")
# User.create(username: "pryffel", password_digest: "12345")

puts "🏓 Seeding courts..."

Court.create(name: "McCarren Park", location: "Williamsburg", image_url: "https://images.ctfassets.net/cgcah00ul21b/7HDuM5da1OMxccVDMSSnGL/381b1567ed3791a73f5c0f17f8920480/IMG_3325.jpg")
Court.create(name: "Brooklyn Bridge Park", location: "DUMBO", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Brooklyn_Bridge_Park_td_%282019-08-23%29_140_-_Pier_2%2C_Basketball_Court_2.jpg/800px-Brooklyn_Bridge_Park_td_%282019-08-23%29_140_-_Pier_2%2C_Basketball_Court_2.jpg")
Court.create(name: "Prospect Park", location: "Park Slope", image_url: "https://images.ctfassets.net/cgcah00ul21b/6oxwRmG0yHwrph5UyubIeu/84042dba6104e3e0af27591cf4640293/o.jpg")
Court.create(name: "Maria Hernandez Park", location: "Bushwick", image_url: "https://bushwickdaily.com/wp-content/uploads/2021/08/12508306-EDE0-47D6-876E-71E2F59A809C.jpg")
Court.create(name: "Riverside Park", location: "Upper West Side", image_url: "https://www.westsiderag.com/wp-content/uploads/2018/06/119th-courts.jpg")
Court.create(name: "Central Park", location: "Manhattan", image_url: "https://static01.nyt.com/images/2012/08/22/sports/CPTC1/CPTC1-superJumbo.jpg")

# puts "🏓 Seeding reservations..."

# Reservation.create(date: "2022/07/20", time: "1", user_id: 2, court_id: 1)
# Reservation.create(date: "2022/07/20", time: "1", user_id: 1, court_id: 2)

puts "🏓 Data seeded!"