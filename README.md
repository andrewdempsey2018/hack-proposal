### We're excited to announce our upcoming Hackathon!

Participating teams will be tasked with implementing a sorting algorithm using HTML, CSS and JavaScript. To guide their efforts, each team will receive an example project to serve as a foundation for their solution. Teams will be able to work in half hour sprints over the course of a week before presenting their project. Judging will be based on code quality, implementation and presentation. Some example projects include Insertion Sort, Selection Sort, Bubble Sort...

### The example project

Presented here is a straightforward HTML page complemented by CSS styling and a JavaScript file. The content is intentionally kept basic, serving as a foundation for teams to build upon. Within the JavaScript file, you'll find a single function dedicated to performing Bubble Sort.

#### index.html

The HTML file defines the structure of the web page. It includes an input field, button, and an area to display results.

#### styles.css

The CSS file contains styling rules that define the appearance of elements on the web page. This can be left as is or, if you have time, you could research some CSS and change the appearece of your project.

#### script.js

The JavaScript file contains the logic to handle user interactions and perform actions on the web page. It defines two functions: 'getInput' and 'bubbleSort'.

The getInput function is triggered when a button (identified by the "button" ID) is clicked. It retrieves input from an input field (identified by the "input" ID), processes it (splitting by commas and converting to integers), performs the bubble sort algorithm on the input, and displays the sorted result in an area with the ID "result".

The bubbleSort function implements the bubble sort algorithm (described below) to sort an array of numbers.

Additionally, there are statements outside the functions to set an initial message in the result area ("waiting for your input...") and to add an event listener to the button, so that when it is clicked, the getInput function is executed.

#### Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

The bubbleSort function takes an array 'arr' as input and returns the sorted array. It starts by getting the length of the input array and storing it in the 'len' variable. Then, it begins iterating over the array using a nested loop:

The outer loop (for (let i = 0; i < len; i++)) controls the number of passes through the array. It ensures that after each pass, the largest element "bubbles up" to its correct position.

The inner loop (for (let j = 0; j < len - 1 - i; j++)) iterates over the elements of the array.

Inside the inner loop, it compares adjacent elements (arr[j] and arr[j + 1]):
If arr[j] is greater than arr[j + 1], it means they are in the wrong order, so it swaps them.

This swapping process continues until the largest element in the unsorted portion of the array "bubbles up" to its correct position at the end of the array. After completing all passes, the array is sorted, and the function returns the sorted array.

### Sample team brief

Hackathon Team Brief: Bubble Sort Implementation

Objective:
Your team's objective is to implement the bubble sort algorithm. 

Background:
Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

Task:
Your team is responsible for writing a functional bubble sort algorithm. The algorithm should be able to sort a given array of integers in ascending order.

Requirements:

* Implement the bubble sort algorithm efficiently and correctly.
* Ensure that the algorithm can handle arrays of various sizes.
* Test the algorithm with different input arrays to verify its correctness.

Deliverables:

* Working code that implements the bubble sort algorithm.
* Brief presentation detailing how your solution works.

Timeline:
You should arrange no more than three team meetings, lasting no longer than 30 mins each. You should discuss you solution before implmenting it as a team before the deadline of X.

Good luck!

#### Other algorithms similar to Bubble Sort

Insertion Sort, Selection Sort, Gnome Sort, Cocktail Shaker Sort, Comb Sort, Odd-Even Sort, Cycle Sort, Stooge Sort, Pancake Sort, Shell Sort