// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.use(express.json());

function validateIsraeliID(id) {
    id = String(id).trim();
    if (id.length > 9 || id.length < 5 || !/^[0-9]+$/.test(id)) return false;
    id = id.padStart(9, '0');

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let num = Number(id[i]) * ((i % 2) + 1);
        if (num > 9) num -= 9;
        sum += num;
    }

    return sum % 10 === 0;
}

app.get('/validate', (req, res) => {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Missing ID' });
    const valid = validateIsraeliID(id);
    res.json({ id, valid });
});

app.listen(port, () => {
    console.log(`Validator API running on port ${port}`);
});
