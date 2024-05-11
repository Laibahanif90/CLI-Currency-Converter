#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD : 1,       //Base currency   //US DOLLAR
    EUR : 0.91,                      //EURO
    GBP : 0.76,                      //BRITISH POUND
    INR : 74.57,                     //INDIAN RUPEE
    JPY : 3.64,                      //JAPENESE YEN
    SAR : 3.75,                      //SAUDIA ARABIA RIYAL
    TRY : 32.03,                     //TURKISH LIRA
    PKR : 280,                       //PAKISTANI RUPEE
};

let user_answer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Enter from currency",
            type : "list",
            choices : ["USD","EUR","GBP","INR","JPY","SAR","TRY","PKR"],
        },

        {
            name : "to",
            message : "Enter to currency",
            type : "list",
            choices : ["USD","EUR","GBP","INR","JPY","SAR","TRY","PKR"],
        },

        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        },
    ]
);

let fromAmount= currency[user_answer.from] //exchange rate
let toAmount = currency[user_answer.to]  // exchange rate
let amount = user_answer.amount
//Currency conversion formula

let baseAmount = amount / fromAmount       // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);