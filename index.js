const faker = require('faker');
const fs = require('fs')

// takes an array, returns a random item
const sample = array => array[Math.floor(Math.random() * array.length)]

// takes an array, returns SOME random items (I think? I can't remember)
const sampleSome = (array, max) => [...array].sort(() => Math.random() - 0.5).splice(0, Math.floor(Math.random() * (max ? max : array.length)))

const randomPlaceName = () => faker.fake(`${Math.random() < 0.5 ? '{{address.cityPrefix}} ' : ''}{{address.city}}${Math.random() < 0.5 ? '{{address.citySuffix}}' : ''}`)

const randomRAG = () => sample(['red', 'amber', 'green'])

const randomLink = max => `/statements/${Math.floor(Math.random() * max)}`

const randomScore = () => Math.floor(Math.random() * 5)

// create statement object, using the above random functions
const randomReport = () => {
    return [{
        trait: "Vitamin A",
        score: randomScore()
    },
    {
        trait: "Calcium",
        score: randomScore()
    },
    {
        trait: "Folate",
        score: randomScore()
    },
    {
        trait: "Iron",
        score: randomScore()
    },
    {
        trait: "Magnesium",
        score: randomScore()
    },

    {
        trait: "Phosphorous",
        score: randomScore()
    },
    {
        trait: "Vitamin B12",
        score: randomScore()
    },
    {
        trait: "Vitamin D",
        score: randomScore()
    },
    {
        trait: "Vitamin E",
        score: randomScore()
    },
    {
        trait: "Sleep duration",
        score: randomScore()
    },
    {
        trait: "Skin Pigmentation",
        score: randomScore()
    }]

}


// object to later be stored as JSON
const data = {
    report: []
}

 data.report = [...randomReport()]


fs.writeFile("./db.json", JSON.stringify(data), err => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Mock API data generated.");
    }
});