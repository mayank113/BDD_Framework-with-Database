package com.qa.ABT.MyRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "D:\\nec\\Automation\\BDD_Framework-master\\BDD_Framework-master\\src\\main\\java\\com\\qa\\ABT\\Feature",
		glue={"com.qa.ABT.StepDefinition"},
		monochrome = true,
		dryRun = false,
		 plugin= {"pretty","html:test-output/login.html", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
			
		)

public class scenario_runner {
 
		}
