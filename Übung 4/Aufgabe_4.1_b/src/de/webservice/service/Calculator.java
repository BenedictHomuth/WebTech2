package de.webservice.service;

import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;
 
@WebService
@SOAPBinding(style=Style.RPC)
 
public class Calculator {
	public long addValues(int val1, int val2) {
		return val1 + val2;
	}
	public long multiply (int val1, int val2){
		return val1*val2;
	}
	public long divide(int val1, int val2){
		return val1/val2;
	}
}
