package de.haegar.webservice;

public class CalculatorClient {
	 public static void main(String args[]) {
	 CalculatorService service = new CalculatorService();
	 Calculator calculator = service.getCalculatorPort();
	
	 // Zugriff per SOAP-RPC auf bereitgestellte Methoden:
	 System.out.println("Summe: " + calculator.add(17, 13));
	 }
 }