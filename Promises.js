//Callback Hell.

api.createCart( orderDetails, () => {

    // Some more code here...

    api.proceedToPayment( orderDetails, () => {

        // Some more code here...

        api.createOrder( orderDetails, () => {

            // Some more code here...

            api.showSummary( orderDetails, () => {

                // Some more code here...

                console.log('Order Summary !!');
            });
        });
    });
});

// First of all how promise object looks in reality and how much details it holds.

/*
    promise:
        state:
        result:
*/

/*
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
*/

// then and catch method explanation...

// multiple then and single catch and how it will behave like all then will be executed or not and many more...

/*
doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });
*/

// ------ We have to return result from then block to get it into next then block...

// multiple then and multiple catch blocks and behavior of them...
/* 
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
*/


// multiple then block than multiple catch block and after that single than block so it might work like final block...

/*
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
*/


// Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
//     // use result1, result2 and result3
//   });