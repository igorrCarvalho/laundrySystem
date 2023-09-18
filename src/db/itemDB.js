const conn = require('./connection');

const insert = (item) => conn.execute(
    `INSERT INTO items 
      (item_name, person_asked) VALUES (?, ?)`,
    [item.itemName, item.personAsked],
  );

const show = () => conn.execute(
    `SELECT * FROM items`
);

const showById = (id) => conn.execute(
  `SELECT * FROM items WHERE id = ?`, [id]
);

const showMonths = () => conn.execute(
  `SELECT * FROM months`
);

module.exports = {
  insert,
  show,
  showById,
  showMonths,
};