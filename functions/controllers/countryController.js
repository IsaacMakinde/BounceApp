const express = require('express');
const axios = require('axios');
const router = express.Router();

const baseUrl = "https://restcountries.com/v3.1/name/";


router.get('/:country', async (req, res) => {
    try {
        const country = req.params.country;
        const response = await axios.get(`${baseUrl}${country}`);
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).json({ message: 'Country not found' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

module.exports = router;
