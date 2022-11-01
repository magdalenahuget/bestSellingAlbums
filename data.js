let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE

// Calculate average sales income

let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale + bestSellingAlbums[6].sale + bestSellingAlbums[7].sale) / 8;
console.log(averageSale)


// Calculate average age

let currentYear = 2022

let averageAge = ((currentYear - bestSellingAlbums[0].year) + (currentYear - bestSellingAlbums[1].year) + (currentYear - bestSellingAlbums[2].year) + (currentYear - bestSellingAlbums[3].year) + (currentYear - bestSellingAlbums[4].year) + (currentYear - bestSellingAlbums[5].year) + (currentYear - bestSellingAlbums[6].year) + (currentYear - bestSellingAlbums[7].year)) / 8;
console.log(averageAge)

// Newest and oldest album

console.log("--------------------------------------------------------")

let newestAlbum = bestSellingAlbums[6];
console.log(newestAlbum)

// let oldestAlbum = Math.min;
// console.log(oldestAlbum(bestSellingAlbums[0].year, bestSellingAlbums[1].year, bestSellingAlbums[2].year, bestSellingAlbums[3].year, bestSellingAlbums[4].year, bestSellingAlbums[5].year, bestSellingAlbums[6].year, bestSellingAlbums[3].year, bestSellingAlbums[7].year));

let oldestAlbum = bestSellingAlbums[3];
console.log(oldestAlbum)

// Albums of Eagles

let albumsOfEagles = {
    sales: bestSellingAlbums[4].sale + bestSellingAlbums[5].sale,
    isBothSoftRock: bestSellingAlbums[4].genres[1] == bestSellingAlbums[5].genres[0]
};

console.log(albumsOfEagles)

//Add an extra album

bestSellingAlbums[8] = {
    artist: "Yelawolf",
    title: "Love Story",
    year: 2015,
    genres: ["hip hop", "rap rock"],
    sale: 500000,
},

console.log(bestSellingAlbums[8]);

//Like it or not

bestSellingAlbums[0].iLikeIt = false
bestSellingAlbums[1].iLikeIt = false
bestSellingAlbums[2].iLikeIt = false
bestSellingAlbums[3].iLikeIt = true
bestSellingAlbums[4].iLikeIt = true
bestSellingAlbums[5].iLikeIt = true
bestSellingAlbums[6].iLikeIt = false
bestSellingAlbums[7].iLikeIt = false
bestSellingAlbums[8].iLikeIt = true

console.log(bestSellingAlbums);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
