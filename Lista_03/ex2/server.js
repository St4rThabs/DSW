import express from 'express';
import userModule from './user.js'; 

const app = express();
const porta = 8080;

const user = new userModule.User("Amazing", 100); 

app.get('/user_data', (req, res) => {
  res.send(`${user.name} and User's age is ${user.age}`);
});

app.listen(porta, () => {
  console.log(`Server running at http://localhost:${porta}`);
});
