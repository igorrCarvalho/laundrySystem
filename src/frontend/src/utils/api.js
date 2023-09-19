import axios from 'axios'

const api = axios.create({
    baseURL: "",
})

const API_URL = "http://localhost:3002/api/v1/"

async function registerOrder(order) {
    try {
        const res = await api.post(`${API_URL}order`, {
            itemName: order.name,
            personAsked: order.person,
            itemPrice: order.price,
            quantity: order.quantity,
        })
        if (res.status === 201) {
            return res.data
        }
        console.log(res.status)
    } catch (error) {
        console.error(error)
    }
};

export {
    registerOrder,
}