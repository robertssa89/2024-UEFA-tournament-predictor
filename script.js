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

const pickWinners = () => {
  let winners = [];
  groups.forEach(group => {
    let randomNumber = Math.floor(Math.random() * 4);
    let winner = group.teams[randomNumber]
    console.log(`The winner of Group ${group.name} will be ${winner}`);
    winners.push(winner);
  })  
  return winners;
};

pickWinners();


