const person = {
    name: 'Marco',
    birthYear: 2000,
    isOver18: (currentYear) => currentYear >= person.birthYear +18

/*  isOver18: function (currentYear) { return currentYear >= this.birthYear +18}
    THIS (variabile presente solo nelle function - no arroy function) fa riferimento all'oggetto corrente   
*/
};

console.log(person.isOver18(2026));

