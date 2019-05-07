package com.qa.ABT.StepDefinition;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import Base.BASE_Initiate;
import Database.ConnectToMySQL;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class Registration extends BASE_Initiate {

	public Registration() throws IOException {
		super();

	}

	@Given("^user should be on home page$")
	public void user_should_be_on_home_page() throws Throwable {
		Initiate();
		PageFactory.initElements(driver, this);

	}
	WebDriverWait wait;
	ConnectToMySQL obj;
	ArrayList<String> uidata = new ArrayList<>();
	ConnectToMySQL object;
	String value;
	
	@FindBy(id = "text")
	WebElement username;
	@FindBy(id = "password")
	WebElement password;
	@FindBy(xpath = "//button[@type='submit']")
	WebElement loginbutton;
	@FindBy(xpath = "//div[@class='right-header']/span[3]")
	WebElement loginText;
	@FindBy(xpath = "//span[contains(text(),'Buy A Card')]")
	WebElement buyacard;
	@FindBy(xpath = "//div[@class='form-group']//select")
	WebElement FareProduct1;
	@FindBy(xpath = "//input[@placeholder='Enter Card Holder Name']")
	WebElement holdername;
	@FindBy(xpath = "//i[@id='cartIcon']")
	WebElement AddtoCart3;
	@FindBy(xpath = "//span[contains(text(),' Shop by Category')]")
	WebElement Shop_by_Category;
	@FindBy(xpath = "//span[contains(text(),'Buy Fare Product ')]")
	WebElement Buy_Fare_Product;
	@FindBy(xpath = "//select[@name='card']")
	WebElement cardno;
	@FindBy(xpath = "//select[@name='fareProduct']")
	WebElement FareProduct2;
	@FindBy(xpath = "//button[@class='btnpicker btnpickerenabled']")
	WebElement CalendarIcon;
	@FindBy(xpath = "//button[@class='btnclear btnclearenabled']")
	WebElement DateSelect;
	@FindBy(xpath = "//span[@class='markcurrday']")
	WebElement CurrentDate;
	@FindBy(xpath = "//div[@class='col-md-offset-7 col-md-1']/button/i[@id='cartIcon']")
	WebElement AddtoCart1;
	@FindBy(xpath = "//button[contains(text(),'Go To Cart')]")
	WebElement GotoCart;
	@FindBy(xpath = "//textarea[@name='address']")
	WebElement shippingdetail;
	@FindBy(xpath = "//button[contains(text(),'Proceed To Pay')]")
	WebElement ProceedPay;
	@FindBy(xpath = "//div[@class='icon-block']/i")
	WebElement crossitem;
	@FindBy(xpath = "//button[@class='confirm']")
	WebElement confirm;
	@FindBy(xpath = "//div[contains(text(),'Your cart is empty')]")
	WebElement confirmationtext;
	@FindBy(xpath = "//button[contains(text(),'Proceed To Pay')]")
	WebElement proceedpay;
	@FindBy(xpath = "//button[contains(text(),'Continue')]")
	WebElement continuepay;
	@FindBy(xpath = "//input[@name='amount']")
	WebElement enteramount;
	@FindBy(xpath = "//div[@class='col-md-1']/button/i[@id='cartIcon']")
	WebElement AddtoCart2;
	@FindBy(xpath = "//input[@value='PPI']")
	WebElement paytmwallet;
	@FindBy(xpath = "//button[contains(text(),'Clear')]")
	WebElement clear;
	@FindBy(xpath = "//a[contains(text(),'Login')]")
	WebElement paytmlogin;
	@FindBy(xpath = "//input[@id='mobile']")
	WebElement mobileno;
	@FindBy(xpath = "//button[@class='btn-primary-new']")
	WebElement requestotp;
	@FindBy(xpath = "//input[@id='mobile']")
	WebElement enterotp1;
	@FindBy(xpath = "//button[@class='btn-primary-new']")
	WebElement loginpaytm;
	@FindBy(xpath = "//*[@id=\"jvmRoute\"]/div[29]/div[3]/div[1]/ul/li[2]/a")
	WebElement cancelpayment;
//	@FindBy(xpath = "//div[@class='pay-failure-contnr'']//i//h1")
//	WebElement failuremessage;
	@FindBy(xpath = "//*[@placeholder=\"Enter CVV\"]")
	WebElement cvvno;
	@FindBy(xpath = "//button[@id='scSubmit']")
	WebElement submitpayment;
	@FindBy(xpath = "//input[@id='OTP']")
	WebElement enterotp2;
	@FindBy(xpath = "//input[@type='submit']")
	WebElement submit;
	@FindBy(css = "div.notifyjs-bootstrap-base.notifyjs-bootstrap-success")
	WebElement confirmationmessage;
	@FindBy(xpath = "//span[contains(text(),'Card Management')]")
	WebElement cardmanagement;
	@FindBy(xpath = "//span[contains(text(),'My Cards')]")
	WebElement mycards;
	@FindBy(xpath = "//button[contains(text(),'Re-Issue')]")
	WebElement reissue;
	@FindBy(xpath = "//select[@name='reIssueReason']")
	WebElement Reason_for_Reissue;
	@FindBy(xpath = "//label[@class='control-label']//following-sibling::i")
	WebElement Edit_delivery_address;
	@FindBy(xpath = "//textarea[@name='deliveryAddress']")
	WebElement delivery_address;
	@FindBy(xpath = "//button[contains(text(),'Clear')]")
	WebElement cleardetails;
	@FindBy(xpath = "//div[@class='form-group button-group']//button[contains(text(),'Submit')]")
	WebElement submitcardreissue;
	@FindBy(xpath = "//input[@name='otp']")
	WebElement enterotp3;
	@FindBy(xpath = "//div[@class='col-md-4']//button[contains(text(),'Submit')]")
	WebElement submitotp;
	@FindBy(xpath = "//span[contains(text(),'Account Details')]")
	WebElement accountdetails;
	@FindBy(xpath = "//span[contains(text(),'My Transactions')]")
	WebElement mytransactions;
	@FindBy(xpath = "//select[@name='cardNo']")
	WebElement cardno1;
	@FindBy(xpath = "//select[@name='transactionType']")
	WebElement transactiontype;
	@FindBy(xpath = "//my-date-picker[@name='Fromdate']//div//div//button[@class='btnpicker btnpickerenabled']")
	WebElement fromdate;
	@FindBy(xpath = "")
	WebElement onemonthdate;
	@FindBy(xpath = "//my-date-picker[@name='Todate']//div//div//button[@class='btnpicker btnpickerenabled']")
	WebElement todate;
	@FindBy(xpath = "//span[@class='markcurrday']")
	WebElement currentdate;
	@FindBy(xpath = "//button[contains(text(),'Search')]")
	WebElement searchtransaction;
	
	@Then("^user enter (.+) and (.+) and successfully logged in$")
	public void user_enter_and_and_successfully_logged_in(String usernm, String passwd) throws Throwable {
		Thread.sleep(1000l);

		username.sendKeys(usernm);
		password.clear();
		password.sendKeys(passwd);
		loginbutton.click();
		Thread.sleep(3000l);
		String s = loginText.getText();
		System.out.println(s + " User LoggedIn Successfully");
	}

	@Then("^user navigate to shopbycategory and select BuyFareProduct$")
	public void user_navigate_to_shopbycategory_and_select_buyfareproduct() throws Throwable {
		Shop_by_Category.click();
		Thread.sleep(1000l);
		Buy_Fare_Product.click();
	}

	@Then("^user select card details$")
	public void user_select_card_details() throws Throwable {
		Thread.sleep(1000l);
		enteramount.sendKeys("100");
		Thread.sleep(1000l);
		AddtoCart1.click();
		// WebDriverWait wait = new WebDriverWait(driver, 10);
		// String element =
		// wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.notifyjs-bootstrap-base.notifyjs-bootstrap-success"))).getText();
		// System.out.println("Mayank"+element);
		Thread.sleep(500l);
		System.out.println(confirmationmessage.getText());
		Select c = new Select(cardno);
		c.selectByIndex(1);
		Select f = new Select(FareProduct2);
		f.selectByIndex(4);
		DateSelect.click();
		CalendarIcon.click();
		CurrentDate.click();
		AddtoCart2.click();
		Thread.sleep(500l);
		System.out.println(confirmationmessage.getText());
	}

	@Then("^user verfiy in add to cart$")
	public void user_verfiy_in_add_to_cart() throws Throwable {
		GotoCart.click();

	}

	@Then("^user clear all details$")
	public void user_clear_all_details() throws Throwable {
		clear.click();
	}

	@Then("^user remove the product$")
	public void user_remove_the_remove_product() throws Throwable {
		Thread.sleep(1000l);
		crossitem.click();
		Thread.sleep(1000l);
		confirm.click();
		assertEquals("Your cart is empty", confirmationtext.getText());
		System.out.println(confirmationtext.getText());
	}

	@Then("^user proceed to pay for shopping$")
	public void user_proceed_to_pay_for_shopping() throws Throwable {
		Thread.sleep(1000l);
		shippingdetail.clear();
		shippingdetail.sendKeys("Noida Sec-135 Nec Technoligies India");
		proceedpay.click();
		Thread.sleep(2000l);
		paytmwallet.click();
		continuepay.click();
		Thread.sleep(8000l);
		
	}

	@Then("^user Enter paytm (.+) (.+) details$")
	public void user_enter_paytm_details(String mobile, String otp) throws Throwable {
		paytmlogin.click();
		driver.switchTo().frame("login-iframe");
		Thread.sleep(1000l);
		mobileno.sendKeys(mobile);
		requestotp.click();
		Thread.sleep(1000l);
		enterotp1.sendKeys(otp);
		loginpaytm.click();
		Thread.sleep(1000l);

	}

	@Then("^user cancel payment$")
	public void user_enter_cancel_payment() throws Throwable {

		cancelpayment.click();
		//failuremessage.getText();
	}

	@Then("^user Enter (.+) (.+) number$")
	public void user_enter_number(String cvv, String otp) throws Throwable {
		cvvno.sendKeys(cvv);
		submitpayment.click();
		Thread.sleep(20001);
		enterotp2.sendKeys(otp);
		submit.click();
	}

	@Then("^user navigate to mycards page from cardmanagement$")
    public void user_navigate_to_mycards_page_from_cardmanagement() throws Throwable {
		cardmanagement.click();
		Thread.sleep(500l);
		mycards.click();
    }
	

   
	@SuppressWarnings("unused")
	@Then("^user Reissue Card and enter (.+) details$")
    public void user_reissue_card_and_enter_details(String address) throws Throwable {
    	Thread.sleep(500l);
    	List<WebElement> element = driver.findElements(By.xpath("//div[@class='table_container']//table//tbody//tr"));
    	for(int i=element.size();i>=0;i--) {

    		if(reissue.isEnabled()==true) {
    			
    			reissue.click();
    	
    		}
    		
    		else
    			{System.out.println("No Record found");}
    		
break;    
    }
    	Thread.sleep(500l);
    	Select Reason = new Select(Reason_for_Reissue);
    	Reason.selectByIndex(1);
    	Edit_delivery_address.click();
    	delivery_address.clear();
    	delivery_address.sendKeys(address);
    
    }
    
    @Then("^user submit details and enter (.+)$")
    public void user_submit_details(String otp) throws Throwable {
    	submitcardreissue.click();
    	Thread.sleep(1000l);
    	wait = new WebDriverWait(driver, 10);
     	wait.until(ExpectedConditions.visibilityOf(enterotp3)).sendKeys(otp);
    	
    	enterotp3.sendKeys(otp);
    	wait = new WebDriverWait(driver, 10);
     	wait.until(ExpectedConditions.visibilityOf(submitotp)).click();
    	submitotp.click();
    }
    
    

    @Then("^user navigate to buyacard$")
    public void user_navigate_to_buyacard() throws Throwable {
     Shop_by_Category.click();
    wait = new WebDriverWait(driver, 10);
 	wait.until(ExpectedConditions.visibilityOf(buyacard)).click();
     
     }

    @Then("^user select fare product and enter(.+)$")
    public void user_select_fare_product_and_entername(String name) throws Throwable {
    	Thread.sleep(500l);
    	Select f = new Select(FareProduct1);
		f.selectByIndex(4);
		holdername.sendKeys(name);
		AddtoCart3.click();
    }
	
    @Then("^user clear details$")
    public void user_clear_details() throws Throwable {
    	cleardetails.click();
    }
    
    
    @Then("^user navigate to mytransaction in account details$")
    public void user_navigate_to_mytransaction_in_account_details() throws Throwable {
    	accountdetails.click();
//    	wait = new WebDriverWait(driver, 10);
//    	wait.until(ExpectedConditions.visibilityOf(mytransactions)).click();
    	Thread.sleep(500l);
    	mytransactions.click();
    }
    
    //@SuppressWarnings("unused")
	@Then("^user enter the search criteria and search the transactions$")
    public void user_enter_the_search_criteria_and_search_the_transactions() throws Throwable {
    	wait = new WebDriverWait(driver, 10);
    	wait.until(ExpectedConditions.visibilityOf(cardno1));
    	Select s= new Select(cardno1);
    	s.selectByIndex(1);
    	Select t= new Select(transactiontype);
    	t.selectByIndex(0);
    	fromdate.click();
    	driver.findElement(By.xpath("//div[@class='headerbtncell']//button[@aria-label='Previous Month']")).click();
    	List<WebElement> lst = driver.findElements(By.xpath("//td//div[@class='datevalue currmonth']//span"));
    	for(int i=0;i<lst.size();i++) {
    		{
    			
    			
    			if(lst.get(i).getText().equals("1")) {
    		  		lst.get(i).click();
    		  		break;
    			}
    		}
    	}
    		
    	todate.click();
    	currentdate.click();
//    	driver.findElement(By.xpath("//my-date-picker[@name='Todate']//input")).clear();
//    	Thread.sleep(100l);
//    	driver.findElement(By.xpath("//my-date-picker[@name='Todate']//input")).sendKeys("01-May-2019");
    	searchtransaction.click();
    	
    	  }
    
	@SuppressWarnings("static-access")
	@Then("^user print all the TransactionID$")
    public void user_print_all_the_transactionid() throws Throwable {
    	Thread.sleep(1000l);
    	  	
    	List<WebElement>lst= driver.findElements(By.xpath("//table[@id='DataTables_Table_0']/tbody//tr[1]"));
    	System.out.println("Transaction Search Results>>Device Monitoring Dashboard");
    	for(int R=0;R<lst.size();R++) {
    		{
    	   		System.out.println(lst.get(R).getText());
    	   	 value =lst.get(R).getText().toString().replace(",","");
    	   		}
    	
   
    	//DB data
    	System.out.println("DB  Query Data");
    	 object = new ConnectToMySQL();
    	object.DBData();
    		System.out.println("Records Total:"+object.DBData().get(0).getRecrodsttl() + "Media No:"+object.DBData().get(0).getMediano() + "Transaction Amount:"+object.DBData().get(0).getTransaction_amount()+ "Account Balance:"+object.DBData().get(0).getAccount_balance()+"Company Name:"+object.DBData().get(0).getCompany_name()+ "Transaction ID:"+object.DBData().get(0).getTransactionid());
    
    		System.out.println("Comparision");
    		 
    		if (value.contains(object.DBData().get(0).getTransactionid().toString())) {
    			
    			System.out.println("Matched TransactionID:" + object.DBData().get(0).getTransactionid());
    		}else {System.out.println("TransactionID data not Matched");}
    		if (value.contains(object.DBData().get(0).getCompany_name().toString())) {
    			
    			System.out.println("Matched Company Name:" + object.DBData().get(0).getCompany_name());
    		}else {System.out.println("Company Name data not Matched");}
    		
    		if (value.contains(object.DBData().get(0).getAccount_balance().toString())) {
    			
    			System.out.println("Matched Account Balance:" + object.DBData().get(0).getAccount_balance());
    		}else {System.out.println("Account Balance data not Matched");}
    		
    		if (value.contains(object.DBData().get(0).getTransaction_amount().toString())) {
    			
    			System.out.println("Matched Transaction Amount:" + object.DBData().get(0).getTransaction_amount());
    		}else {System.out.println("Transaction Amount data not Matched");}
    		if (value.contains(object.DBData().get(0).getMediano().toString())) {
    			
    			System.out.println("Matched Card No:" + object.DBData().get(0).getMediano());
    		}else {System.out.println("Card No data not Matched");}
    	}
    }    
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		 driver.close();
	}
}
