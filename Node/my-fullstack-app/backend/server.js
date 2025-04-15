const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
let users = [{ id: 1, name: 'Bhaskar', email: 'mbhaskar@kluniversity.in' },
{ id: 2, name: 'Karthik', email: 'karthik@kluniversity.in' }
];
// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});
// POST new user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.listen(PORT, () => {
    console.log(` Backend running at http://localhost:${PORT}`);
});