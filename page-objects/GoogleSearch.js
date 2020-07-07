module.exports = {
    url : 'http://www.google.com',
    elements : {
        searchBox : {
            selector : '#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'
        },
        searchButton : {
            selector : '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b'
        },
        linkedInPage : {
            selector : '#rso > div:nth-child(1) > div > div > div.r > a > h3'
        }
    },
    commands : [{
        openBrowser(){
            return this
                 .navigate()
                 .waitForElementVisible('body',2000);
        },

        doSearch(searchkey){
            return this
                .setValue('@searchBox',searchkey)
                .click('@searchButton');
                

        },

        goToLinkedin(){
            return this
                .click('@linkedInPage');
        }
    }]
}