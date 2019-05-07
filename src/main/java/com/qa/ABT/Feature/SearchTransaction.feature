Feature: SearchTransaction
Scenario Outline: Search Transaction with all search criteria
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to mytransaction in account details
Then user enter the search criteria and search the transactions
Then user print all the TransactionID
Then close the browser

Examples:
|usernm|passwd|
|aayushptd1|Abc@12345|