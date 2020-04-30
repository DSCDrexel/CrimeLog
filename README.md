# CrimeLog
This project is part of Developer Student Club Drexel University. It is aimed at keeping students safe making hard-to-find crime statistics easily accessible. 

## The Problem:
Philadelphia consistently ranks above the national average in terms of crime, especially violent offenses. Students moving to off-campus housing are often clueless about crime occurring in areas around their house. With over 180 incidents listed in Drexel’s crime log from 01/25/2020 to 03/25/2020 (just 2 months), it’s clear that this is an issue. Drexel (like many universities) only sends alerts to all students in the case of a crime that would be immediately dangerous. This leaves many incidents reported but hard for students to find.  If a student was mugged, but did not report the incident until the next day, the crime would be recorded but the student body would not need to be notified via alert. Currently, there are public safety officers and Drexel alerts available for students to keep them up to date on Drexel campus yet many students don’t know what to do with the overwhelming amount of information. If students were able to easily view where crime occurs on Drexel campus, they could avoid areas with many incidents and keep themselves safe.

## The solution:
All universities are required to post crime logs online, which can be scraped to get necessary information. We will make a website integrating Google Maps API with these crime logs to pinpoint crime hotspots so students can easily identify areas to avoid. The application will be both desktop and mobile friendly so students can easily view this on their phone or sign up for alerts of crimes within a 5 mile radius of their current location. By gathering information from the crime logs of several universities, we will be able to display information for all of Philadelphia or eventually show information for other cities.


## Tech Stack
We are using React on frontend along with Redux.

## To Run:
Clone the repository:

`cd frontend`

`npm install`

`npm run start`

The application should run at ::
[http://localhost:3000/#/](http://localhost:3000/#/)
