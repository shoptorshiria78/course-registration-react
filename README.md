Ans1:3 Features of my project:
1. Here I have made 9 dynamic Course card with react.
2. Here I have added button to select the course I want to attend. and it will give a toast message if I add same course card again and again. 
3. And Someone cannot add courses anymore when the total credit hours will exceed 20 hours. A toast message will be shown there saying credit hour exceeds.

Ans2: Managing state in this project:

useState hook is used for storing data and to track the change of state for any kind of triggering. useState accept a initial state and return two values . One is the current state and another is a function that update the state. Here I have used useState several times to track my rendering. At first I used it for storing the fetched data as an array of objects in my project and used it to show them dynamically in the website. Then I used it again for tracking the changes of data or state when the select button is triggered. This time it is storing different types of numbers like price value, credit hour value. This state values are passed by props from one component to other for rendering the website. 