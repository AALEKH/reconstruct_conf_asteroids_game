# reconstruct_conf_asteroids_game
This is an attempt to restart my development journey that I haven't worked on for quite many days(ok many months or more), with direct practise from:  https://www.apress.com/gp/book/9781484232514


# Some Notes on HTML

* <!doctype html> is used for specifying that we are using HTML 5
* Style allows us to control how the content of the browser looks like when it is rendered by the browser
* The difference between var and let is that var is defined over the scope of a function whereas let has scope over the corresponding block
* A script tag cannot import a library using script tag and at the same time have function inside(whether called or defined) inside its body, so it is advicable to first import script tag inside head tag and call the function after html page has loaded inside script tag.
* Interesting point about quadraticCurveTo function is mentioned here: https://www.w3schools.com/tags/canvas_quadraticcurveto.asp
* Bit of trignometry here when building spaceship we'll consider them to be kind of circular so asteroid to spaceship collision will be circle to circle circumference collision; further using radius "r" angle (theta) as x = r*cos(theta) and y = r*sin(theta).
* Using above mentioned point we'll want to create our ship to fill as a circle as completely as possible.