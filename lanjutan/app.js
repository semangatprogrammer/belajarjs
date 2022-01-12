const fs = require('fs')

//menuliskan file ke syncronous
//fs.writeFileSync('test.text', 'Hello  World wahai teman teman')

//fs.writeFileSync('data/test.text', 'Hello  World aaaa')

//console.log(fs)

//cara membuat try catch error
try {
    fs.writeFileSync('data/test.text', 'Hello  World secara syncronous')
} catch (e) {
    console.log(e)
}