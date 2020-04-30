package de.webservice.client;
import de.webservice.serviceInterface.*;

public class CalculatorClient {
public static void main(String args[]) {
CalculatorService service = new CalculatorService();
Calculator calculator = service.getCalculatorPort();
System.out.println("Summe: " + calculator.addValues(17, 13));
}
}