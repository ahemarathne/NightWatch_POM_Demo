


module.exports = {

    
   
    before: function(browser){
        const Google = browser.page.GoogleSearch();
        Google.openBrowser();
    },

    '@tags': ['GoogleSearch'],
    'Search Google' : function(browser){
        const Google = browser.page.GoogleSearch();
        Google
            .doSearch('linkedin')
            .assert.titleContains('linkedin')
            .goToLinkedin()
            .assert.titleContains('LinkedIn Sri Lanka: Log In or Sign Up');
    },


    
    after : function(browser){
        browser.pause(5000);
        browser.end();
    }

};
