We will update many parts of the server to make it more into a final website and not just a competition submission. Firstly, we will add permanent data so that people who have access to the website can see the same confessions as other people. These confessions will also be stored into an archive that everyone can see. These changes will make the website more enjoyable to use and allow people to interact with each other.

Next, we will add minor changes for the website. The first one is to make the reporting easier by showing how to do it in the tutorial. Next, we let the reported confessions be deleted if the report is valid. We change this either manually or make the report automatically delete a confession from the archives. We will also remove some game elements so that the website will make more sense and less confusing for the user. 

Type of Data:
Confessions 
Purpose: for users to anonymously type out anything they want to confess and be shown in the website
C - Create object once it is submitted
R - Read it in both confessions page and archives once submitted and created
U - Not updated
D - Not deleted unless removed for breaking rules
https://wireframe.cc/no0Tuu

Type of Data:
Report Form
Purpose: for users to report about any issues that's been encountered with the website
C - Create object record of the user-inputted data when submitted
R - Read in Contact Authorities page
U - Not updated
D - Not deleted
https://wireframe.cc/Vv0BuJ
report {
	     number: number,
                 password: text-string,
	     message: text-string
	}

Visual of Wireframes:
Confessions: https://wireframe.cc/GBkQJs
Archives: https://wireframe.cc/NTqogN
Report: https://wireframe.cc/9vSiBk


=========================================================================================================================================

Title: Spill The Deej

Description:
A website with a stream of messages from a bot.
This bot can also take in messages and display them on screen.
Certain messages given to the bot can trigger changes in the website revealing new information
about the bot and where the messages are from.
There are also two archive webpages. One for everyone and one for those with a password.
These webpages will show the previous messages that have been put in the system.

Outline:

- Homepage: On the left side of the screen, there will be an image of the confession bot.
  Next to it will be the send messages button. On the right side will be the stream of messages.
- Archives: This webpage will contain a lot of messages which have been the past messages in the system.
  It will have a pagination section in the bottom to select which confessions you will see in the middle.
- Admin Archives: This webpage will require a password to enter. When this password is entered, the user will be directed to a webpage very similar to the archives.
  It will have a pagination section in the bottom to select what confessions you will see as the boxes above change to show the confessions.

JS Description:

- In the homepage, javascript will be used to cycle through the messages in the right hand side of the screen.
  It will also be used to change the attributes of the elements in the pages to make the website responsive
  such as hiding or showing new elements when certain actions are done.

- In the archives, javascript will be used for the pagination and the changing of the confessions shown on screen.
  Javascript will also be used to stop the user from going to this page after a certain event happens.

- In the admin archives, javascript will be used to give access to the webpage if the password is given.
  It will also be used to change parts of the webpage after certain actions are done like clicking certain areas.

Wireframes (created using wireframe.cc):

- https://wireframe.cc/aku8UR (Homepage)
- https://wireframe.cc/onn2qT (Archives)
- https://wireframe.cc/GpSjAE (Admin Archives)
