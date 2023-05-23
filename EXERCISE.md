# Exercises

## Intro

This file is written in [Markdown](https://en.wikipedia.org/wiki/Markdown), to view it in readable format, you can use a Markdown parser such as the online [Dillinger parser](https://dillinger.io/).

#### Ruby on Rails

[Ruby on Rails](http://rubyonrails.org/) (referred to as Rails) is a framework created on top of the [Ruby programmming language](https://www.ruby-lang.org/en/) that developers use to build web applications. You can build complete websites using Rails - but in this exercise we are only using it to build a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) that returns [Json](http://json.org/). Ember.js (see below) will be responsible for the remaining part.

Ruby, the language that powers Ruby on Rails, is an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming), [dynamic language](https://en.wikipedia.org/wiki/Dynamic_programming_language). It is known to increase programmer productivity by letting programmers focus on building the application rather than having to constantly write [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code). One of [Yukihiro Matsumoto](https://en.wikipedia.org/wiki/Yukihiro_Matsumoto)'s priorities when creating Ruby was programmer happiness. For an idea of the simplicity of ruby (as opposed to something like C++), to concatenate two arrays you can do `[1, 2] + [3, 4]` to get `[1, 2, 3, 4]`.

#### Ember.js

[Ember.js](http://emberjs.com/) is a framework created on top of the [Javascript programming language](https://developer.mozilla.org/en-US/docs/Web/JavaScript) that helps you build [Single Page applications](https://en.wikipedia.org/wiki/Single-page_application). This type of applications allows you to build fast native-like
experiences in the browser. The way they work is that all the application logic is written in JavaScript, and only data
is transferred between the browser and the server.

You can follow the [getting started guide](https://guides.emberjs.com/v2.11.0/getting-started/) on the Ember homepage to get a better introduction.

#### Rails + Ember.js

Ember.js cannot be used on its own as it is merely the part that runs in the browser and we need a "backend" framework to feed it data (in this case we are using Ruby on Rails).

As you can see in this project structure, it is split into two main directories: `rails` and `ember`. They are mostly separate apps that complete each other to create the final result that is our Lebtivity app.

#### Version Control

We are using [git](https://git-scm.com/) for version control. Each change should be commited with a message describing what was changed.

#### Ember CLI

We are using [ember-cli](http://www.ember-cli.com/) as the build tool for the Ember app. Build tools allow us to differentiate between the code we write and the code we deploy. While build steps are a necessity for compiled languages such as C++, they are not required for interpreted languages such as ruby and JavaScript. However, even though it is not necessary, professional JavaScript code should go into a build step as well.

For example, Ember CLI converts ES2015 syntax to ES5 as a build step (via [Babel](https://babeljs.io/)), which allows us to use the latest version of JavaScript even before it's supported in current browsers. It concatenates asset files, converts [SASS](http://sass-lang.com/) to plain old CSS, minifies JavaScript and CSS, etc.

Ember CLI also provides us with a development server with live reload (the page reloads when we make changes to the code) as well as CSS hot-reloading (CSS is updated without reloading the page). Ember CLI also dictates our file structure and what to name our files. You can check out the Ember CLI homepage for more info on what it does and how it works.

Since we are using ES2015 (aka ES6) syntax in our app, you will want to familiarize yourself with it. You can check out [this guide](https://babeljs.io/learn-es2015/) on ES2015 features.

#### SQLite

[SQLite](https://www.sqlite.org/) is a lightweight database management system that requires zero configuration. The main purpose
of SQLite is simplicity and ease of installation. SQLite's simplicity however is not suitable for real life applications.
As this is just an exercise, we are using SQLite here to avoid the hassles of setting up a production level database such as [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) - our database of choice.

#### Code Editors

Traditionally, [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) were the tool of choice to write code and build
applications. Examples of IDEs include [Microsoft Visual Studio](https://www.visualstudio.com/vs/), [Netbeans](https://netbeans.org/), and [Eclipse](http://www.eclipse.org/).

Nowadays however, simpler, more lightweight code editors are becoming the preferred tool of choice for a big number (if not the majority) of software engineers. That is our preference as well. There are many great code editors out there such as:

- [Atom](https://atom.io/) (Our tool of choice).
- [Visual Studio Code](https://code.visualstudio.com/) (Microsoft's new code editor which is an alternative to their IDE).
- [Sublime Text](https://www.sublimetext.com/).
- [Vim](http://www.vim.org/) (Very hard to learn but extremely productive once mastered - used without a mouse).
- [Emacs](https://www.gnu.org/software/emacs/) (Vim's nemesis)

You may want to install addons to your tool of choice to add support to the languages we use such as Handlebars and SASS.

There's no "One Tool to Rule Them All", so feel free to use any tool that makes you productive (not necessarily listed above).

## Steps

For this exercise, we're going to add or fix features in an existing [Lebtivity](http://www.lebtivity.com/) mini-clone project. The application is a single page JavaScript application built with Rails and Ember.js.

Note that exercises 8 - 10 are independent puzzles (not part of the Lebtivity clone application).

Projects often contain a [README](https://en.wikipedia.org/wiki/README) file that contains instructions on how to install/develop that project. Follow the instructions inside the `README.md` file to setup this project and start development.

1) 
<!-- The current design is not flexible and does not account for various device dimensions. With today's devices, we cannot build our applications with the assumption of one screen size in mind. This is where [responsive web design comes in](https://en.wikipedia.org/wiki/Responsive_web_design). Since CSS is part of the front end, we will be working in the `ember` directory. CSS stylesheets are located in `ember/app/styles`. Notice that stylesheets have the `.scss` extension (as opposed to `.css`). That is because we are using [SASS](http://sass-lang.com/). No need to dive into that now, we will only be working in CSS at the moment, and since SCSS is a superset of CSS, knowing CSS should be enough for now. -->

<!-- We're currently using the legacy `float` CSS rule to position the cards on the homepage. As a first step, we need to replace this rule with the new and magical [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

Next, we're going to add [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) to support different screen sizes:

- Between 0 and 440px we need to have one event card per row.
- Between 440px and 880px, 2 cards per row.
- Between 880 and 1320px, 4 cards per row.
- 6 cards for screens wider than 1320px.

Things to keep in mind while working on it:
- We need to preserve the event cards' dimensions.
- We need to make sure the images don't get pixelated (which shouldn't happen if event cards remain unchanged).
- The spacing _between_ the event cards needs to stay the same. (If there is extra space let it be on the sides by centering the cards).
- Make sure "Add an event" button is visible on all breakpoints.
- If the last row doesn't contain enough cards, the cards in the last row should be aligned to the left.
- Make sure to remove any existing unnecessary extra CSS code (such as margins) once you switch to the CSS Grid layout.
- Commit your changes using git with the message "Make the app responsive". -->

2) We want to add the option to create non-published events. Non-published events will be created but hidden on the homepage.
  - You will need to add "published" (a boolean column) to the events table in the database. To do that, use the rails [Migration command](http://edgeguides.rubyonrails.org/active_record_migrations.html).
   The reason we don't create it in the database manually is to keep track of what changed so others can also apply that same change.
  - You will need to update the Ember event form to save the field.
    * Add the "published" property to the [model hook](https://guides.emberjs.com/v3.12.0/routing/specifying-a-routes-model/) in the `new` route.
    * Add a "published" [checkbox](https://guides.emberjs.com/v3.12.0/templates/input-helpers/#toc_checkboxes) to the `new` template
  - Configure the rails events controller to permit "published" as a parameter by adding it to the whitelisted [strong parameters](http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters).
  - Update the rails events controller (the `index` action) to only send events that are published. Check how to add conditions to Rails model queries [here](http://guides.rubyonrails.org/active_record_querying.html).
  - Commit your changes using git with the message "Add published field to events"

3) The current dates shown in the event page are not user friendly. We're going to make them prettier.
  - Create an [Ember helper](https://guides.emberjs.com/v3.12.0/templates/writing-helpers/) named `from-now` that takes a date and renders it in relative time. For example: "In two days" or "In 3 months". You will need to use [moment.js](http://momentjs.com/). Follow the same approach used in the `short-date` helper that is used in the home page.
  - Commit your changes with the message "Make event dates pretty".

4) The current edit button takes you to an empty page with no functionality. We should fix that.
  - Create an `events/edit.hbs` template which contains a form that is almost identical to the `events/new.hbs` template.
  - Create an `events/edit.js` controller that handles the save action [action](http://guides.emberjs.com/v3.12.0/templates/actions/) of your template. According to REST APIs, editing a record means performing a PUT ajax to that resource (`/events/:id` in this case).
  - In Rails, add the [PUT route](http://guides.rubyonrails.org/routing.html) that points to an `update` action in the events controller. The controller's `update` action fetches the record (just like the `show` action) and then updates the record with the newly changed data.
  - In Ember, redirect the user to the saved event after the successful update.
  - Commit your changes with the message "Add edit events feature".

5) Notice how all the events in the home page share the same picture. Fix it so that each event has a different picture while still using [picsum.photos](https://picsum.photos/).
  - Make sure the event will always have the same picture.
  - Use `picsum.photos`'s website as guidance.
  - Commit your changes with the message "Fix images".

6) It's difficult for the users to tell which events have passed and which ones are upcoming. In order to help them, we're going to display the images of passed events as grayscale.
  - Learn how to request a grayscale image from [picsum.photos](https://picsum.photos/).
  - Create an Ember helper called `event-image` (or re-use the helper you created in exercise 5 if you did) that determines if the event has passed or not and returns the correct image URL accordingly.
  - Commit your changes with the message "Grayscale past events".

7) When you visit the page `http://localhost:4200/hourglass`, you will find an hourglass [GIF](https://en.wikipedia.org/wiki/GIF) animation. GIF animations are no longer the recommended way to animate on the web as they are of low quality and fps. Instead,
we are going to animate the hour glass using solely [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)s and
[CSS animations](https://developer.mozilla.org/en/docs/Web/CSS/animation). The
4 SVG images you will require to build the animation are found in the `public/assets/images/hour-glasses` directory.
Replace the GIF in `app/templates/hourglass.hbs` with the SVG images to animate them.

  Things to consider when working on it:

  - You can only use CSS (and the SVGs) to animate it.
  - You will need to work in the `app/styles/hour-glass.scss` stylesheet and the `app/templates/hourglass.hbs` template.
  - The animation needs to be infinite. Whenever it's done the hour glass needs to rotate and repeat (as seen in the GIF).
  - You will want to use [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  to fade in/out the different hour glasses and [CSS transforms](https://developer.mozilla.org/en/docs/Web/CSS/animation) to rotate it.
  - The animation happens as follows: `hour-glass-1` shows up, then fades away. Half-way through fading, `hour-glass-2` starts fading in.
  Same happens for the rest until the last hour glass is `hour-glass-1` rotated, where it rotates again to repeat the animation.
  - The total duration of one loop of the animation should be 3 seconds.

**The below exercises are puzzle questions that are not applied to the project we're working on.
You can use something like [JSBin](https://jsbin.com/) to test and execute the code of the below puzzles with if you want.**


<!-- 8) Given the code in the file `puzzles/mad-add.js`;

  The code should log the following text in the console:

  ```
  15
  13
  ```

  Things to look into when working on this:
  - JavaScript's `console.log` method
  - [Higher order functions](https://en.wikipedia.org/wiki/Higher-order_function)
  - The JavaScript[Spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
  - Look up Type Coercion in JavaScript and how it applies to functions or objects. -->

  <!-- Complete the code in the `madAdd` function in `puzzles/mad-add.js` and commit with the message "My add has gone mad".
  You can use [JSBin](https://jsbin.com/) to test and execute the code. -->

<!-- 9) Given the code in `puzzles/stand-in-line.js`:

  Please fill in the code inside the `standInLine` function such that the code would:

  - pause 5 seconds
  - log "5 seconds have passed"
  - pause 3 seconds
  - log "3 seconds have passed"
  - pause 4 seconds
  - log "4 seconds have passed"

  You'll want to look into:
  - JavaScript's `setTimeout`
  - [Higher order functions](https://en.wikipedia.org/wiki/Higher-order_function)
  - Look into currying in JavaScript

  Complete the `puzzles/stand-in-line.js` code and commit with the message "Async functions are now polite".
  You can use [JSBin](https://jsbin.com/) to test and execute the code. -->

<!-- 10) Given the code in the file `puzzles/whats-my-name.js`:

  What is the code inside the `person` object such that the executed code logs the following strings:

  ```
  Teddy
  Teddy
  Rami
  Rami
  ```

  While working on this you'll want to look into:

  - JavaScript's `console.log` method.
  - What is the value of `this` inside a JavaScript function.
  - Different ways to define properties and methods on JavaScript objects.

  Complete the code in `puzzles/whats-my-name.js` and commit your changes with the message "What's my name".
  You can use [JSBin](https://jsbin.com/) to test and execute the code. -->
