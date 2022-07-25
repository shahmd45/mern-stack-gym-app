const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Get Method Called');
});

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    }
    console.log('Listening to PORT', PORT);
})

