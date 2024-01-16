// Code your solution here

const drivers = ["Alex", "Brian", "Charles", "Daniel", "James"];
  
  const drive = [
    { name: 'Alex',
      hometown: 'Mombasa' 
    },
    { name: 'Brian', 
      hometown: 'Nairobi'
    },
    { name: 'Charles', 
      hometown: 'Nakuru' 
    },
    { name: 'Daniel', 
      hometown: 'Isiolo' 
    },
    { name: 'James', 
      hometown: 'Kisumu' 
    },
  ];

  // Function to find exact matching drivers
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find fuzzy matching drivers
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to match by name
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  // Example usage
  const driversList1 = findMatching(drivers, 'john');
  console.log(driversList1);
  
  const driversList2 = fuzzyMatch(drivers, 'j');
  console.log(driversList2);
  
  const driversList3 = matchName(drivers, 'Mike');
  console.log(driversList3);


  function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }
  
  function fuzzyMatch(drivers, check) {
    return drivers.filter(function (driver) {
      return driver.slice(0, check.length) === check;
    });
  }