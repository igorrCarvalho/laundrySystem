const express = require('express');
const { insert, show, showById, showMonths } = require('./db/itemDB');
const { searchForMonth } = require('./utils/functions');

const app = express();

app.use(express.json());

const API_URL = "/api/v1/";

app.get(`${API_URL}item`, async (req, res) => {
    try {
        const [people] = await show();
        res.status(200).json(people)
    } catch (error) {
        console.log(error);
    }
})

app.get(`${API_URL}item/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const [[item]] = await showById(id);
        if (!item) {
            return res.status(404).json({ message: "Item não encontrado" })
        }
        res.status(200).json(item)
    } catch (error) {
        console.log(error);
    }
});

app.post(`${API_URL}item`, async (req, res) => {
    const person = req.body;
    try {
        const [{insertId}] = await insert(person);
        const addMonth = await searchForMonth(insertId);
        res.status(201).json({ message: `Registered with id equals to ${insertId}` });
    } catch (error) {
        console.log(error)
    }
})

app.get(`${API_URL}months`, async (req, res) => {
    try {
        const [months] = await showMonths();
        res.status(200).json(months);
    } catch (error) {
        console.log(error)
    }
});


module.exports = app;