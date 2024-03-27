const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/calculateAverage', (req, res) => {
  const { numbers } = req.body;
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
  const average = sum / numbers.length;

  res.json({ average });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


