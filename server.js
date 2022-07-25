const express = require("express");
const app = express();
const urllib = require("urllib");
const API_EXTERNAL = "http://data.nba.net/10s/prod/v1/2018/players.json";
let players = [];
let teamId;

const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

urllib.request(API_EXTERNAL, (err, data, _res) => {
  if (err) throw err;
  players = JSON.parse(data.toString()).league.standard;
});

filterPlayers = (players) => {
  let ActivePlayers = [];
  for (const player of players) {
    console.log(player);
    if (player["isActive"] && player["teamId"] == teamId) {
      ActivePlayers.push(player);
    }
  }
  return ActivePlayers;
};

let path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/teams/:teamName", (req, res) => {
  let teamName = req.params.teamName;
  teamId = teamToIDs[teamName];
  let targetTeam = filterPlayers(players);
  res.send(targetTeam);
});

let port = 3000;
app.listen(port, function () {
  console.log("server running .... ");
});
