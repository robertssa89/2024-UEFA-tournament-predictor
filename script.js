console.log("Welcome to the 2024 UEFA tournament predictor!");

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

  let winners = [];

const pickWinners = () => {
  groups.forEach(group => {
    let randomNumber = Math.floor(Math.random() * 4);
    let winner = group.teams[randomNumber];
    console.log(`The winner of Group ${group.name} will be ${winner}`);
    winners.push(winner);
  });  
};

const mostGroupGoals = () => {
  let randomGoals = Math.floor((Math.random() * 5) + 5);
  let randomWinner = Math.floor(Math.random() * 6);
  console.log(`${winners[randomWinner]} scored the most goals in the group stages with ${randomGoals} goals!`);
}

const tourneyWinner = teams[Math.floor(Math.random() * 24)];

const congrats = (team) => {
  console.log(`${team.country} is our pick for tournament winner. ${team.slogan}`);
}

pickWinners();
mostGroupGoals();
congrats(tourneyWinner);


