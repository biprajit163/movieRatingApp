# Starwars Movie Ratings App
This is a Movie Rating App that uses the SWAPI (https://swapi.dev/api/) to fetch data about the first six Starwars movies. Here is a deployed version on Heroku (https://bips-starwars1.herokuapp.com/)   


# How the App looks 
#### Home page
![image](https://user-images.githubusercontent.com/14338321/105278245-0b119380-5b73-11eb-94d1-39489a45ed85.png)
#### Movie Info page
![image](https://user-images.githubusercontent.com/14338321/105278264-1369ce80-5b73-11eb-94f4-ab417878dbda.png)
#### Login Page
![image](https://user-images.githubusercontent.com/14338321/105278707-0d282200-5b74-11eb-8913-56ad47975133.png)
#### Comments History page
![image](https://user-images.githubusercontent.com/14338321/105278723-13b69980-5b74-11eb-92d9-1db4c7d3942b.png)


## Technologies used
- JavaScript/HTML/CSS
- React.js library
- Heroku
- Starwars API (SWAPI)
- Icons from Font Awesome

# Wireframes 
![image](https://user-images.githubusercontent.com/14338321/105285214-ef61b980-5b81-11eb-9fff-8826ec25a7c9.png)

![image](https://user-images.githubusercontent.com/14338321/105285229-f5579a80-5b81-11eb-85b6-0db3302bafa1.png)

![image](https://user-images.githubusercontent.com/14338321/105285242-fbe61200-5b81-11eb-8268-4ceb55e6e765.png)

## Components Heirarcy
![image](https://user-images.githubusercontent.com/14338321/105285263-056f7a00-5b82-11eb-8ff1-791907eb3d1d.png)


# User Stories 
The user can click on one of the movie posters to go to that movies information page. When the user is on the information page they will see the movie title and an area that shows the movies description. The movie description does a continous scrolling animation so you gotta read it fast! There is also a movie feature section that showcases a planet, a character, and a starship from that movie. There are hundreds of characters per episode so you get a random one everytime the page reloads. At the bottom of the info page there is a comment section where the user can make comments about the movie. Then the user can submit their comments and it will appear right below the comment section and their comment will be stored in the comment history page, how cool is that!! When the user clicks on the comment history page they will be navigated to a password section, just between you and me the password is (**commentHistory123**) 😉, when the user is logged in they will be navigated to the history page and they can see all the comments they made about the movies. They can clear their history by clicking the clear comments button, and they can logout of the page by clicking logout. The user can also rate each of the movie from a 1-5 jedi rating!

### MVP
 - Dynamically link all the movies to their information page
 - Give a comment section in each info page
 - Make a ratings section for each movie

### Stretch goals
 - Make a comments history page to store all the comments the user had written
 - Make a password login page so that when the user navigates to that page they have to enter a password before they can enter
 - the comments history page should have a button to clear all previous comments and a logout button 


# Approach taken
When I first started building this app I wanted the user to process all the inforamtion from the Starwars movies and give each of them a rating. After I made the movie info page I used react router to dynamically link each of the movie posters to that movies information. Inside the movie info page I did another fetch statement to get the random character, planet, and spaceship. I added the comment section at the bottom of the page because I wanted the user to interact with the data. I made the comment section by using react forms, and when the user would submit the data it would appear in a section below the form and get saved to the history page. I made the comments history page so that the app can be more personal to the user and they can see all their comments on each respective movie. I added a password section for security and so that only the user can gain access to their comments. The password has an eye icon next to it, it allows the user to toggle the password from visible to not visible. As far as styling goes I wanted to keep it simple so that the user can have a good user experience. Two things to note about my styling is the scroll animation that the info page has, that part was directly influenced by the actual starwars movies. And the rating system which displays the jedi icon from the movies and has a 1-5 star rating system.  


# Major Hurdles
The most difficult part for me was making the comment section functional and storing it in memmory. At first I had no idea on how to approach this issue, then I saw a project with a very similar funcitonality, and that project was the classic React todo list. In the todo list project the user can write something in a form and when they hit submit, it will go onto the todo list. I wanted to use the same functionality for my comment section. Then to store the comments I saved it in local storage and gave each comment section a key unique for each movie, and then I got the data back in my history page and printed it out in the appropriate section. The only part of this project that remains unfinished is that when the user reloads the page for one of the movies and starts writing a whole new comments then local storage forgets about the previous comments. The main issue for this is how I am saving my comments in local storage, I need to check if local storage already has some saved comments and if they do then add the new comments the user is typing in. This is a problem I will definetly come back to in the future. 

## Thoughts for later...
I really like how my project turned out but it is far from perfect. For next time I would like to add a form to the history page that allows the user to set their password and maybe even their own username. As for the rating system I don't like how it is only a 1-5 rating some people might want to give it a 4.5 star or something of that sort and I want to make that functionality possible. Also when the user reloads the home page all the ratings they input goes away, I want to make it so that when the page is reloaded then all their ratings are saved.

# Installation 
To install this project you can fork this repo and clone it to your machine. Then you need to use npm install to download the React dependencies. After that you need to install react-router and react-icons for this app to be functional. After that just go have fun and try to make your own edits on this app to make it better!  

# Credit
- Comment section: I modified this todo app project to make my comment section functional. 
    - Link: https://www.youtube.com/watch?v=E1E08i2UJGI&ab_channel=BrianDesign

- Rating system: I followed this video to make my star rating system funcitonal.
    - https://www.youtube.com/watch?v=eDw46GYAIDQ&ab_channel=EricMurphy

- I used this video to help animate my movie description section 
    - https://www.youtube.com/watch?v=tsrsSiYueTk&ab_channel=Codecourse

















