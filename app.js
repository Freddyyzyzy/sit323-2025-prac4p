using static System.Runtime.InteropServices.JavaScript.JSType;

const express = require('express');
const app = express();
const port = 3000;

// Middleware: Parse JSON request body
app.use(express.json());

// Parameter validation function
const validateNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
    {
        throw new Error('Invalid input: parameters must be numbers');
    }
};

// Addition
app.get('/add', (req, res) => {
try
{
    const { num1, num2 } = req.query;
    validateNumbers(parseFloat(num1), parseFloat(num2));
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
}
});

// Subtraction
app.get('/subtract', (req, res) => {
try
{
    const { num1, num2 } = req.query;
    validateNumbers(parseFloat(num1), parseFloat(num2));
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
}
});

// Multiplication
app.get('/multiply', (req, res) => {
try
{
    const { num1, num2 } = req.query;
    validateNumbers(parseFloat(num1), parseFloat(num2));
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
}
});

// Division
app.get('/divide', (req, res) => {
    try
    {
        const { num1, num2 } = req.query;
        validateNumbers(parseFloat(num1), parseFloat(num2));
        if (parseFloat(num2) === 0)
        {
            throw new Error('Division by zero is not allowed');
        }
        const result = parseFloat(num1) / parseFloat(num2);
        res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
}
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator service running at http://localhost:${port}`);
});