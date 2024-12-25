const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "once-in-ho.jpg",
        "title": "Once Upon a Time... in Hollywood",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140
    },
    {
        "id": crypto.randomUUID(),
        "cover": "marriage-strory.jpg",
        "title": "Marriage Story",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90
    },
    {
        "id": crypto.randomUUID(),
        "cover": "pain-and-gain.jpg",
        "title": "Pain & Gain",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "parasite.jpg",
        "title": "Parasite",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250
    },
    {
        "id": crypto.randomUUID(),
        "cover": "iron-man.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "Avengers-Endgame.jpg",
        "title": "Avengers Endgame",
        "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe...",
        "genre": "Action/Adventure/Fantasy/Sci-Fi",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "Titanic-movie.jpg",
        "title": "Titanic",
        "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic...",
        "genre": " Romance/Adventure",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "Avater.png",
        "title": "Avater",
        "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home...",
        "genre": " Sci-Fi/Adventure/Action/Fantasy",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "star-war.jpg",
        "title": "Star Wars: The Force Awakens",
        "description": "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.",
        "genre": " Sci-Fi/Adventure/Action/Fantasy",
        "rating": 5,
        "price": 100
    }
]

function getAllMovies() {
    return data;
}

export { getAllMovies };