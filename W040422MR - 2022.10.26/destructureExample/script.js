/*
1.  create  a simple html js project
2. create a variable with the following user information 
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
}

const id = user.id
const username = user.username
const name = user.name

3. create new variables containing the following destructured values from user variable
	id, username, name

4. create a variable with the following array
	["daniel", "emanuel", "zadok"]
const firstName = userName[0]
const lastName = userName[1]

5. create new variables containing the first index and the last index of the array
*/

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};
const {
  id,
  name,
  username,
  address: {
    geo: { lat: latitude, lng }, // const latitude = user.address.geo.lat
  },
} = user;

const namesArr = ["daniel", "emanuel", "zadok"];
const [firstName, , lastName] = namesArr;
