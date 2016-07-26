# Feed Reader Testing

#### Created by: John Laine

## Description
A project created and submitted to Udacity as part of the Front End Developer Nanodegree Program. This project demonstrates my ability to use the Jasmine framework for behavior-driven development.

## Running the Application
1. Clone the project to your local machine: `https://github.com/johnlaine1/udacity-fend-feedreader`
2. cd into the project `cd udacity-fend-feedreader`
3. Run the index.html file.
4. A live version of this project can be viewed at: `https://johnlaine1.github.io/udacity-fend-feadreader/`

## Tests
1. RSS Feeds
   1. contain a URL and URL is not empty
      1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
   2. contain a name and name is not empty
      1. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. 
2. Menu
   1. is hidden by default
      1. A test that ensures the menu element is hidden by default.  
   2. changes visibility when the menu icon is clicked
      1. A test that ensures the menu changes visibility when the menu icon is clicked.  
3. Initial Entries
   1. exist and display
      1. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. 
4. New Feed Selection
   1. content changes when new feed loads
      1. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. 

