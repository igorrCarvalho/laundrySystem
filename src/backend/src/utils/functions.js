const { showById, showMonths, insertMonthsOrders } = require("../db/itemDB");

async function searchForMonth(id) {
  const [addedPerson] = await showById(id);
  const addedDate = JSON.stringify(addedPerson[0].exact_date);
  const addedMonth = addedDate.split("-")[1];
  const monthId = Number(addedMonth)
  const [{insertId}] = await insertMonthsOrders({monthId, orderId: id});
  if (insertId) return true;
  return false
}

module.exports = {
    searchForMonth,
};
