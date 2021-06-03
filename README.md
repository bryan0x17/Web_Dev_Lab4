SAIT Web Development (CPRG256) Lab Assignment 4

Café Europa has take-out and small dine-in location. If customers can order online and choose a convenient time for pick up. 

Use HTML 5, CSS and JavaScript to create a web application for ‘Café Europa’. The application will do the following:

The Customer will enter their contact information
They must choose a time if they pick up the order
Calculate the cost of the order and display it on the page.


Page Requirements:

•	Textboxes for:  Name (first and last) and contact Phone number. 
•	Choose a time to pick up their order
•	Choose from the following food items and quantity: (Note: Default quantity should be zero)

Neapolitan Style Pizza:
o	Margherita: 	$12.00
o	Quattro Formaggi: 	$12.50
o	Capricciosa:	$13.00

Sandwich Choices:
o	Schnitzel: 	$8.50
o	Mixed Grill 	$9.50
o	Big Beef on a Bun 	$10.00
Bevarages:
		Coffee: 		$2.00
		Latte:		$2.50
		Soft drink:	$1.75	


•	The web page will include the following features:
o	Include the current date at the top of the Page. Use ‘onLoad’ or ‘window.onload’ to create the ‘Date’ object and display it on the page
o	Include a background image or pattern.
o	Place a ‘thumbnail’ picture beside each type of pizza and sandwich.  When the user ‘hovers’ over the picture a larger picture of that item will be displayed. E.g. if the ‘thumbnail’ picture is 75 pixels, the larger picture will be up to 125 pixels.

Functionality:

Use HTML5 inputs and ‘patterns’ to ensure that the ‘Name’ only contain alphabetic, spaces and hyphens in the name. Create a pattern to validate the Phone Number. Use ‘input type="datetime-local" to choose the pick-up time. All these elements are required and will display an error if left blank.

Use CSS to manage the presentation of the page.

Your web app will use a JavaScript function to calculate the total cost of the order and print to the screen the customer’s name, contact phone, pick-up time, the details of the order and the final cost.


Order details to be displayed on the web page. See example below.


e.g.
	Davis Mills
	403-111-4444
	01/30/2021 05:00PM
	
	1 Margherita  	$12.00
	1 Capricciosa	$13.00
	2 Mixed Grill 	$19.00
	2 Coffee 		$4.00

	Total Cost:	 $48.00