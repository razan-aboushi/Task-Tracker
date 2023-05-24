const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 5000; // Update the port number if needed

// Body parsing middleware
app.use(express.json());
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // TODO: Implement user authentication logic (e.g., check credentials against a database)
  // Example authentication logic:
  if (email === 'mahmoud@gmail.com' && password === '1111') {
    // If authentication is successful, generate a JWT
    const secretKey = 'your-secret-key'; // Replace with your own secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    // Send the token back to the client
    res.json({ token });
  } else {
    // If authentication fails, send an error response
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});