const express = require('express');
const app = express();

const PORT = 8080;

app.get('/',(req,res) => {
    res.json({
        msg:"my website"
    })
});

app.listen(PORT,() => {
    console.log(`listning on port ${PORT}`);
})