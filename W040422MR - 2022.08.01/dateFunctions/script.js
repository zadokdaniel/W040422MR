console.dir(new Date()); // now
console.dir(new Date().getDate()); // day of month
console.dir(new Date().getMonth()); // month
console.dir(new Date(new Date().setMonth(4))); // month
console.dir(new Date().toLocaleTimeString());
console.dir(new Date().toLocaleDateString("he-IL"));
console.log(new Date() - new Date(2022, 5, 23, 5, 8));
console.log(new Date() > new Date(2022, 5, 23, 5, 8));
console.log(new Date() < new Date(2022, 5, 23, 5, 8));
console.log(Date.now()); // miliseconds unix time from 1.1.1970
