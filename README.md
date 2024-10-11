Learning Goals
Import a JS file in our HTML
Implement JS declarations

Getting Started
Fork and clone this lesson into your local environment. Navigate into its directory in the terminal, then run code . to open the files in Visual Studio Code.

CODE ALONG
This lesson is set up as a code-along, so you'll first need to fork and clone it to your local environment.

Quick Review:

1. Click the Octocat icon in the upper right of this page. This will bring you to GitHub. Click the Fork button. Verify that your GitHub username is showing in the Owner dropdown, then click the Create fork button.

2. Once your fork is created, click the Code button in GitHub, make sure SSH is selected, and copy the provided git URL info.

3. Make sure you're in Development/code/phase-1 (or wherever you're storing your code for the course) and clone the repo to your local machine with git clone followed by the git URL you copied.

4. creat 3 files
   1:student.js
   2:speed detector.js
   3:netsalary.js

Running the Tests
Start by installing the test dependencies by running npm install in the terminal, then run npm test to run the tests. You should now see the current status of the tests in the terminal. For the moment, all of the tests fail. Let's figure out how to get one of them passing! (The rest will be up to you.)

Continue to work through the problems below. Keep in mind the general workflow for a lab:

Run npm test.
Read the errors; vocalize what they're asking you to do.
Write code; repeat steps 1 and 2 often until a test passes.
Repeat as needed until all the tests are passing.


Working Through the Problems
If you open up test/indexTest.js, you will see the tasks in front of you:

companyName — Inside the test/indexTest.js file, look at the describe function call for the companyName variable. The two it function calls inside this describe tell us the features of companyName we need to create. To review, in the first it function call, it says that it (companyName) is set as Scuber. In the next line, you can see that the test checks to make sure this occurs by seeing if companyName equals Scuber. So this means that you need to go to your index.js file and declare a variable named companyName and set it equal to Scuber.
In the second it function call for companyName, it says it is defined as a const. The next line of code tests this. So you need to make sure that you are using the correct type of variable declaration such that attempting to reassign the variable throws an error.
mostProfitableNeighborhood and companyCeo — Here we are getting more practice with declaring variables. Read the tests to see how you need to code these two variables to get the remaining tests passing.

Submitting Your Work to Canvas
Once you've got all the tests passing, it's time to push your completed code up to GitHub and submit it to Canvas using CodeGrade. We'll do a quick review of how to do that below, but you may want to review the full process in the Completing and Submitting Assignments with CodeGrade lesson. You'll be going through this process for every lab you do in this program!

Let's review the process. First, you need to "stage" your changes using the git add command:

$ git add index.js
or

$ git add .
Recall that the . shortcut will stage all files that have changes. In this case there's only one so either command will work.

Next, you need to "commit" your changes, which basically saves a record of the changes you've made. Don't forget to use the -m flag and include a commit message! Use the message shown below or choose your own:

$ git commit -m "complete lab"
Finally, push your changes up to your GitHub account (your fork of this lab):

$ git push
If you go back to your repo in GitHub and refresh the page, you should now see a new commit with your commit message.

The final step is to submit your work to Canvas:

Scroll to the bottom of this lesson page in Canvas and click the button labeled "Load Review: Variables Lab in a new window".
In the CodeGrade window that opens, click "Create Submission". You should now see a list of your repositories.
Find the repo for this lab and click Connect.
When you get the message that your repo has been connected, click on the embedded link, then the "AutoTest" tab to watch your progress. Once the tests have finished running, you should see the green checkmark in the "Pass" column, indicating that you've successfully completed the lab.
