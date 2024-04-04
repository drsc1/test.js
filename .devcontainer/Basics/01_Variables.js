 const accountId = 789456
 let accountEmail = "divyaratan4@gmail.com"
 var accountPassword= "654987"
 accountCity = "Jaipur"
 let accountState;
/*
Please do not use the var, because of issue in block scope and functional scope.
*/

//  accountId = 2 not allowed to change value of const.

accountEmail = "hchc@hotmail.com"
accountPassword = "145236"
accountCity = "Bhopal"

 console.log(accountId); 
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);   