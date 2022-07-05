const express = require('express');
const {json} = require('express');
const connectDB = require('./config/database');
const taskRoute = require('./router/taskRoutes');

//you can put in the uri if you don't want to use the default
connectDB();

const app = express();
app.use(json());
app.use('/task', taskRoute);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Todo Task CRUD")
})

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));