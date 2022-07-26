function callMbk(arr, addInput) {
  arr.forEach((array) => console.log(array));
  addInput(arr);
}

function sumArr(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
    console.log(total);
  }
  return total;
}
callMbk([1, 2, 3, 5, 6, 7], sumArr);

const mbkPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve("mbk don Promise sey e go resolve am");
  } else {
    reject("wetin you expect , he no keep hin promise so e reject am");
  }
});

// console.log(mbkPromise)

mbkPromise
  .then((value) => {
    return value + 1;
  })
  .then((newvalue) => {
    console.log(newvalue);
  })
  .catch((err) => {
    console.error(err);
  });

const mbkNextPromise = new Promise((res, rej) => {
  setTimeout(function () {
    res("next promise balling ");
  }, 3000);
});

mbkNextPromise.then((value) => {
  console.log(value);
});

mbkPromise.then((value) => {
  console.log(value);
});
const url = "https://jsonplaceholder.typicode.com/users";

const users = fetch(url);

console.log(users); // return a pending state

users
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

//async/await

const mbkAwait = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

mbkAwait();
