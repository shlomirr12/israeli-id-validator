const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function isValidIsraeliID(id) {
  id = String(id).trim();
  if (id.length > 9 || id.length < 5 || isNaN(id)) return false;
  id = id.padStart(9, '0');
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let num = Number(id[i]) * ((i % 2) + 1);
    if (num > 9) num -= 9;
    sum += num;
  }
  return sum % 10 === 0;
}

app.get('/validate/:id', (req, res) => {
  const id = req.params.id;
  const valid = isValidIsraeliID(id);
  res.json({ valid });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
