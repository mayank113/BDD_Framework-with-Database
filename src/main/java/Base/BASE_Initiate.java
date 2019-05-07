package Base;

import java.io.File;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;


public class BASE_Initiate {

public static Properties prop;
public static WebDriver driver;
	
public BASE_Initiate() throws IOException {
	
	File f = new File("./src\\main\\java\\Base\\config.properties");
	FileInputStream IP = new FileInputStream(f);
	 prop = new Properties();
	prop.load(IP);
}
	
public void Initiate() throws Exception {
		
		
		if(prop.getProperty("browser").equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");
			driver =new ChromeDriver();

		}
		else if(prop.getProperty("browser").equals("headlesschrome")) {
			
			ChromeOptions ch = new ChromeOptions();
			 ch.addArguments("headless");
		     ch.addArguments("window-size=1200x600");
		     System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");
		     driver = new ChromeDriver(ch);
		} 
		
		else{
			System.setProperty("webdriver.gecko.driver", "./Drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
	
		
		}

}
