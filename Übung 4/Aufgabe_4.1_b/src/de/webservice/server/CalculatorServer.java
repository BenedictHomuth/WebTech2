package de.webservice.server;

import javax.xml.ws.Endpoint;
import de.webservice.service.Calculator;
 
public class CalculatorServer {
public static void main (String args[]) {
Calculator server = new Calculator();
Endpoint endpoint = Endpoint.publish("http://localhost:8080/calculator", server);
}
}