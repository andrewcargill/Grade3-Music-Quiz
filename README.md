# Grade 3 Music Quiz
This game is designed as an educational aid for music teachers. Students will use the game to refresh their knowledge of topics covered during music lessons.

The target audience for this game are young people of 8-9 years old. The game will be used on mobile devices and on school computers. The game could be used as a re-cap, revision or pre-test resource.

The games design is fun, welcoming and purposefully simplistic. Using the energy of the crowd in the background image to spur the students along!

The visual focus is the question text, and feeding back feedback to the user after each question is answered. This personal feedback helps the learner progress through the game and when they reach the end they are encouraged to try again. 

Each time the game is played the questions are presented in a new random order to keep the user engaged. 


![Website on various devices](/assets/images/readme_game.jpg)

## Features
***

### Existing Features
![Welcome and Log in screen](/assets/images/readme_login.jpg)

- Start screen
    -  Designed so that you can only enter the game with a username.
    -  A simple design with a warm welcome and clear instructions.
    - If the user clicks 'start' without entering, an name an alert is shown.


![Header](/assets/images/readme_title.jpg)

- Header
    - On entering the game the users name is displayed in the header.
    - The font evokes the feelings of something modern and fun.
    - Sub-text reinforces why it is good for the user to train with the game.


![Question display](/assets/images/readme_questions.jpg)

- Question container
    - The white background against the busy crowd scene in the background draws the users eyes to the questions
    - The font that displays the questions is rounded and soft to project a feeling of friendliness and warmth. 
    - The large question text makes it easy to read. 
    - On answering a question the user receives personalized feedback, dependent on their answer, via border color changes and text.
    - The questions are shuffled each time the game is played to retain user engagement.

![End screen](/assets/images/readme_question_display.jpg)
- End screen
    - Final score is presented with the option to play again. 
    - Design uses clean text and the 'play again' button that uses the same font as the title for consistency.  

![Buttons](/assets/images/readme_buttons.jpg)
- True or False buttons
    - The buttons are clear and use the same font as the game title for consistency.
    - The log out button is smaller, so as not to distract from the game, but always visible to the user should they want to leave the game. 

![Favicon](/assets/images/readme_favicon.jpg)
- Favicon
    - Young people love things to feel like 'the real thing' and they are quick to spot if something looks unprofessional. 
    - The favicon is a small detail that ensures them that this is a well thought-out and well-functioning game.
    - The font used for the M is the same as in the title for consistency.


## Testing
****

Testing of the game has been carried out on various devices and browsers. In terms of testing with the target audience, this was carried out throughout the project with the help of my eight year-old daughter and her friends.

I was a music teacher for eight years and feel that this game meets the educational goals of the project. Having fun ways to help students test their knowledge is invaluable, and through repetition their knowledge will increase. I envisage that the statements in the quiz could also lead discussions around musical instruments, theory and music history with teachers or classmates. 

The game was built from mobile up as this was the most important viewport for the game. On laptops and larger monitors the game scales up to a fixed width of 800px and centres on the screen, to give the user a feeling of playing on a mobile device.

The design uses the background image of a crowd at a large concert to provoke feelings of energy and to maybe trigger the deep positive emotions we have when listening or watching live music.

The title of the game and the buttons use a font that is modern and energetic, while the questions and feedback text use the more rounded and friendlier font to help create a warm and comfortable learning environment. The tone of the text is relaxed and welcoming to relax users.

### Challenges, Bugs and fixes

I had many challenges while completing this project. One was how to create a random order for the questions, I really felt it was important for the game to be something that the user would play more than once. I tried a few different ways - but then discovered shuffling the array and running through the index. Shuffling the array at the start of each game was an excellent solution and well worth two days of exploring. 

With this project I decided at the start that the code was more important than the design. My wireframe was very simplistic and focused on learning javascript with the goal of getting a nice, simple and stable game completed. This method worked well, but as a person who really enjoys visual design, I really personally felt like the end game missed that bit of design spark. 

I would have loved to have enhanced the user feedback further through sounds and animation, but I understand that this is primarily a coding education and it is important that for my own learning I focus most of my project time on the coding languages. I feel this project has enabled me to become comfortable with Javascript and further refresh my HTML and CSS skills.

There were various small bugs and fixes along the way, which are documented in the GitHub commit history.

### Validator Testing
- HTML
    - No errors were returned when passing through the official W3C validator
- CSS
    - No errors were found when passing through the official (Jigsaw) validator
- Lighthouse
    - The site scored very well.

![Lighthouse Results](/assets/images/readme_lighthouse.jpg)

### Unfixed Bugs

No unfixed bugs

## Deployment
***

- The site was deployed to GitHub page using the following steps:
    - From the GitHub repository, select the Setting tab.
    - From the left hand menu select Pages.
    - Click on Branch and select main and then save.

Here is a live link to the site [Grade 3 Music Quiz](https://andrewcargill.github.io/music-quiz/)

## Credits
***


This project contains some external code which is noted in the files where used.
- (game.css - line: 80) A drop-shadow effect for the background of the text container was sourced from [getcsscan](https://getcssscan.com/css-box-shadow-examples)
- (game.js - line: 151) Shuffles the array of questions [sebhastian](https://sebhastian.com/fisher-yates-shuffle-javascript/)

 All the code, except for the above, was written by myself. I used tutorials or forums to help me understand specific parts of code and to solve design or functional challenges. I must also say a big thanks to the tutor 'Ed' for helping me understand Javascript when it was getting tough and my mentor Jubril for great advice, encouragement and tips.

### Content
- Font are from [Adobe Fonts](https://fonts.adobe.com/fonts) and [Google Fonts](https://fonts.google.com/about)
- How to submit and form from a button outside of the form [Hashrocket](https://til.hashrocket.com/posts/v2s2gxgifj-submit-a-form-with-a-button-outside-the-form)
- Adding a favicon [w3c](https://www.w3schools.com/howto/howto_html_favicon.asp#:~:text=A%20favicon%20is%20a%20small,simple%20image%20with%20high%20contrast
)
- Box shadows [Getcsscan](https://getcssscan.com/css-box-shadow-examples)
- Javascript href links [w3c](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)
- Javascript element border color change [tutorialkart](https://www.tutorialkart.com/javascript/how-to-change-border-color-of-html-element-in-javascript/)
- Javascript objects [logrocket](https://www.w3schools.com/js/js_objects.asp
)
- multiple classes to a HTML element [stackoverflow](https://stackoverflow.com/questions/8722163/how-to-assign-multiple-classes-to-an-html-container)
- Reference for border padding [w3c](https://www.w3schools.com/css/css3_borders.asp)
- Aligning div elements reference [w3c](https://www.w3schools.com/css/css_align.asp)
- Working with objects and values [Stack overflow](https://stackoverflow.com/questions/4090491/how-to-get-the-first-element-of-an-array
https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object)
- Working with counting lengths in an array [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- Randomly selecting [stackoverflow](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
- Creating a counter [stewyearth](https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici)
- show and hide elements in Javascript [bobbyhadz](https://bobbyhadz.com/blog/javascript-hide-show-element-by-id)

### Media
 - Crowd image is a sample image from [freepik](https://www.freepik.com/)

