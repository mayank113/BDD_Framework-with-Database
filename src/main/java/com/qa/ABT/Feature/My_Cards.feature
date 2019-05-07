Feature: Mycards
Scenario Outline: Reissue Card with valid card details
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to mycards page from cardmanagement
Then user Reissue Card and enter <address> details
Then user submit details and enter <otp>
Then close the browser

Examples:
|usernm|passwd|address|otp|
|aayushptd1|Abc@12345|Nec Tecnolohies India,Building number 9, SEZ, Sector 135|123456|

Scenario Outline: Clear Reissue Card details
Given user should be on home page
Then user enter <usernm> and <passwd> and successfully logged in
Then user navigate to mycards page from cardmanagement
Then user Reissue Card and enter <address> details
Then user clear details
Then close the browser

Examples:
|usernm|passwd|address|otp|
|aayushptd1|Abc@12345|Nec Tecnolohies India,Building number 9, SEZ, Sector 135|123456|