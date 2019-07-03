const express = require('express')
const app = express()

const port = process.env.SERVER_PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
const request = require('request')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get("/teams/:teamName", function (req, res) {
    let teamname = req.params.teamName
    let teamid = teamToIDs[teamname]
    request.get("http://data.nba.net/10s/prod/v1/2018/players.json", function (error, response, body) {
        console.log('Ahla error: ', error)
    let players = JSON.parse(body)
        let arr = players.league.standard
        let x = []
        for (let i of arr) {
            if (i.teamId === teamid && i.isActive === true) {
                x.push({ firstName: i.firstName, lastName: i.lastName, jersey: i.jersey, pos: i.pos })
}
}
res.json(x)
    })
 
})




let socket = app.listen( port, () => console.log( `Running server on port ${ port }` ) )