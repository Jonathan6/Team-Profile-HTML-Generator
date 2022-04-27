# Team-Profile-HTML-Generator
Generates a HTML page that displays the team memebers of the project and their information.

## Description
A program that utilizes NPM and the inquirer package to help write a basic HTML page that shows every developer on a project team. The HTML can be quickly inserted into any website with ease!


## Table of Contents
- [Description](#description)
- [Read Me Generator Tutorial Walkthrough](#team-profile-html-generator-tutorial-walkthrough)
- [Overview](#overview)
- [Further Development](#further-development)


## Team Profile HTML Generator Tutorial Walkthrough

[Program Walkthrough](https://youtu.be/NriajmS5bBc)

## Overview

This program creates a basic HTML page that displays all the members of a project as well as details about them. This was a fun project that expanded on the previous project and challenged me to learn more about the inquirer package and utilize the more advanced features it offered. 


## Challenges

One example was running multiple inquirer calls. Since the last project only involved running the same set of questions every single time, the program was fairly simple to write as I only had to supply a single list every time. Creating a dynamic program that created a webpage that could either display a single member or an unlimited number made me build several inquirer calls nested within loops and logic statements to create a fluid statement stream that changed depending on what the user needs. Another challenge was how to set up gathering the data for each employee. Since all three roles needed a name, role, id, and email property, the code was really redundent when I created a separate switch statement for each case. This made the code terrible to read and update. This brought me to the when property in the Questions object the inquirer already provided, allowing me to include certain questions depending on how the user answered during previous questions. The simplified my code so much and helped me learn how to better read documentation (or at least how to search for tutorials that explained it in more detail). Finally organizing the program structure was challenging. There were times when some methods were commented out and notes to add additional functionality with different paths I could take the project. Something I should improve on in the future is to pseudo code the entire project or wireframe my ideas before starting, giving me a better sense of direction and plan to approach of the problem. Taking the project one method at a time and being able to check for bugs at every step of the way would help me understand what is wrong and where to spend my time.

# Testing



## Further Development

Future additions I would like to make for this project would be different styles or frameworks that the user could select. As a safe option I used bootstrap to create resulting HTML page. Creating other options such as Bulma would make the program more versitile for projects that are creating sites with frameworks other than bootstrap. In addition I'd like to have more information and detail on each of the cards. Currently they just show some small information about each team member but I'd like there to be some more interactivity such as links to the actual Github page or copying the email when the link is clicked on.
