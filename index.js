// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(driver) {
    return driver.toLowerCase();
  });
}
function nameToAttributes(array) {
  return array.map(function(name) {
    let firstName = name.split("")[0];
    let lastName = name.split("")[1];
    return {firstName: firstName, lastName: lastName};
  })
}
