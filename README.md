# Project Title

## 1. Project Description
State your app in a nutshell, or one-sentence pitch. Give some elaboration on what the core features are.  

A stress management app that will track user progress over time to schedule stress management activities and develop simple progress reports to help manage students’ stress.

## 2. Names of Contributors
List team members and/or short bio's here... 
* Mark P, I like cheese.
* Gurvir Dhami: I am tall and I like pasta
* Alex Choi. Birthday boi
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* Images found on Google

## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* 1. Log on
* 2. Click on the Stress section button
* 3. Click on Stress Checker button
* 4. Answer questions on the questionairre
* 5. Click on the 'Let's Do it!' button if you wish to move forward
* 6. Complete each assigned activity and press done once complete
* 7. After all tasks are complete users will see a final page to let them know they are finished 

## 5. Known Bugs and Limitations
Here are some known bugs:
* The footer does not seem to stick to the bottom of the page on all pages

## 6. Features for Future
What we'd like to build in the future:
* Make calendar to load user's events data to transform its look.
* Have the timer inform the actual time spent on selected event's time requirement
*   and work in tandem with the calendar to display both expected and actual time 
*   of event
* Have the Stress checker only be done once a day
* Add social feature to allow groups that can see each others' progress
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .firebaserc                         # Associated with firebase hosting
├── .gitignore                          # Git ignore file
├── index.html                          # landing HTML file, this is what users see when you come to url
├── 404.html                            # Error page when app cannot load
├── aboutus.html                        # About us page
├── activities-main.html                # This is what users see after logging in
├── activities-recommended-high.html    # If users are high stressed, this is the page users will be presented with
├── activities-recommended-low.html     # If users are low stressed, this is the page users will be presented with
├── activities-recommended-med.html     # If users are medium stressed, this is the page users will be presented with
├── calendar.html                       # A calendar for users to make events and assign times for them
├── done.html                           # This is the page users will see after they have completed 
├──                                       their recommended tasks
├── firebase.json                       # Associated with firebase hosting
├── firestore.indexes.json              # Associated with firestore database
├── firestore.rules                     # Associated with firebase hosting
├── graph.html                          # Displays the users stress levels over time
├── login.html                          # This page is what users see when they are asked to log in
├── main.html                           # This is the main page that provides the user with which features they can 
├──                                       explore
├── package-lock.json                   # Associated with firebase hosting
├── README.md
├── stress-checker.html                 # The main page for the stress checker app within the program
├── stress-highStress.html              # The result page users will see if they are high stress
├── stress-level-checked.html           # Test page used as a template
├── stress-lowStress.html               # The result page users will see if they are low stress
├── stress-medStress.html               # The result page users will see if they are med stress
└── study-timer.html

It has the following subfolders and files:
├── .firebase                       # Folder for Firebase hosted
    /hosting..cache                 # Cache holding our firebase hosting
├── .vscode                         # Folder for VS Code
    setting.json                    # Associated with VS Code
├── .git                            # Folder for git repo
├── images                          # Folder for images
    /956860-200.png                 # Source: Google
    /aaa.jpg                        # Source: Google
    /bbb.jpg                        # Source: Google
    /biglebowskytumb.webp           # Source: Google
    /ccc.jpg                        # Source: Google
    /ddd.jpg                        # Source: Google
    /facebook_739237.png            # Source: Google
    /instagram_733614.png           # Source: Google
    /twitter_733635.png             # Source: Google
├── scripts                         # Folder for scripts
    /activities-recommended-high.js # Dynamically inserts activities for high stress
    /activities-recommended-low.js  # Dynamically inserts activities for low stress
    /activities-recommended-med.js  # Dynamically inserts activities for med stress
    /authentication.js              # Authenticates users
    /calendar.js                    # Runs the functional code for the calendar
    /firebaseAPI_BBY29.js           # Firebase database API
    /graph.js                       # Runs the functional code for the graph
    /main.js                        # Runs the core functional aspects for the app
    /script.js                      # Controls the logout function
    /skeleton.js                    # Replaces the navbar and footer from before login to after login versions
    /stress-checker.js              # Runs the functional code for the stress checker app
    /timer.js                       # Runs the functional code for the timer
├── styles                          # Folder for styles
    /style.css                      # Controls all the styling for the entire program
├── text                            # Folder for Navbar and Footer
    /footer_after_login.html        # The footer after login has occurred
    /footer_before_login.html       # The footer before login has occurred 
    /nav_after_login.html           # The navbar after login has occurred
    /nav_before_login.html          # The navbar before login has occurred
    /test_navbar.html               # A test navbar that is not used


```


