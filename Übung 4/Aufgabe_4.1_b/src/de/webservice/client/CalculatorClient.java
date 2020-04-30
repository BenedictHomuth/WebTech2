package de.webservice.client;
import de.webservice.serviceInterface.*;

public class CalculatorClient {
	
	public static void main(String args[]) {
		CalculatorService service = new CalculatorService();
		Calculator calculator = service.getCalculatorPort();
		System.out.println("Add Sum: " + calculator.addValues(17, 13));
		System.out.println("Multiply Sum: " + calculator.multiply(17, 13));
		System.out.println("Divide Sum: " + calculator.divide(17, 13));
		
	}
}