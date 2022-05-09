# Running The Project

this is a monorepo project containing both frontend and backend of the assessment. to run the project simply run ``` docker-compose up ``` in the root directory.

to see all the little components that together make up our client you should go to the client directory by ``` cd client``` and run the storybook ``` yarn storybook```


# Some Notes 
* this project contains three routes:
    - ```/locations``` or simply ```/``` which shows the list of locations 
    - ```/locations/add``` to add a new location
    - and finally ```/locations/:id```  to edit an specific location. 
* users usually want to get back to the location list page after adding or editing a page. so, I decided to embed that in to our design to give the user a better experience. whenever the user moves to ```locations/add``` or ```locations/:id``` from the homepage. the new page is shown as a modal this way the user can easily get back to the location list when they are done editing. but, since the two aforementioned routes need to work when entered as a url. whenever the url is entered directly the related page is shown as a full page. 
* this project uses ```eslint```, ```prettier```, and ```stylelint``` to ensure code style consistency. and to ensure consistency I use a ```precommit``` hook for git that checks all the styling and won't let the user commit changes when there is a problem.
