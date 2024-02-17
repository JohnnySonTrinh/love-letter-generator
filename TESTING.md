## Contents

* [Automated Testing](#automated-testing)
* [Manual Testing](#manual-testing)

## Automated Testing

### Lighthouse (as of 17/02/2024)

Home page: ![Home Page Lighthouse](assets/readme-images/lighthouse-home-page-1702.png)
Contact page: ![Contact Page Lighthouse](assets/readme-images/lighthouse-contact-page-1702.png)
About page: ![About Page Lighthouse](assets/readme-images/lighthouse-about-page-1702.png)

## Manual Testing

### Welcome Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Welcome button | Scrolls to main form when clicked | Clicked welcome button | Page scrolls to main form | Pass

### Main Form

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Letter type dropdown | Allows user to select letter type | Selected each letter type | Form proceeds with correct letter type selected | Pass |
| Partner's Name input field | Allows user to input text | Input text | Allowed text input | Pass |
| Noun 1 input field | Allows user to input text | Input text | Allowed text input | Pass |
| Noun 1 Randomizer | Generates a random noun when clicked and populates noun 1 input field | Clicked randomizer button | Populates noun 1 input field with random noun | Pass |
| Noun 2 input field | Allows user to input text | Input text | Allowed text input | Pass |
| Noun 2 Randomizer | Generates a random noun when clicked and populates noun 2 input field | Clicked randomizer button | Populates noun 1 input field with random noun | Pass |
| Eye Color field | Allows user to input text | Input text | Allowed text input | Pass |
| Adjective 1 input field | Allows user to input text | Input text | Allowed text input | Pass |
| Adjective 1 Randomizer | Generates a random adjective when clicked and populates Adjective 1 input field | Clicked randomizer button | Populates adjective 1 input field with random adjective | Pass |
| Adjective 2 input field | Allows user to input text | Input text | Allowed text input | Pass |
| Adjective 2 Randomizer | Generates a random adjective when clicked and populates Adjective 2 input field | Clicked randomizer button | Populates adjective 2 input field with random adjective | Pass |
| Your Name input field | Allows user to input text | Input text | Allowed text input | Pass |
| Generate button | Generates letter if all input fields have been completed | Completed all fields and clicked Generate button | Letter generated with all fields displayed as entered | Pass |
| Generate button | Will not allow user to proceed if Partner's Name is not entered | Tried to generate letter without inputting Partner's Name | Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Noun 1 is not entered | Tried to generate letter without inputting Noun 1| Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Noun 2 is not entered | Tried to generate letter without inputting Noun 2| Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Eye Color is not entered | Tried to generate letter without inputting Eye Color| Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Adjective 1 is not entered | Tried to generate letter without inputting Adjective 1| Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Adjective 2 is not entered | Tried to generate letter without inputting Adjective 2| Letter not generated and prompted to input text in the blank input field | Pass |
| Generate button | Will not allow user to proceed if Your Name is not entered | Tried to generate letter without inputting Your Name| Letter not generated and prompted to input text in the blank input field | Pass |


### About page

### Contact Us Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |

### Header

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |

### Footer

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
Footer link 1 | Loads https://github.com/emilyrosenberg in new window | Clicked footer link 1 | Correct page loaded in new window | Pass |
Footer link 2 | Loads https://github.com/JohnnySonTrinh in new window | Clicked footer link 2 | Correct page loaded in new window | Pass |
Footer link 3 | Loads https://github.com/caleom in new window | Clicked footer link 3 | Correct page loaded in new window | Pass |
Footer link 4 | Loads https://github.com/lucia2007 in new window | Clicked footer link 4 | Correct page loaded in new window | Pass |
Footer link 5 | Loads https://github.com/Cleg83 in new window | Clicked footer link 5 | Correct page loaded in new window | Pass |
Footer link 6| Loads https://github.com/msamarpanraj in new window | Clicked footer link 6 | Correct page loaded in new window | Pass |
Footer links hover: mouse in from top or bottom | Each footer link has a "shutter-out" style hover effect beneath it when hovered | Hovered over each footer link: mouse in from top and bottom | Correct effect shown | Pass |
Footer links hover: mouse in from left | All footer links except footer link 1 have a "swipe-from-left" style effect beneath it when hovered | Hovered over each footer link: mouse in from left | Correct effect shown | Pass |
Footer links hover: mouse in from right| All footer links except footer link 6 have a "swipe-from-right" style effect beneath it when hovered | Hovered over each footer link: mouse in from right | Correct effect shown | Pass |