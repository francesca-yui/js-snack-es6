const car = {
    brand: 'Toyota',
    model: 'Yaris',
    plate: 'XJ039',
    engine: {
        powerKW: 90,
        macSpeedKmH: 180
    }
};

/* //stampa brand model plate engine presenti in car//
for (const key in car) {
    console.log(key);
}*/

/* //stampa una tabella con info presenti in car//
console.table(car)

for (const key in car) {
    console.log(key);
}*/

for (const key in car) {
    console.log({ key, value: car[key] });
}