$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/nec/Automation/BDD_Framework-master/BDD_Framework-master/src/main/java/com/qa/ABT/Feature/Buy_Fare_Product.feature");
formatter.feature({
  "name": "Buy fare product with stored value.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Remove Fare Product from shopping Cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to buyacard",
  "keyword": "Then "
});
formatter.step({
  "name": "user select fare product and enter\u003cname\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.step({
  "name": "user remove the product",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd",
        "name"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345",
        "Mayank"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove Fare Product from shopping Cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to buyacard",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_buyacard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select fare product and enterMayank",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_select_fare_product_and_entername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_verfiy_in_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user remove the product",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_remove_the_remove_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Clear Fare product from buyFareProduct",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.step({
  "name": "user clear all details",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clear Fare product from buyFareProduct",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_shopbycategory_and_select_buyfareproduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_select_card_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clear all details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clear_all_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "cancel fare product from shopping",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.step({
  "name": "user proceed to pay for shopping",
  "keyword": "Then "
});
formatter.step({
  "name": "user cancel payment",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd",
        "mobile",
        "otp"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345",
        "7777777777",
        "489871"
      ]
    }
  ]
});
formatter.scenario({
  "name": "cancel fare product from shopping",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_shopbycategory_and_select_buyfareproduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_select_card_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_verfiy_in_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceed to pay for shopping",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_proceed_to_pay_for_shopping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cancel payment",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_cancel_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Buy fare product with stored value",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.step({
  "name": "user proceed to pay for shopping",
  "keyword": "Then "
});
formatter.step({
  "name": "user Enter paytm \u003cmobile\u003e \u003cotp\u003e details",
  "keyword": "Then "
});
formatter.step({
  "name": "user Enter \u003cCVV\u003e \u003cotp\u003e number",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd",
        "mobile",
        "otp",
        "CVV",
        "otp"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345",
        "7777777777",
        "489871",
        "123",
        "489871"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Buy fare product with stored value",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to shopbycategory and select BuyFareProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_shopbycategory_and_select_buyfareproduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select card details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_select_card_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verfiy in add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_verfiy_in_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceed to pay for shopping",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_proceed_to_pay_for_shopping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Enter paytm 7777777777 489871 details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_paytm_details(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Enter 123 489871 number",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_number(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@placeholder\u003d\"Enter CVV\"]\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DLDT-1147\u0027, ip: \u0027172.30.64.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MAYANK~1.SAX\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 09314564d332edf12719a2e7f0d76034\n*** Element info: {Using\u003dxpath, value\u003d//*[@placeholder\u003d\"Enter CVV\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat com.qa.ABT.StepDefinition.Registration.user_enter_number(Registration.java:264)\r\n\tat ✽.user Enter 123 489871 number(D:/nec/Automation/BDD_Framework-master/BDD_Framework-master/src/main/java/com/qa/ABT/Feature/Buy_Fare_Product.feature:51)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("D:/nec/Automation/BDD_Framework-master/BDD_Framework-master/src/main/java/com/qa/ABT/Feature/My_Cards.feature");
formatter.feature({
  "name": "Mycards",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Reissue Card with valid card details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to mycards page from cardmanagement",
  "keyword": "Then "
});
formatter.step({
  "name": "user Reissue Card and enter \u003caddress\u003e details",
  "keyword": "Then "
});
formatter.step({
  "name": "user submit details and enter \u003cotp\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd",
        "address",
        "otp"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345",
        "Nec Tecnolohies India,Building number 9, SEZ, Sector 135",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Reissue Card with valid card details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to mycards page from cardmanagement",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_mycards_page_from_cardmanagement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Reissue Card and enter Nec Tecnolohies India,Building number 9, SEZ, Sector 135 details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_reissue_card_and_enter_details(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit details and enter 123456",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_submit_details(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DLDT-1147\u0027, ip: \u0027172.30.64.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MAYANK~1.SAX\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53614}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: a6baf777ec228b42dc2dfcc489b84db0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat com.qa.ABT.StepDefinition.Registration.user_submit_details(Registration.java:312)\r\n\tat ✽.user submit details and enter 123456(D:/nec/Automation/BDD_Framework-master/BDD_Framework-master/src/main/java/com/qa/ABT/Feature/My_Cards.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Clear Reissue Card details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to mycards page from cardmanagement",
  "keyword": "Then "
});
formatter.step({
  "name": "user Reissue Card and enter \u003caddress\u003e details",
  "keyword": "Then "
});
formatter.step({
  "name": "user clear details",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd",
        "address",
        "otp"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345",
        "Nec Tecnolohies India,Building number 9, SEZ, Sector 135",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clear Reissue Card details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to mycards page from cardmanagement",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_mycards_page_from_cardmanagement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Reissue Card and enter Nec Tecnolohies India,Building number 9, SEZ, Sector 135 details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_reissue_card_and_enter_details(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clear details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clear_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("D:/nec/Automation/BDD_Framework-master/BDD_Framework-master/src/main/java/com/qa/ABT/Feature/SearchTransaction.feature");
formatter.feature({
  "name": "SearchTransaction",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search Transaction with all search criteria",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusernm\u003e and \u003cpasswd\u003e and successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to mytransaction in account details",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the search criteria and search the transactions",
  "keyword": "Then "
});
formatter.step({
  "name": "user print all the TransactionID",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernm",
        "passwd"
      ]
    },
    {
      "cells": [
        "aayushptd1",
        "Abc@12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Transaction with all search criteria",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter aayushptd1 and Abc@12345 and successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_and_and_successfully_logged_in(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to mytransaction in account details",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_navigate_to_mytransaction_in_account_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the search criteria and search the transactions",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_enter_the_search_criteria_and_search_the_transactions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user print all the TransactionID",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_print_all_the_transactionid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});