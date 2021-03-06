const books = [
    {
        ISBN: "1234Book",
        title: "Getting started with MERN",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author: [1, 2],
        publications: [1],
        category: ["tech", "programming", "education"]
    }
];

const author = [
    {
        id: 1,
        name: "pavan",
        books: ["1234Book"],
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["1234Book"],
    }
];

const publication = [
    {
        id: 1,
        name: "writex",
        books: ["1234Book"],
    }
];

module.exports = {books, author, publication}