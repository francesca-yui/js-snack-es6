const BikeObject = (name, weightKg) => ({ name, weightKg });

const bikes = [
    { name: 'Giant TCR Advanced SL 0', weightKg: 6.4 },
    { name: 'Scott Addict RC Ultimate', weightKg: 5.9 },
    { name: 'Specialized S-Works Aethos/Sram Red Etap AXS', weightKg: 6.34 },
    { name: 'Wilier Triestina Verticale SLR', weightKg: 6.5 },
    { name: 'Orbea Orca M10iLTD Replica', weightKg: 7.0 },    
    { name: 'Cube Litening Air C:68X SLT', weightKg: 6.7 },
    { name: 'Bianchi Specialissima RC/Shimano Dura-Ace', weightKg: 6.6 },
    { name: 'Cannondale SuperSix Evo Lab 71', weightKg: 6.8 },
    { name: 'Bmc Teammachine SLR 01 One', weightKg: 6.7 },
];

let lightestBike = bikes[0];

const findLightestBike = (bikesArray) => {
    
    for (let i = 0; i < bikesArray.length; i++) {
        // UNA bike presente dentro 'bikesArray'
        const bike = bikesArray[i];
        
        // se il peso di bike < lightestBike
        if (bike.weightKg < lightestBike.weightKg) {
            
            // Aggiorna object con bike piu leggera
            lightestBike = bike; 
        }
    }
    
    return lightestBike;
}

const result = findLightestBike(bikes);
console.log(result);