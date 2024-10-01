const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

require('./connection');

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/wallet', require('./routes/wallet'));
app.use('/history', require('./routes/history'));
app.use('/add-money', require('./routes/addMoney'));
app.use('/send-money', require('./routes/sendMoney'));
app.use('/user-info', require('./routes/userInfo'));
app.use('/edit-profile', require('./routes/editProfile'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});