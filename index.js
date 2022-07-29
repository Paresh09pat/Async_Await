// Q.1) Write one example explaining how you can write a callback function ?

function callBack() {
    console.log("callback function");
  }
  
  setTimeout(callBack, 2000);


// Q.2) Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
Numbers
1
2
3
4
5
6
7

function print() {
    setTimeout(() => {
      console.log(" After 1 sec");
    }, 1000);
    setTimeout(() => {
      console.log("After 2 sec");
    }, 2000);
    setTimeout(() => {
      console.log("After 3 sec");
    }, 3000);
    setTimeout(() => {
      console.log("After 4 sec");
    }, 4000);
    setTimeout(() => {
      console.log("After 5 sec");
    }, 5000);
    setTimeout(() => {
      console.log("After 6 sec");
    }, 6000);
    setTimeout(() => {
      console.log("After 7 sec");
    }, 7000);
  }
  print();
  


// Q.3) Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7

let promise = new Promise((resolve, reject) => {
    resolve();
   // reject();
  });
  
  promise
    .then(() => {
      setTimeout(() => {
        console.log(" 1 ");
      }, 1000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 2 ");
      }, 2000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 3 ");
      }, 3000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 4 ");
      }, 4000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 5 ");
      }, 5000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 6 ");
      }, 6000);
    })
    .then(() => {
      setTimeout(() => {
        console.log(" 7 ");
      }, 7000);
    });


// Q.4) Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const promise1 = new Promise((resolve, reject) => {
    resolve(" Now ");
    reject(" Later ");
  });
  promise1
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });


// Q.5) Create examples to explain callback function

function great(name, callback) {             // function
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {                          // callback function
    console.log('I am callback function');
}

great('Paresh', callMe);                     // passing function as an argument


// Q.6) Create examples to explain callback hell function

const getEmpId = () => {
    setTimeout(() => {
        console.log("Fetching the Id's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName : "Harsh",
                lName : "Bajaj",
                age :28,
            }
            console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`);

            setTimeout(() => {
                empDetails.gender = "Male",
                console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}
                and the gender is ${empDetails.gender}`);
            }, 2000)

        }, 2000)

    }, 2000)
}
getEmpId();


// Q.7) Create examples to explain promises function

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let Name = "Paresh";
      resolve(Name);
    }, 2000);
  });
  
  myPromise
    .then((data) => {
      console.log(` My name is ${data}`);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Done");
    });


// Q.8) Create examples to explain async await function

let myPromises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(" Done ");
  }, 1000);
});

async function Rio() {
  let result = await myPromises;

  console.log(result);
  console.log(" Hello world !!");
}
Rio();


// Q.9) Create examples to explain promise.all function

const promiseOne = Promise.resolve(3);
const promiseTwo = 38;
const PromiseThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 27, "hello");
});

Promise.all([promiseOne, promiseTwo, PromiseThree]).then((values) => {
  console.log(values);
});
