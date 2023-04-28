# bigelow-social-network-API

## Description

This object of this project was to build a social network API that would allow users to share their thoughts, react to friends’ thoughts, and create a friend list. In terms of my own personal learning aims, it served to give me a rudimentary understanding of MongoDB and how to use it. 

## Installation

To install this application, you can clone the repo to your device. To install the necessary dependencies, open the integrated terminal and type run the command `npm install`. Then run the command `node server.js`. Now you are ready to use the app.

## Usage

Since this app does not have a front-end, you will need to run it in Insomnia. After you have installed the dependencies and run the command `node server.js` in the integrated terminal, the terminal will display the message `App listening on port: 3001`. Now the app is ready to be tested in Insomnia. 

Since there is no seed data, the first thing to do will be to add a user via a POST route. Enter a set of JSON data like so: 

`{
    "username": "Usernamey",
    "email": "eemailington@email.com"
}`

When you click the "POST" button, the data should appear in the preview. This process can be repeated to produce additional users. 

## Credits

This app was created with the help of instructor Alexander Kaufman and TAs Zac Warner and 

## License

MIT License

Copyright (c) 2023 Ira Bigelow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

This social network API app has the following capabilities, in theory. Users can:
-Share their thoughts
-Add friends
-Delete friends
-React to friends' thoughts

## Tests

First, when you run the command `npm install`, the dependencies should install with no complications. Next, when you run the command `node server.js`, the terminal should display the message `App listening on port: 3001`. The remainder of the tests will be conducted in Insomnia. 

When you open the app in Insomnia and navigate to the post route for Users, insert a set of JSON data including a username and email. When you click the POST button, the preview should display the data you just entered. Repeat this process again in order to test the ability to retrieve all users and single users. 

You can test the post route for Thoughts in a similar manner. 