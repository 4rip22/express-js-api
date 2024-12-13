const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

let model = null;

// Fungsi untuk memuat model dari Google Cloud Storage
const loadModel = async () => {
  try {
    const response = await axios.get('https://storage.googleapis.com/bucket-capstone-project/model.json');
    model = response.data;
    console.log('Model loaded successfully.');
  } catch (error) {
    console.error('Error loading model:', error);
  }
};

// Panggil fungsi loadModel saat server dimulai
loadModel();

// Middleware untuk parsing JSON
app.use(express.json());

app.post('/predict', (req, res) => {
  const { input } = req.body;

  if (model === null) {
    return res.status(500).json({ error: 'Model not loaded' });
  }

  if (typeof input !== 'number' || input < 1 || input > 7) {
    return res.status(400).json({ error: 'Invalid input type or out of range. Input should be a number between 1 and 7.' });
  }

  let prediction;

  if (input <= 2) {
    prediction = 'low';
  } else if (input <= 5) {
    prediction = 'medium';
  } else {
    prediction = 'high';
  }

  res.json({ prediction });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
