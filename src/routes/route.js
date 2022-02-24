const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": [
               {
                   "bookingNumber": 1,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286598000000',
                   "bookedOn": '31/08/2021',
                   "bookedFor": '01/09/2021'
               },
               {
                   "bookingNumber": 2,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286518000000',
                   "bookedOn": '31/08/2001',
                   "bookedFor": '01/09/2001'
               },
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
   ]
 
  

   router.post('/players/:name/:dob/:gender/:city/:sports/:bookings', function(req, res){
    let userName = req.params.name
    let userDob = req.params.dob
    let userGender = req.params.gender
    let userCity = req.params.city
    let userSports = req.params.sports
    let userBooking = req.params.bookings

    let newPlayer = {}
    newPlayer.name = userName
    newPlayer.dob = userDob
    newPlayer.gender =userGender
    newPlayer.city = userCity
    newPlayer.sports = [userSports]
    newPlayer.bookings = [userBooking]
    for (let i =0; i<players.length; i++){
        if(players[i].name != userName){
            players.push(newPlayer)
            console.log(newPlayer)
            res.send(players)
        }else{
            res.send("name already exist")
            break;
        }
    }


})
  
  
    router.post('/players/:playerName/bookings/:bookingId', function(req, res){
        let userName = req.params.playerName
        let userBookingId = req.params.bookingId
        let userBookings = req.body

        for(let i=0; i<players.length; i++){
            if (players[i].name == userName){
                let arr = players[i].bookings
                if(arr.length === 0){
                    arr.push(userBookings)
                    res.send(players)
                }else{
                for (let j=0; j<arr.length; j++){
                    if(arr[j].bookingNumber != userBookingId) {
                        arr.push(userBookings)
                        res.send(players)
                    }else{
                        res.send("booking ID already exist")
                    }
                }
            }

        } 

    }
    res.send("name does not exist")
})

module.exports = router;
