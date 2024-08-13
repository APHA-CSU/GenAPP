/** 
 * 		(c) Crown Copyright 2024 Animal and Plant Health Agency
 * 
 * You may use and re-use this software and associated documentation files free of 
 * charge in any format or medium, under the terms of the Open Government Licence v3.0.
 * You may obtain a copy of the Open Government Licence at
 * 
 * 		https://www.nationalarchives.gov.uk/doc/open-government-licence/
 */
package gov.apha.genapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This is the GenAPP core application entry point. 
 */
@SpringBootApplication
public class GenappApplication {

	/**
	 * Application entry point.
	 * @param args Command line arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(GenappApplication.class, args);
	}

}
