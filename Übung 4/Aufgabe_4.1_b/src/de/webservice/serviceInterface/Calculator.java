
package de.webservice.serviceInterface;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.ws.Action;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebService(name = "Calculator", targetNamespace = "http://service.webservice.de/")
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface Calculator {


    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns long
     */
    @WebMethod
    @WebResult(partName = "return")
    @Action(input = "http://service.webservice.de/Calculator/divideRequest", output = "http://service.webservice.de/Calculator/divideResponse")
    public long divide(
        @WebParam(name = "arg0", partName = "arg0")
        int arg0,
        @WebParam(name = "arg1", partName = "arg1")
        int arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns long
     */
    @WebMethod
    @WebResult(partName = "return")
    @Action(input = "http://service.webservice.de/Calculator/addValuesRequest", output = "http://service.webservice.de/Calculator/addValuesResponse")
    public long addValues(
        @WebParam(name = "arg0", partName = "arg0")
        int arg0,
        @WebParam(name = "arg1", partName = "arg1")
        int arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns long
     */
    @WebMethod
    @WebResult(partName = "return")
    @Action(input = "http://service.webservice.de/Calculator/multiplyRequest", output = "http://service.webservice.de/Calculator/multiplyResponse")
    public long multiply(
        @WebParam(name = "arg0", partName = "arg0")
        int arg0,
        @WebParam(name = "arg1", partName = "arg1")
        int arg1);

}
