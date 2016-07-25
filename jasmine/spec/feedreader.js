/* global expect allFeeds loadFeed $ */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through each feed in the allFeeds object and ensures it has 
         * a URL defined and that the URL is not empty.
         */
         it('contain a URL and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }); 
         });


        /* Loop through each feed in the allFeeds object and ensures it has 
         * a name defined and that the name is not empty.
         */
         it('contain a name and it is not empty', function() {
            allFeeds.forEach(function(feed) {
               expect(feed.name).toBeDefined();
               expect(feed.name).not.toBe('');
            }); 
         });
    });

    describe('The menu', function() {
       
        /* Ensure that the menu element is hidden by default. */
        it('is hidden by default', function() {
            var menuIsHidden = $('body').hasClass('menu-hidden');
            
            expect(menuIsHidden).toBe(true);
        });
        
         /* Ensure that the menu changes visibility when the menu icon is 
          * clicked.
          */
         it('changes visibility when the menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            var body = $('body');
            
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });
      
        /* Ensure that when the loadFeed function is called and completes its 
         * work, there is at least a single .entry element within the .feed 
         * container.
         */
         it('exist and display', function() {
            var feedEntries = $('.feed .entry');
            
            expect(feedEntries.length).toBeGreaterThan(0);
         });
    });

    describe('New Feed Selection', function() {
        var $initialFeed, $subFeed;
        
        // Call loadFeed and wait for the results before proceeding.
        beforeEach(function(done) {
            loadFeed(0, function() {
                $initialFeed = $('.feed .entry');
                done();   
            }); 
        });
        
        // Call loadFeed again for another feed and wait for results.
        beforeEach(function(done) {
            loadFeed(1, function() {
                $subFeed = $('.feed .entry');
                done();
            });
        });
        
        /* Ensure that when a new feed is loaded by the loadFeed function 
         * that the content actually changes.
         */
         it('content changes when new feed loads', function() {
            expect($initialFeed.html()).not.toEqual($subFeed.html());
         });
    });
    

         
}());
