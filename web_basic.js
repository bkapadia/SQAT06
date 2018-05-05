"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible(".register-page__username-input")
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
    .waitForVisible(".register-page__email-input")
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+"@gmail.com")
    .waitForVisible(".register-page__password-input")
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__password-input', '300923924')
    .waitForVisible(".register-page__confirm-password-input")
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__confirm-password-input', '300923924')
    .waitForVisible(".register-page__specialties-list")
    .catch(function(err){
        console.log(err)
    })
    .addValue('.register-page__specialties-list', 'Physician')
    .waitForVisible(".register-page__specialties-other-list")
    .catch(function(err){
        console.log(err)
    })
    .addValue('.register-page__specialties-other-list', 'Anesthesiology')
    .waitForVisible(".register-page__terms-checkbox")
    .catch(function(err){
        console.log(err)
    })
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .waitForVisible(".register-page__submit-button")
    .catch(function(err){
        console.log(err)
    })
    .click('.register-page__submit-button')
    .catch(function(err){
        console.log(err)
    })
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    //.end();
