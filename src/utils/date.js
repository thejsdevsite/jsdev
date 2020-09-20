const getIsoFormatDate = (date) => { 
  return `${date.getFullYear()}-${(date.getMonth()+"").padStart(2, "0")}-${(date.getDate()+"").padStart(2, "0")}`;
}

const getSlugDate = (date) => {
  return getIsoFormatDate(date).replace(/-/g, '');
}

exports = {
  getIsoFormatDate,
  getSlugDate
}
