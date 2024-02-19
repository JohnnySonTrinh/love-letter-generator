![Heart Banner](assets/images/readme-heart-banner.png)

# Cupid's Quill
Generate your very own love letter for your loved ones! If you have someone in mind but you don't know what to say, Cupid's Quill can help. This is a fun and engaging web app that is responsive on all screen sizes. <br>
The deployed project can be viewed [here](https://lucia2007.github.io/love-letter-generator/). <br>

![mockup](assets/readme-images/mockup.png)

## Contents

- [Cupid's Quill](#cupids-quill)
  - [Contents](#contents)
  - [Features](#features)
  - [Surface](#surface)
    - [Color Palette](#color-palette)
    - [Fonts](#fonts)
  - [Design](#design)
  - [Future Implementations](#future-implementations)
  - [Project Management (Agile Development)](#project-management-agile-development)
  - [Deployment](#deployment)
  - [Technologies Used](#technologies-used)
  - [Credits](#credits)

## Features
### Welcome Page

The site features a bright and welcoming landing page to engage the user immediately. They can click on the Welcome button to move to the Letter Generator.

<div align="center">
  <img src="./assets/readme-images/Welcome.gif" alt="Welcome">
</div>

### Header
The header shows on the Letter Generator page. It contains links to Home, New Letter, About, and Contact us. It collapses to a burger menu on smaller screens.

### Footer
The footer shows the names of all contributors and their Github links.

### Letter Generator

The Love Letter Generator accepts user input and also has the option of random selection if the user can not think of the right word. There is a selection field for the style of letter the user wishes to write. All input fields are validated with regex to be letters and spaces only. Names are capitalised and all other inputs are lower case. At the bottom of the form there are two buttons, one to generate the letter and one to clear the form.

<div align="center">
  <img src="./assets/readme-images/LetterGenerator.png" alt="Letter Generator">
</div>

### Letter output & PDF download

On the next page the user can view their letter output and switch letter styles if they wish. If they like the output they can keep it forever with a download option, which downloads the letter as a PDF with a themed border.

<div align="center">
  <img src="./assets/readme-images/LetterDownload.png" alt="PDF Download">
</div>

### About Page
The About page was designed so that you can swipe to find out more about us, like a dating app. It shows cards with information about the team contributors: Profile, LinkedIn link, things they love... as well as a few words about tech and love, or their love for tech! <br>
This page needs some more work to make it as fabulous as planned, please see [Future Implementations](#future-implementations).

### Contact Page
The Contact page has a form that sends a message to the Cupid team. It has input fields for name, email, message, and a submit button. When Submit is clicked, there is a feedback message.

## Surface

### Color Palette
The fun and festive color palette was generated with [Coolors](https://coolors.co/).
<div align="center">
  <img src="./assets/readme-images/colour-pallette.png" alt="Colour Palette">
</div>

### Fonts
For the heading font, we used Abril Fatface.
<div align="center">
  <img src="./assets/readme-images/font-title.png" alt="Title font">
</div>
For the body font, we used Montserrat.
<div align="center">
  <img src="./assets/readme-images/font-body.png" alt="Body font">
</div>

## Design

The UX design was made in Balsamiq. See the wireframes [here](assets/PDF/LoveLetterGenerator.pdf)

## Future Implementations

### About page
We would like to improve the functionality of the About page:
- Optimize image size so that the page loads faster
- Add links to GitHub and LinkedIn
- Make all six cards visible when the About page is opened
- Make the cards clickable to view the content

### Letter styles
We would like to create more targeted letter styles so the user can control:
- whether the letter is funny or serious
- the input words fitting the letter content
- selection from more styles for all the ways we can love!

### Other browsers
We built and tested this project in Chrome with Chrome Developer Tools, and we would like to improve appearance and functionality on other browsers.

### Mobile UX
We would like to improve the user experience with the web app on mobile:
- Make content properly aligned
- Make sure all intended styles and colors show
- Make form/input field stay visible when keyboard pops up
- Improve scrolling

## Project Management (Agile Development)

We have been using [GitHub projects](https://github.com/users/lucia2007/projects/10/views/1) for organizing our project and tracking user stories/issues. It is a very helpful tool which enabled us to keep all the PBIs in one place and to tackle the issues gradually and to keep an eye on our progress.

At the beginning of the project, we first spent some time on brainstorming, project planning, splitting roles and tasks, and thinking the project through. We agreed to keep it simple, to focus on the MVP and to add more complex or nice-to-have features if we had extra time. Creating wireframes and choosing the basic design options (fonts, color scheme) helped us get started fast. 

PBis were organized in a To Do section. Each of the items was assigned a priority and one of the MoSCoW tags. Whenever we were working on a task, we moved it into the "In Progress" section and when the issue was done, we moved the card to "Done". 

In a longer project we would have written out detailed User stories, categorized them in Epics and Milestones and planned out our Sprints, but this was not necessary or feasible for the hackathon style project. It would have been good to assign the tasks story points to each issue to keep the complexity of the tasks in mind.

From the beginning we tried to update the readme and testing files, especially as regards credits, sources and bug-fixes.

As you will see from our progress, we always kept MVP in mind. At first we made sure the basic features were in place so we could start working (setting up the workplace, inviting collaborators, setting up the project board, creating the index page, adding css and js files, creating wireframes and choosing design options), then we focused on the main elements and when we had some extra time, we added some nice to have features, but always keeping in mind meeting the core project requirements first.

Overall, primarily, we focused on completing the majority of the must-haves, in later stages of the product development we would consider some should and could-haves. If an issue was identified as a won't have, it was moved into the respective column.

Breaking the project up into issues and essentially into tasks, assigning them to individual team members, tracking progress in Projects was very helpful and enabled us to tackle the project quickly in manageable bite-size steps.

The Project tool was very beneficial for our development process, especially because we could rely on having all the relevant information in one place.

[Project Board](./assets/readme-images/project-board.png)

## Deployment

This page was deployed using [github pages](https://pages.github.com/)

## Technologies Used

- The site was built with the framework [Bootstrap 5.3.2](https://getbootstrap.com/)

- The PDF was created using [jsPDF](https://rawgit.com/MrRio/jsPDF/master/docs/index.html)

- [EmailJS](https://www.emailjs.com/) Was used to have a functional contact page with no back-end

- The favicon was generated with [Favicon Generator](https://favicon.io/favicon-converter/)

- Alongside the Bootstrap CSS reset, [Normalize](https://necolas.github.io/normalize.css/) V8 was used to make all browsers render more similarly

- The mockup image was created with [Techsini](https://techsini.com/multi-mockup/index.php).

## Credits

- [This guide](https://www.youtube.com/watch?v=G_h2pGZcOzc) was used for the footer effect.

- [This Videos Series](https://www.youtube.com/watch?v=6toXMFyQdB0&list=PLc1g3vwxhg1WVhYrKP0GJlZIlSn9loyXD) was used for guidance on how to use jsPDF

- Thanks to our amazing team of Cupid's Helpers for contributing all of their varied skills and ideas, and making this project fun and successful! 💘 Love you!!!
