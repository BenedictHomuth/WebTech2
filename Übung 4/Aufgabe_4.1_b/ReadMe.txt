How to work with this project???

1. If you want to create a new function for the webservice:
	1.1 Do so in the Calculator.java file (de.webservice.service : Package)
	1.2 Then you need to Start the server to generate the new wsdl (Eclipse Play button)
	1.3 Check if server is online (Browser: http://localhost:8080/calculator?wsdl)
	1.4 If you see an xml-file everything should be good to go!

2. Update the Interface
	2.1 While the server is running go into the (de.webservice.serviceInterface : Package) with your explorer (Package = Folder)
	2.2 Here open a cmd instance and run the following command (wsimport -keep http://localhost:8080/calculator?wsdl)
	2.3 Now ther might be a new package being created!
	2.4 Just follow that path until you reach the new java files.
	2.5 Copy those and trace back to 2.3
	2.6 Replace the old files with the new ones which you copied!
	2.7 Remove the generated package folder (it is not needed since we copied the files)

3. Run and access the new functions
	3.1 Go to CalculatorClient.java
	3.2 Change the main-method as you need
	3.3 Run it ! (Server must run obviously)
