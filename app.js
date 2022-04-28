const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.listen(process.env.PORT || 3000, () => {
    console.log('localhost: 3000')
});

//archivos public
app.use(express.static("public"));

//EJS
app.set("view engine", "ejs");

app.use('/', mainRoutes);

