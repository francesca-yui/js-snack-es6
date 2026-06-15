/*const makeCd = (title, genre, author, tracks) => ({
    title : title,
    genre: genre,
    author: author,
    tracks: tracks,
});*/

const makeCd = (title, genre, author, tracks) => ({ title, genre, author, tracks });
const makeTrack = (title, durationSeconds, genre) => ({ title, durationSeconds, genre })

const collection = [
    makeCd(
        'ciao',
        'jazz',
        'sasaph',
        [
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'pop'),
            makeTrack('oidfshohsdaj', 300, 'jazz'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
        ]  
    ),
        makeCd(
        'aaaaaaaaaaa',
        'jazz',
        'sasaph',
        [
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
        ]  
    ),
        makeCd(
        'aaaaaaaaaaa',
        'jazz',
        'sasaph',
        [
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
            makeTrack('oidfshohsdaj', 300, 'rock'),
        ]  
    ),
];

/*const findJazzCd = collection => {
    for (let i = 0; i < collection.length; i++) {
    const cd = collection[i]; //ciclo nell'arrey, ogni elemento dell'arrey è un oggetto//s

    if (cd.genre === 'jazz') {
        return cd;
    }
}

return null;
};
console.log(findJazzCd(collection));*/

const findJazzCd = collection => {
    for (let i = 0; i < collection.length; i++) {
        const cd = collection[i]; 

        for (let j = 0; j < cd.tracks.length; j++) {
            const tracks = cd.tracks[j]; 

            if (tracks.genre === 'jazz') {
                return cd;
            }
    }

}   

return null;
};

console.log(findJazzCd(collection));