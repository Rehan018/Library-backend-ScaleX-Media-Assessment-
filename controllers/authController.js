const jwt = require('jsonwebtoken');

const users = [
  { username: 'admin', password: 'admin', type: 'admin' },
  { username: 'user', password: 'user', type: 'regular' }
];

function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username: user.username, type: user.type }, 'secret');
  res.json({ token });
}

module.exports = {
  login
};
