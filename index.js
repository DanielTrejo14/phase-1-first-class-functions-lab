
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  

  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  function fareDoubler(fares) {
    return fares * 2
  }

  function fareTripler(fares) {
    return fares * 3
  }

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }