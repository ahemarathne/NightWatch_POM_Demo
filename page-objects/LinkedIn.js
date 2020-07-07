module.exports = {
    url : 'https://lk.linkedin.com/',
    elements : {
        signInButton : {
            selector : 'body > nav > a.nav__button-secondary'
        },
        userName : {
            selector : '#username'
        },
        passWord : {
            selector : '#password'
        },

        loginButton : {
            selector : '#app__container > main > div:nth-child(2) > form > div.login__form_action_container > button'
        }
    },
    commands : [{
        openBrowser(){
            return this
                 .navigate()
                 .waitForElementVisible('body',2000);
        },

        clickSignIn(){
            return this
                .click('@signInButton');
                

        },

        signInWithCredentials(usrName, pssWord){
            return this
                .setValue('@userName',usrName)
                .setValue('@passWord',pssWord)
                .click('@loginButton');
        }
    }]
}