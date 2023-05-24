// Import required libraries
const express = require('express');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize Firebase Admin SDK
const serviceAccount = require('./Key.json'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Create an instance of Express
const app = express();
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// Login route
app.post('/Login', (req, res) => {
  const { email, password } = req.body;

  // Authenticate user
  admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      // Verify password
      admin
        .auth()
        .getUserByEmail(email)
        .then(() => {
          // Generate a JWT token
          const token = generateToken(userRecord.uid);

          console.log('Login successful. Token:', token);

          res.json({ token });
        })
        .catch((error) => {
          console.log('Error verifying password:', error);
          res.status(401).json({ error: 'Invalid email or password' });
        });
    })
    .catch((error) => {
      console.log('Error getting user:', error);
      res.status(401).json({ error: 'Invalid email or password' });
    });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, '12345', (err, decoded) => {
      if (err) {
        console.log('Error verifying token:', err);
        return res.sendStatus(403);
      }

      req.userId = decoded.userId;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// Example protected route
app.get('/', verifyToken, (req, res) => {
  // Access user ID from the decoded token
  const userId = req.userId;

  console.log('Authenticated user ID:', userId);

  // Use the user ID to perform protected operations (e.g., fetching user data from Firestore)
  db.collection('users')
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        res.json(userData);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
      res.status(500).json({ error: 'Failed to fetch user data' });
    });
});

// Helper function to generate JWT token
function generateToken(userId) {
  const payload = { userId };
  const secretKey = '12345';
  const expiresIn = '1h';

  return jwt.sign(payload, secretKey, { expiresIn });
}

// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});