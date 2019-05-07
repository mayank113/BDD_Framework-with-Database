Feature: Buy fare product with stored value.
Scenario Outline: Remove Fare Product from shopping Cart
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to buyacard
Then user select fare product and enter<name>
Then user verfiy in add to cart
Then user remove the product
Then close the browser

Examples:
|usernm|passwd|name|
|aayushptd1|Abc@12345|Mayank|


Scenario Outline: Clear Fare product from buyFareProduct 
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to shopbycategory and select BuyFareProduct
Then user select card details
Then user clear all details
Then close the browser

Examples:
|usernm|passwd|
|aayushptd1|Abc@12345|


Scenario Outline: cancel fare product from shopping
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to shopbycategory and select BuyFareProduct
Then user select card details 
Then user verfiy in add to cart
Then user proceed to pay for shopping
Then user cancel payment
Then close the browser

Examples:
|usernm|passwd|mobile|otp|
|aayushptd1|Abc@12345|7777777777|489871|

Scenario Outline: Buy fare product with stored value 
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to shopbycategory and select BuyFareProduct
Then user select card details 
Then user verfiy in add to cart
Then user proceed to pay for shopping
Then user Enter paytm <mobile> <otp> details
Then user Enter <CVV> <otp> number
Then close the browser

Examples:
|usernm|passwd|mobile|otp|CVV|otp|
|aayushptd1|Abc@12345|7777777777|489871|123|489871|