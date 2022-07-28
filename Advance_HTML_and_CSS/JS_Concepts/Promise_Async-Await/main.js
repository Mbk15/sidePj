function callMbk(arr, addInput) {
  arr.forEach((array) => console.log(array));
  addInput(arr);
}

function sumArr(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
  }
  return total;
}
// callMbk([1, 2, 3, 5, 6, 7], sumArr);

const mbkPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve("mbk don Promise sey e go resolve am");
  } else {
    reject("wetin you expect , he no keep hin promise so e reject am");
  }
});

console.log(mbkPromise);

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
      return user;
    });
  });

//async/await

const myUsers = {
  userList: [],
};

const mbkAwait = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

mbkAwait();

//applying await inside await

const awaitSecond = async () => {
  const jsonUser = await mbkAwait();
  myUsers.userList = jsonUser;
  console.log(myUsers.userList);
};
awaitSecond();
console.log(myUsers.userList);

//get All users Email

const getAllUserEmail = async () => {
  const users = await fetch(url);
  const response = await users.json();

  const userEmailArray = response.map((user) => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

getAllUserEmail();

const emailAddress = document.querySelector("#email");
const postToWebPage = (data) => {
  const allemail = data.map((email) => {
    return `<p>${email}</p>`;
  });

  emailAddress.innerHTML = allemail;
};

// Second Parameter with Fetch

//Second Parameter of Fetch is an Object

const getDadJoke = async () => {
  const dadJoke = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jokeData = await dadJoke.json();

  console.log(jokeData);
};

getDadJoke();

//loging text instead of json

const getTextJoke = async () => {
  const dadJoke = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain", // change from application/json to text/plain
    },
  });

  const jokeText = await dadJoke.text(); // text method call instead of json method call

  console.log(jokeText);
};

getTextJoke();

//Posting data

const jokeObject = {
  id: "6MZor4T79pb",
  joke: "Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.",
};

const postJoke = async (jokeData) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeData),
  });

  const sendJoke = await response.json();

  console.log(sendJoke.headers);
};

postJoke(jokeObject);
