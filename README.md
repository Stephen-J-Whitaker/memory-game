# **Memory Game**
The [‘Memory Game’](https://stephen-j-whitaker.github.io/memory-game/) is a game inspired by ‘Simon’, a memory game released in 1978 and is intended to be a fun and accessible way to test the short term memory skills of the player.

The Memory game plays a tone and ‘flashes’ one of the buttons and this should be copied by the player within a fixed period of time else the game will end. If the player successfully presses the same button, then another random button and corresponding tone is added to the sequence. If the player copies the whole sequence correctly then another button and tone is added and so on until the player copies the sequence incorrectly.

The game is what would be classed as a ‘retro’ game and it is designed to appeal to both new players who have not yet discovered the game and those who remember it from years gone by. For those that love the game ‘Memory Game’ will bring the game, that has traditionally been based on hardware implementations, into the realm of the world wide web where it can be enjoyed anywhere and anytime there is a connection to the internet. The interface is intuitive to new players and familiar to previous players and it’s hoped that it will give as much pleasure as the original, physical, game gave, and indeed still gives to so many today. 

The game is extremely easy to learn for those who are new to it and the combination of light and sound not only adds to the fun but also the games accessibility to those who are visually impaired. 

- [Link to live 'Memory Game' site](https://stephen-j-whitaker.github.io/memory-game/)

![Responsive mockup](docs/images/readme-responsive-mockup.jpg)

## **Contents**

1 [Project Initiation](#1-project-initiation)

2 [Game Development](#2-game-development)

3 [Features](#3-features)

4 [Testing](#4-testing)

5 [Project Sign Off](#5-project-sign-off)

6 [Releases](#6-releases)

7 [Deployment](#7-deployment)

8 [Technologies Use](#8-technologies-used)

9 [Credits](#9-credits)

## **1. Project Initiation**
- User stories
  
  User stories were ascertained for the game along with the features required to satisfy the user stories. A feature list was developed that covered all of the user stories requirements and it was ensured that there was no duplicated feature functionality going into development.
  - [User Stories](docs/pdfs/readme-user-stories.pdf)
  - [User stories acceptance criteria](docs/pdfs/readme-user-stories-acceptance-criteria.pdf)
  - [Feature list with acceptance criteria](docs/pdfs/readme-features-acceptance-criteria.pdf)

## **2. Game Development**
- ### **Game Functionality Development**

    - ### Interface Mockups
       Mockups for the game were developed that incorporated all of the features identified during project initiation. 
       
       -  [Mobile mockups](docs/pdfs/readme-mobile-mockups.pdf)
       -  [Tablet mockups](docs/pdfs/readme-tablet-mockups.pdf)
       -  [Desktop mockups](docs/pdfs/readme-desktop-mockups.pdf)
       -  [User interface flow](docs/pdfs/readme-user-interface-flow.pdf)

- ### **Game Style Development**
  - ### Typography
    A limited set of fonts was used for the site in an attempt to ensure that the site retained a coherent feel where none of the sections looked out of place contributing to the user's enjoyment of the site.
    
    - Logo
    
      A sans serif font Oribitron, sourced from [Google Fonts](https://fonts.google.com/) was selected for the game logo due to its retro game appearance. It is bold and easy to read drawing the user's attention to it and immediately identifying the site a memory game.

    - Site text

      The sans serif font Lato was selected for all other text on the site, again for the coherence of the site. It is easy to read at all sizes required for the site and on a wide range of devices. Lato was also source from [Google Fonts](https://fonts.google.com/).
    
    - 'Start' Button
      
      The SVG 'Start' button for the game uses the font 'Eras Bold ITC' sourced from within [Corel Draw](https://www.coreldraw.com/en/). The font is embedded as 'curves' in the SVG of the button to ensure it's always correctly positioned and scaled relative to the start button when the interface resizes in response to different screen sizes. It also removes the necessity to import the entire font into the site or create an additional external dependency. 

  - ### Colour Scheme

     The colour scheme for the site components was selected such that the button interface, consisting of a vibrant yellow, red, blue and green button would not clash with the other components of the site. Tones of grey are used for the site giving it a ‘clean’, modern and familiar appearance. 
     
     The header and footer have been given a linear gradient to give it the appearance of curved metal to give the site depth and the background for the main game interface is given a brushed metal appearance with linear gradient to complement the header and the footer. The metallic finish is intended to modernise the game slightly and add interest for the user. The site was designed with a mobile first approach and the game interface design helps ’transform’ the user phone appearance from their phone into ‘Memory Game’ helping to immerse them in the experience of playing it.

    The colour of the font was chosen such that should linear gradient fail and fall back to grey, the site would retain maximum accessibility with sufficient contrast between the text and the background colour. The linear gradients and text were arranged such that text on top of the linear gradient would always positioned where contrast between background and text would always ensure maximum accessibility.
      
  - ### Images / Interface

     All images used on the site are scalable vector graphics (SVG) to ensure that they remain sharp at all screen resolutions and sizes.
     
    - Favicon

      ![Favicon](favicon.ico)
      
      The favicon for the site is a copy of the button interface to help add to the identity of the site. An SVG version of the favicon is available for browsers that support it to ensure the best possible image on high resolution screens. A standard favicon.ico is the fallback for the SVG version. The SVG and ICO favicons both have transparent backgrounds to ensure the colour scheme of the browser shows through where the circular button interface image isn’t present.

    - Game pad

      The SVG for the button interface is embedded in the html to ensure that it is fully accessible and manipulatable as part of the DOM. The site requires that the SVG be manipulated with both CSS and JavaScript. Being part of interface it is also believed to be appropriate that it is embedded in the HTML in the correct location rather than referenced from elsewhere in the html in a separate ‘SVG’ specific area.
    
    - Mute/Unmute Button

      The icons for the mute/unmute button were taken from [Font Awesome]( https://fontawesome.com/). They are SVG files referenced using the HTML ‘img’ element. The images are a familiar metaphor that will easily be identified as a mute/unmute button by the user.

  - ### Layout

    - Header and Footer

      The site is laid out in a traditional way with a header and footer that will be familiar to the user despite the fact its styled to look like a physical interface. 

    - Instructions Dropdown
    
      The 'Instructions' dropdown is easy to find and is just below the header in a location that is commonly used for navigation elements. This should again be familiar to the user and help to make the site intuitive to use.

    - Game Interface
    
      The main section of the site is the game interface and related item, the current score (when visible during play) and the button to activate the top ten modal.

    - Mute/Unmute Button
    
      The footer holds the mute/unmute button as this is not a game feature as such, even though it mutes the game sound, it is considered an interface feature but not being a navigation item is believed to be more appropriately placed in the footer.

    - Top Ten and Name Entry Modals

      When visible, the top ten and name entry modals are positioned to intentionally obscure and prevent interaction with the game interface and Instructions drop down as using these at the same time as the modals is deemed unnecessary. The mute/unmute button can be visible and can be interacted with depending on the screen size. 
    
    - Responsiveness
    
      The layout is responsive and all elements resize in order to fit the screen on which they are displayed. The game is generally not compatible with landscape mobile devices with a small height and in these cases a modal requesting that the device be turned portrait is displayed.
  
  - ### User feedback

    In line with the design ethos of keeping the game retro in style buttons are styled to look like physical push buttons. The user knows that the button has been pressed either by the fact that a change in the interface takes place, such as a modal closes or the instructions dropdown opens, for example, or by a momentary change in the appearance of the button that was clicked. 

    In the case of the mute/unmute button, the ‘outset’ border is momentarily replaced with a solid border to make it look like the button is fully pushed within a recess when clicked. The symbol on the mute button also changes to indicate a change in mute state as feedback that the request to mute or unmute has been successful.

    In the case of the coloured and start buttons, the top button SVG is momentarily hidden on click to reveal a smaller version underneath. This gives the button the appearance of being pressed in. The smaller momentarily revealed coloured buttons are also a brighter colour so they appear lit up when clicked and, if the game is unmuted, the click event triggers a tone which is a game feature but also acts as feedback to the user of a successfully administered ‘click’.

- ### **JavaScript Logic / Game Algorithm Development**

     An outline plan for the JavaScript code was produced containing some pseudo code. The code evolved during development but the structure remained largely the same as planned.

    - [JavaScript pseudo code](docs/pdfs/readme-javascript-pseudo-code.pdf)

## **3. Features**
## **4. Testing**
- ### **Code Validation**
- #### **HTML Validation**
- #### **CSS Validation**
- #### **JavaScript Validation**
- ### **Performance Tests**
- ### **Functionality Tests**

- Responsiveness

- ### **Bugs Found and Resolved or Current**

## **5. Project Sign Off**

## **6. Releases**

## **7. Deployment**

## **8. Technologies Used**

## **9. Credits**
- ### **Content**

- ### **External Dependencies**

- ### **Other Sources**

- ### **Acknowledgements**

## [Back To Top](#Contents)