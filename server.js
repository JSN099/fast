const express = require('express');
const app = express();
const path = require('path');
const speedTest = require('fast-speedtest-api');

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/speedtest', async (req, res) => {
    try {
        const speed = await measureSpeed();
        res.send(speed.toString());
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

async function measureSpeed() {
    return new Promise((resolve, reject) => {
        const test = new speedTest({ token: 'your_token_here' });

        test.getSpeed((error, speed) => {
            if (error) {
                reject(error);
            } else {
                resolve(speed);
            }
        });
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//Install fast-cli by running the command npm install -g fast-cli.
//Run the command fast in your terminal to measure your internet speed. This will automatically generate a token for fast.com