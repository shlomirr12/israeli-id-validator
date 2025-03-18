const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

function isValidIsraeliID(id) {
  id = String(id).trim().padStart(9, '0');
  if (!/^[0-9]{9}$/.test(id)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let num = Number(id[i]) * ((i % 2) + 1);
    if (num > 9) num -= 9;
    sum += num;
  }
  return sum % 10 === 0;
}

app.post('/validate', (req, res) => {
  const { idNumber } = req.body;
  if (!idNumber) {
    return res.status(400).json({ error: 'idNumber is required in the request body.' });
  }
  const valid = isValidIsraeliID(idNumber);
  res.json({ valid });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
