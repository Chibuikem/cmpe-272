var Book = require('../models/book');

var mongoose = require('mongoose');

mongoose.connect(/* Your MongDB connection String */ , { useNewUrlParser: true });

var books = [
    new Book({
        ISBN: 0000000000011,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K. Rowling',
        price: 11
    }),
    new Book({
        ISBN: 0000000000012,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        price: 15
    }),
    new Book({
        ISBN: 0000000000013,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        price: 10
    }),
    new Book({
        ISBN: 0000000000015,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
        title: 'Harry Potter and the Order of the Pheonix',
        author: 'J.K. Rowling',
        price: 15
    }),
    new Book({
        ISBN: 0000000000014,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Harry_Potter_and_the_Goblet_of_Fire.jpg',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        price: 10
    }),
    new Book({
        ISBN: 0000000000016,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Harry_Potter_and_the_Half-Blood_Prince.jpg',
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 14
    }),
    new Book({
        ISBN: 0000000000017,
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 20
    })
];

var done = 0;
for (var i = 0; i < books.length; i++) {
    books[i].save(function(err, result) {
        done++;
        if (done === books.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
