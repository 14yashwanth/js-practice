const accountId = 1409
let accountEmail = "yyashwanth109@gmail.com"
var accountPassword = "131409"
accountCity = "Hyderabad"
let accountState;
/*
Do not prefer to use var because of issue in block & functional scope
*/
console.log(accountId);
accountEmail = "yashwanth1409@gmail.com"
accountPassword = "13140911"
accountCity = "Benguluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])