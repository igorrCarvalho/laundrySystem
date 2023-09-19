const conn = require('./connection');

const insert = (item) => {
  console.log(item)
  return conn.execute(
    `INSERT INTO orders 
      (item_name, person_asked, item_price, quantity, total_price) VALUES (?, ?, ?, ?, ?)`,
    [item.itemName, item.personAsked, item.itemPrice, item.quantity, item.totalPrice],
  )};

const show = () => conn.execute(
    `SELECT * FROM orders`
);

const showById = (id) => conn.execute(
  `SELECT * FROM orders WHERE id = ?`, [id]
);

const showMonths = () => conn.execute(
  `SELECT * FROM months`
);

const insertMonthsOrders = (ids) => conn.execute(
  `INSERT INTO months_orders
    (month_id, order_id) VALUES (?, ?)`, [ids.monthId, ids.orderId]
);

const showMonthsOrders = () => conn.execute(
  `SELECT * FROM months_orders`
);

module.exports = {
  insert,
  show,
  showById,
  showMonths,
  insertMonthsOrders,
  showMonthsOrders,
};