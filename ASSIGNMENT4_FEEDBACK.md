Hola Shiela!

This is great, I really like the subject matter and you did a great job!

I've left a few comments about cddoe style in the relevant files, please take a look. As you can see below you've almost ticked all the boxes. THere's a few things I'd like you to fix up, but they are relatively minor - just doing what you are already doing in a different way.

But since most things are perfect I'm happy tp say you have earned a VG grade! Please try to fix the two things listed below and if you want me to I can have another look, but its clear you know what you are doing so there is no need to resubmit.

Congratulations! It's great to see what you have accomplished in this course, yoou should be proud.


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Connect to an API ✅

User fired event to launch the fetch ❌
  Needs a button or somesuch that calls the API; at the moment the API is called on page load. You could have a button for each of the 3 API calls. A button that when clicked calls getPlanets() etc

Data is returned and handled efficiently ✅
  Really well done!

Display more than one property of the returned data ✅
  
RWD
  Desktop ✅
  Mobile ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Error handling when fetching the data ✅

Append arguments to the request ❌ ✅
  Almost. What I want to see is one base url then 'concatenating' it with JS - ie adding words to a base url.
  Because all 3 fetches use the same base URL this is quick fix: 

     const BASE_API = "https://swapi.py4e.com/api/";
     const PLANETS = "planets"
     const STARSHIPS = "starships"

     fetch(BASE_API + PLANETS) ...

     fetch(BASE_API + STARSHIPS) ...


Multiple calls to the API ✅

Code style ✅
  A few empty spaces but you id a great job.
  +1 for organising all the files, really easy to find things