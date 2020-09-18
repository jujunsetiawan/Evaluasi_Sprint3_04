var randomNumbers = [90,99,78,73,80,60,96,67,55,86,80,81,81,73,77,71,90,87,85,23,52,87,78,96,80,68];

console.log(randomNumbers.filter(hasil => hasil >= 65)
.map(hasil => hasil / 2)
.filter(hasil => hasil < 40)
.map(hasil => randomNumbers.length / hasil)
.reduce((acc,curr) => acc / 2 + curr));