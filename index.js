// Add your code here
const user = {
  name: "Danielle",
  email: "d@gmail.com",
};

function submitData(name, email) {
  fetch("http://localhost:3000/users"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };
}

// function submitData() {
//   //   // To pass the tests, don't forget to return your fetch!
//   return fetch("http://localhost:3000/users")
//     .then((resp) => resp.json())
//     .then(function (json) {
//       return submitData(json);
//     });
// }
