console.log("Welcome to the 2024 UEFA tournament predictor!");

// array of group objects, name: A-F, teams: array of teams in each group
groups = [
  {
    name: "A",
    teams: ["Germany", "Switzerland", "Hungary", "Scotland"]
  }, 
  {
    name: "B",
    teams: ["Spain", "Italy", "Croatia", "Albania"]
  },
  { 
    name: "C",
    teams: ["England", "Slovenia", "Denmark", "Serbia"]
  },
  {
    name: "D",
    teams: ["Austria", "France", "Netherlands", "Poland"]
  },
  {
    name: "E",
    teams: ["Romania", "Belgium", "Slovakia", "Ukraine"]
  },
  {
    name: "F",
    teams: ["Portugal", "Turkey", "Czech Republic", "Georgia"]
  }
];

// array of team objects for each country in the 2024 tournament, each object has a team name and slogan
teams = [
  {country: "Germany", slogan: "Dschland, Dschland!"}, 
  {country: "Switzerland", slogan: "Hopp Schwiiz!"}, 
  {country: "Hungary", slogan: "Hajrá Magyarország!"},
  {country: "Spain", slogan: "Olé, Olé, Olé!"}, 
  {country: "Scotland", slogan: "Let's go Scotland"},
  {country: "Italy", slogan: "I-ta-lia!"},
  {country: "Croatia", slogan: "U boj, u boj - za narod svoj!"},
  {country: "Albania", slogan: "Urime!"},
  {country: "England", slogan: "God save the queen!"},
  {country: "Slovenia", slogan: "Mi Slovenci!"},
  {country: "Denmark", slogan: "Hutlihut!"},
  {country: "Serbia", slogan: "Congratulations Serbia!"},
  {country: "Austria", slogan: "Immer wieder, immer wieder, immer wieder Österreich!"},
  {country: "France", slogan: "Allez les Bleus!"},
  {country: "Netherlands", slogan: "Congrats Netherlands!"},
  {country: "Poland", slogan: "Polacy, nic się nie stało"},
  {country: "Romania", slogan: "Felicitări România!"},
  {country: "Belgium", slogan: "Congrats Belgium!"}, 
  {country: "Slovakia", slogan: "Gratulujem Slovensko!"},
  {country: "Ukraine", slogan: "Slava Ukraini!"},
  {country: "Portugal", slogan: "Olé, Olé, Olé!"},
  {country: "Turkey", slogan: "Tebrikler Türkiye!"},
  {country: "Czech Republic", slogan: "Gratuluji Krocanovi!"},
  {country: "Georgia", slogan: "Gilotsav Sakartvelo!"}
];
  
//empty array to store random winners of each group stage
let winners = [];

//randomly selects group winners, builds the winners array, and outputs each winner
const pickWinners = () => {
  groups.forEach(group => {
    let randomNumber = Math.floor(Math.random() * 4);
    let winner = group.teams[randomNumber];
    console.log(`The winner of Group ${group.name} will be ${winner}`);
    winners.push(winner);
  });  
};

//selects and outputs the group winner that scored the most goals and the number of goals scored (between 5 and 9) 
const mostGroupGoals = () => {
  let randomGoals = Math.floor((Math.random() * 5) + 5);
  let randomWinner = Math.floor(Math.random() * 6);
  console.log(`${winners[randomWinner]} scored the most goals in the group stages with ${randomGoals} goals!`);
}

//picks a team to win the whole tournement
const tourneyWinner = teams[Math.floor(Math.random() * 24)];

//outputs the winning team and that teams's slogan
const congrats = (team) => {
  console.log(`${team.country} is our pick for tournament winner. ${team.slogan}`);
}

pickWinners();
mostGroupGoals();
congrats(tourneyWinner);


