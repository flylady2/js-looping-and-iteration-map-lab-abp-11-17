// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCaseDrivers = drivers.map(function(name) {
    return Object.assign({}, name.toLowerCase());
  });
}
