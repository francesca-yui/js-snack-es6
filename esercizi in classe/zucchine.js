forconst zucchine = [
    {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 17,        
    },
    {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 20,        
    },
    {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 13,        
    },

    {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 12,        
    },

        {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 11,        
    },

        {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 8,        
    },
    {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 4,        
    },
        {
        varietà: '',
        pesoGr: 200,
        lunghezzaCm: 11,        
    }
];

const piùDi15 = [];
const menoDi15 = [];

for (let i = 0; i < zucchine.length; i++) {
    const zucchina = zucchine[i];

    if (zucchina.lunghezzaCm > 15) piùDi15.push(zucchina);
    else menoDi15.push(zucchina);
};

const pesoTotale = zucc => {
    let totale = 0;

    for (const z of zucc) totale += z.pesoGr;
    return totale;
}

console.log(pesoTotale(piùDi15));
console.log(pesoTotale(menoDi15));

/* 
versione lunga
const pesoTotale = (zucchine) => {
    let totale = 0;
    for (const zucc of zucchine) {
        totale += zucchine.pesoGr;
    }
    return totale;
};
console.log(pesoTotale(zucchine));

versione abbreviata
let totale = 0;
for (const zucchina of zucchine) {
    totale += zucchina.pesoGr;
    }
console.log(totale);

somma peso delle zucchine che hanno una lunghezza superiore a 11cm
let totale = 0;
for (const zucchina of zucchine) {
    if ( zucchina.lunghezzaCm >= 11) totale += zucchina.pesoGr;
    }
console.log(totale);


for of > array 
for in > oggetti */