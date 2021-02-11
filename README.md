# ThinkificWeather

## Notes
see WORKLOG.md or git
https://github.com/tsanjoto/ThinkificWeather

### Date
Feb 10 2021

### Location of deployed application
If applicable, please provide the url where we can find and interact with your running application.

http://54.161.202.156/
GET http://54.161.202.156/api/weather?city={cityName}&apiKey={apikey}

ya have to register for the api key for direct curl/postman or just you can just use the UI

### Time spent
Roughly 14 hours

### Assumptions made
Use this section to tell us about any assumptions that you made when creating your solution.

I made an assumption on one of the strectch goal. I assumed that the authentication to the service is both a user login/register + api key for directly calling the api. so.. UI Frontend --> this nodejs app --> openWeather. The nodejs app have 2 authentication system, the normal user login via jwt and an api key check.

I also assumed no email verification is neccesary for the strech goal on authentication service, since puttin up an email server for this might be an overkill (although its viable with my personal gmail to send it off)

### Shortcuts/Compromises made
If applicable. Did you do something that you feel could have been done better in a real-world application? 

Yes in real world scenario the api output responses would be standardized and so is the frontend section to process it. In this take home I just handle it manually.


### Stretch goals attempted
If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you
could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why.

Attempted all stretch goals although not ideal in a real life production

● I built simple UI for the service with angular + material
● Add authentication to the service, with mongodb + express, although no email validation on registration
● API is deployed on http://54.161.202.156/, so for this particular service http://54.161.202.156/api/weather?city=vancouver&apiKey={apikey} would do, although ya can generate the apikey when your register. I would add WCRBSFD9KNMJHMK101XBXVTV7QQ9 just incase.
● the nodejs app fetches openweather api from real data and used my own apikey to openwewather. its part of the .env variables thats not commited in the code. but the structure can be seen in .env.example


### Instructions to run assignment locally
If applicable, please provide us with the necessary instructions to run your solution.

might not necessarily applicable since its deployed, but you can run it locally

on a macbook or linux, install git, nvm, node, yarn
git clone 
https://github.com/tsanjoto/ThinkificWeather
use nodejs version v14.15.5 (might not work on other version)
copy the .env.example to .env, but supply your own MONGO_HOST, and OPEN_WEATHER_API_KEY
npm install / yarn install
npm start / yarn start


### What did you not include in your solution that you want us to know about?
Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.

I think starting off from a MEAN stack project helped alot on achieving the strech goals, by all means its not purely from me from scratch. I decided to use https://github.com/linnovate/mean, as a starting point for the project just as a base.

### Other information about your submission that you feel it's important that we know if applicable.
its important for you all to know that I had fun doing this! :)
git commits can be checked on the github link too.

### Your feedback on this technical challenge
Might be a little generic and open ended.
