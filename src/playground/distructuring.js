//Object distructuring

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-published'} = book.publisher
//console.log(publisherName);


//Array distructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [name, , medium,] = item

console.log(` a medium ${name} costs ${medium}`);
