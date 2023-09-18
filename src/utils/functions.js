const { showById, showMonths } = require("../db/itemDB");

async function searchForMonth(id) {
  const [addedPerson] = await showById(id);
  const addedDate = JSON.stringify(addedPerson[0].exact_date);
  const addedMonth = addedDate.split("-")[1];
  const monthN = Number(addedMonth)


  console.log(monthN)
}

module.exports = {
    searchForMonth,
};
