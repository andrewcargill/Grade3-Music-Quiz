# Grade 3 Music Quiz
This game is designed as an educational aid for music teachers. Students will use the game to refresh their knowledge of topics covered in music lessons.

The target audience for the game is young people of 8-9 years old. The game will be used on mobile devices and on school computers. The game could be used as a re-cap, revision or pre-test resource.

The games design is fun, welcoming and purposefully simplistic in its visual design.

The visual focus is the question text and feeding back feedback to the user after each question is answered. This personal feedback helps the learner progress through the game and when they reach the end they are encouraged to try again. 

Each time the game is played the questions are presented in a new random order to keep the user engaged. 


![Website on various devices](/assets/images/readme_game.jpg)

## Features
***

### Existing Features
![Welcome and Log in screen](/assets/images/readme_login.jpg)

- Start screen
    -  Designed so that you can only enter the game with a username.
    -  A simple design with a warm welcome and clear instructions.
    - If the user clicks 'start' without entering a name an alert is shown.


![Header](/assets/images/readme_title.jpg)

- Header
    - On entering the game the users name is displayed in the header.
    - The font evokes the feelings of something modern and fun.
    - Sub-text reinforces why it is good for the user to train with the game.


![Question display](/assets/images/readme_questions.jpg)

- Question container
    - The white background against the busy crowd scene in the background draws the users eyes to the questions
    - The font that displays the questions is rounded and soft to project a feeling of friendliness and warmth. 
    - The large question text makes them easy to read. 
    - On answering a question the user receives feedback, dependent on their answer, via border color changes and the text feedback.
    - The questions are shuffled each time the game is played to retain user engagement.

![End screen](/assets/images/readme_question_display.jpg)
- End screen
    - Final score is presented and the option to play again. 
    - Design is simply text with a the 'play again' button that uses the same font as the title for consistency.  

![Buttons](/assets/images/readme_buttons.jpg)
- True or False buttons
    - The buttons are clear and use the same font as the game title for consistency.
    - The log out button is smaller, so as not to distract from the game, but always visible to the user should the want to leave the game. 

## Testing
****

Testing of the game has been carried out on various devices and browsers. In terms of testing with the target audience, this was carried out throughout the project with the help of my eight year-old daughter and her friends.

I was a music teacher for eight years and feel that this game meets the educational goals of the project, it helps students test their knowledge, and through repetition their knowledge will increase. The statements in the questions may also trigger discussion on musical instruments, theory and music history with teachers or friends. 

The game was built from mobile up as this is the main way the game will I envisage it being used. On laptops and larger monitors the game scales up to a fixed width to give the user a feeling of playing a mobile device.

The design uses the background image of a crowd at a large concert to provoke feelings of energy and help the user recall the deep positive emotions we have when listening or watching music.

The title of the game and the buttons use a font that is modern and energetic, while the questions and feedback text us more rounded and friendlier to help create a warm and comfortable in this learning environment. The tone of the text is relaxed and welcoming to reinforce this design goal.

### Challenges, Bugs and fixes

I had many challenges while completing this project. One was how to create a random order for the questions, I really wanted the game to be something that the user would play more than once. I tried a few different ways - but then discovered shuffling the array!  Shuffling the array at the start of each game was an excellent solution! 

With this project I decided that the code was more important than the design. So I began with a basic design concept and focused on learning javascript with the goal of getting a nice, simple and stable game complete. It was only on the once this was complete that I began adding design and further functions. This method worked well, but as a person who really enjoys the visual aspect of design I really felt like the end game missed that bit of design spark. 

With more time I would love to enhance user feedback through sounds and animation, but I understand that this is coding education and it is important that for my own learning I focus most of my project time on learning the languages. Which I feel I have successfully.

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


This project contains no external code. All the code in this project was written by myself. I used tutorials or forums to help me understand specific parts of code to solve design or functional challenges. 

### Content
- Font are from [Adobe Fonts](https://fonts.adobe.com/fonts) and [Google Fonts](https://fonts.google.com/about)
 - Information was taken from [Paris Fashion Week](https://www.cqlcorp.com/insights/6-step-guide-to-using-adobe-fonts-on-your-next-web-project/)
- To refresh HTML Semantics I read [developer.mozilla.com](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
)
- For font size guidelines I referenced [smashing magazine](https://www.smashingmagazine.com/2018/06/reference-guide-typography-mobile-web-design/#:~:text=In%20general%2C%20the%20rule%20of,readability%20for%20visually%20impaired%20readers.)
 - Tutorial on embedding video was from [w3schools](https://www.w3schools.com/html/html5_video.asp)
 - Various image tutorials were: [object fit](https://www.w3schools.com/css/css3_object-fit.asp), [image cropping](https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit)
 - The icons in the footer were taken from [Font Awsome](https://fontawesome.com/)
 - Information on [measure units](https://www.w3schools.com/cssref/css_units.asp)
 - Reference for [create centered menu](https://www.w3schools.com/howto/howto_css_topnav_centered.asp)
 - Reference for [Html Forms](https://www.w3schools.com/html/html_forms.asp)
 - Reference for Flex box [ccs-tricks](https://css-tricks.com/responsive-layouts-fewer-media-queries/) and [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
 - For smooth scroll I referenced [gomakethings.com](https://gomakethings.com/smooth-scrolling-links-with-only-css/
)
- Reference for screen sizes was from [browserstack](https://www.browserstack.com/guide/responsive-design-breakpoints
)
- Reference for hidding text or elements was from [moz.com](https://moz.com/blog/guide-to-hidden-text)

### Media
 - Images on the site are from [iStock by Getty Image](https://istockphoto.com)
 - Music in the video was made by and used with the permission of [Dark Arts Club](https://www.instagram.com/the_dark_arts_club/?hl=en)
 - The video was made using [Adobe Premiere Pro](https://www.adobe.com/se/products/premiere.html?gclid=Cj0KCQjw39uYBhCLARIsAD_SzMRYSAMcGSQefo5KXrvKOlVqj9uKkJNZbPqa40NO4uIK0u34Q0byUKcaAlzCEALw_wcB&mv=search&mv=search&sdid=LQLZT7BT&ef_id=Cj0KCQjw39uYBhCLARIsAD_SzMRYSAMcGSQefo5KXrvKOlVqj9uKkJNZbPqa40NO4uIK0u34Q0byUKcaAlzCEALw_wcB:G:s&s_kwcid=AL!3085!3!340839217843!e!!g!!adobe%20premiere!1469953160!58520344553)
 - Sound was edited using [Logic Pro X](https://www.apple.com/logic-pro/)
 - Images were edited using [Adobe Photoshop](https://www.adobe.com/se/products/photoshop/landpb.html?gclid=Cj0KCQjw39uYBhCLARIsAD_SzMSAro3DTlHKXUSHb9Btxli6K7nEZ0ej3UpqYP7wLy-sSvTD_4f3DPYaAh2CEALw_wcB&mv=search&mv=search&sdid=LZ32SYVR&ef_id=Cj0KCQjw39uYBhCLARIsAD_SzMSAro3DTlHKXUSHb9Btxli6K7nEZ0ej3UpqYP7wLy-sSvTD_4f3DPYaAh2CEALw_wcB:G:s&s_kwcid=AL!3085!3!597384934920!e!!g!!adobe%20photoshop!1469952956!58520335113)
 - Wireframes were created using [Adobe XD](https://www.adobe.com/products/xd.html)
 - Tree transition image was an image I modified from [Poster Poster](http://www.posterposter.org/road-letters-typographic-posters/) and created by [Diego Machado](https://www.behance.net/digous)

