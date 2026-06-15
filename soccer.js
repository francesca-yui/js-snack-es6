const TeamsObject = (name, points, fouls) => ({ name, points, fouls });
const soccerTeams = [
    {name: 'Inter', points: 0, fouls: 0},
    {name: 'Juventus', points: 0, fouls: 0},
    {name: 'Milan', points: 0, fouls: 0},
    {name: 'Atalanta', points: 0, fouls: 0},
    {name: 'Bologna', points: 0, fouls: 0},
    {name: 'Fiorentina', points: 0, fouls: 0},
    {name: 'Lazio', points: 0, fouls: 0},
    {name: 'Napoli', points: 0, fouls: 0},
    {name: 'Roma', points: 0, fouls: 0},
    {name: 'Genoa', points: 0, fouls: 0},
    {name: 'Torino', points: 0, fouls: 0},
];

const getRandomNum = () => {
    return Math.floor(Math.random() * 4);
}

const getPointsFouls = (soccerTeams) => {
    for (let i = 0; i < soccerTeams.length; i++) {
        const teams = soccerTeams[i];

        teams.points = getRandomNum();
        teams.fouls = getRandomNum();
    } 
};

const teamAndFouls = []; 

//Generiamo i dati random nell'array originale
getPointsFouls(soccerTeams);


//ciclo for con l'Array aggiornato per estrarre quello che ci serve
for (let j = 0; j < soccerTeams.length; j++) {
    const teams = soccerTeams[i];

    //push nel nuovo Arrey solo Name e Fouls
    teamAndFouls.push({ name: team.name, fouls: team.fouls })
}

console.log(teamAndFouls);

