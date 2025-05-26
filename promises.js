function fetchData() { // function returns a promise
  return new Promise((resolve, reject) => { // naya promise object banako ho
    setTimeout(() => { //asynchronous task delay gareko
      const success = true; // Change to false to test rejection

      if (success) {
        resolve("Data fetched successfully!");// async task is completed
      } else {
        reject("Failed to fetch data.");// async task fail bhayo
      }
    }, 1000); // Simulates a 1-second async operation
  });
}

// Using the promise
fetchData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
