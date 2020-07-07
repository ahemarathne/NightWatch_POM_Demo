


module.exports = {

    
   
    before: function(browser){
        const pgLinkedin = browser.page.LinkedIn();
        pgLinkedin.openBrowser();
    },

    '@tags': ['LinkedIn'],
    'Linked In Login' : function(browser){
        const pgLinkedin = browser.page.LinkedIn();
        pgLinkedin
            .clickSignIn()
            .assert.titleContains('LinkedIn Login, Sign in | LinkedIn')
            .signInWithCredentials('absgec@wwq.com','12hswhb');

            browser.expect.element('#profile-nav-item > div').to.be.present;
            
    },


    
    after : function(browser){
        browser.pause(5000);
        browser.end();
    }

};
