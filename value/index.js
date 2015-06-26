let values = (val) => typeof val === 'function' ? values(val()) : val;

module.exports = values;
