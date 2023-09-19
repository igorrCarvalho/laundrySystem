const express = require('express');
const { insert, show, showById, showMonths, showMonthsOrders } = require('./db/itemDB');
const { searchForMonth } = require('./utils/functions');
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_URL = "/api/v1/";

app.get(`${API_URL}orders`, async (req, res) => {
    try {
        const [orders] = await show();
        res.status(200).json(orders)
    } catch (error) {
        console.log(error);
    }
})

app.get(`${API_URL}order/:id`, async (req, res) => {
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

app.post(`${API_URL}order`, async (req, res) => {
    const order = req.body;
    const price = order.itemPrice;
    const quant = order.quantity;
    order.totalPrice = Number((Number(price) * Number(quant)).toFixed(2));
    try {
        const [{insertId}] = await insert(order);
        const addMonth = await searchForMonth(insertId);
        res.status(201).json({ message: `Registered with id equals to ${insertId}` });
    } catch (error) {
        console.error(error)
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

app.get(`${API_URL}months/orders`, async (req, res) => {
    try {
        const [response] = await showMonthsOrders();
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
    }
});


module.exports = app;