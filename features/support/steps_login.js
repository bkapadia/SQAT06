"use strict";

const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

Given('I go to figure1 login page', function( callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/login').then(function() {
      callback();
    })
})
When('I type invalid Username on login page', function(callback) {
  this.browser
    .waitForVisible('.login-page__email-input')
    .setValue('.login-page__email-input','abc')
    .setValue('.login-page__password-input','300923924')
    .click('.login-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see unsuccessful login result', function(callback) {
  this.browser
    .waitForVisible('.error-message-light')
    .getText('.error-message-light').then(function(result) { 
    result.should.equal("That email or password is incorrect");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter invalid Password on login page', function(callback) {
  this.browser
    .waitForVisible('.login-page__email-input')
    .setValue('.login-page__email-input','jessicashen66@gmail.com')
    .setValue('.login-page__password-input','300923923')
    .click('.login-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})
