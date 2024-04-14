const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const emojis = [
    { name: 'grinning face', emoji: '😀' },
    { name: 'grinning face with big eyes', emoji: '😃' },
    { name: 'grinning face with smiling eyes', emoji: '😄' },
    { name: 'beaming face with smiling eyes', emoji: '😁' },
    { name: 'grinning squinting face', emoji: '😆' },
    { name: 'grinning face with sweat', emoji: '😅' },
];

const port = 7777;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/emojis', (req, res) => {
    try {
        res.json(emojis); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch emojis' });
    }
});
