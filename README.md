# HTN-2024-Frontend-Developer-Challenge
## Login Details
Username: htn

Password: 2024

## Figma Design File
<a href="http://example.com/](https://www.figma.com/file/36po67HQXqiwpgBmAGLY84/Hack-The-North-Dashboard?node-id=0%3A1" target="_blank">https://www.figma.com/file/36po67HQXqiwpgBmAGLY84/Hack-The-North-Dashboard?node-id=0%3A1</a>

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone the project and run `npm install` to install all the dependencies.

In the project directory, you can run: `npm start` to start the app in development mode.

To deploy, run `npm run build` to build the app for production to the `build` folder.

## Writeup

### 1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did you decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

For the planning process, I first needed to understand the general idea of the challenge. After reading the specifications, I decided that I would have three types of pages; a login page, events page, and a page for each individual event. I then looked at similar websites to get inspiration and ideas for the design. Once I had a general idea of what I wanted, I started creating wireframes and prototypes using Figma. This helped me to visualize the structure of the website and to get feedback from others before I started coding. I also found from previous experience that having a Figma design to work off of makes the coding process easier as I would only have to worry about implementation rather than having to also consider designing while I was implementing. 

I decided to use React as my frontend framework because it was a simple and I had with most experience with it. In terms of CSS libraries, I’ve heard of bootstrap and wanted to try it out, but after watching a few tutorials, I found that bootstrap provides many pre-made components which makes for a quick and generic frontend. However, I wanted to put a lot of detail and customization into my frontend, and I found that bootstrap was a bit too cumbersome for that so in the end I decided to use react styled components as I have used for my previous projects. React styled components allowed me to craft the styling of each component meticulously, ensuring that they fit the theme and were visually appealing. 

For the API calls, I could have used Fetch, Axios, or GraphQL. I chose to work with Axios as I had the most experience with it before.

I am particularly proud of the card animations when the cards are filtered or moved around. I used React Framer Motion to achieve that effect although it took me a while to get it working, I’m glad I found that library because I can see it being very useful in future projects. I am also glad that I learned how to use Axios and make API calls because that will also be a very important skill to have in my future projects.


### 2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?


If I had additional time, I would improve the security of the authentication instead of hardcoding it. I would probably use a service like Firebase Authentication or AWS Cognito to help me with this.

To make the website more aesthetic, I would also like to implement a dark mode into the website. I had a dark mode version already made in Figma, but because I prioritized functionality over aesthetics, I ran out of time to implement it.

To enhance efficiency, I would optimize the searching and sorting processes to make them more streamlined and faster. Currently, every time the search bar is updated or the filter categories are changed, or the sort-by category is changed, all the events are run through the filtering function again and the cards are rerendered. I believe that there is probably a more efficient way to implement this so that redundant processes can be removed, making the site more efficient and responsive.

In terms of additional features, I would also add a feature that would allow hackers to add events they are interested in to a calendar. The calendar would show all events that the hackers are interested in, in addition to all the other special events such as meal times or closing ceremonies. In addition, hackers would be able to add their own blocks of time onto the calendar. Hackers would be able to plan when they would like to work, sleep, or go on breaks. This would allow hackers to better plan how they would like to use their time at Hack the North and hopefully have a more enjoyable experience.

I would also like to implement features that would store some user state data. For example, when the user sets specific filtering or sorting options, they would be stored in cookies so that they would stay in the same state when the user leaves and comes back to the site. In addition, for the user’s convenience, I would implement persistent user authentication so that the user wouldn’t have to log in every time they visit the site.


### 3. Any other thoughts you have (not limited to the previous questions).


I was able to put into practice and enhance many of the tools and skills I have already learned, including React, Styled-Components, and CSS properties. Additionally, I learned a lot from this project, such as using JS functions like sort and filter, formatting datetimes in JS, and working with new libraries like framer motion. I thoroughly enjoyed working on this project and seeing it grow from the ground up.
