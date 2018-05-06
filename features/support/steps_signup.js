"use strict";

const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

Given('I go to figure1 register page', function( callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})
When('I type invalid Username on sign up page', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input')
    .setValue('.register-page__username-input','abc')
    .setValue('.register-page__email-input','abc@gmail.com')
    .waitForVisible('.register-page__email-input')
    .setValue('.register-page__password-input','300923924')
    .waitForVisible('.register-page__confirm-password-input')
    .setValue('.register-page__confirm-password-input','300923924')
    .waitForVisible('.register-page__specialties-list')
    .addValue('.register-page__specialties-list', 'Physician')
    .addValue('.register-page__specialties-other-list', 'Anesthesiology')
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see unsuccessful sign up result', function(callback) {
  this.browser
    .waitForVisible('.invalid-field')
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("Username must be at least 4 characters long (accepts letters, numbers and dashes)");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter invalid Username on sign up page', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input')
    .setValue('.register-page__username-input','abc')
    .setValue('.register-page__email-input','abc@gmail.com')
    .waitForVisible('.register-page__email-input')
    .setValue('.register-page__password-input','300923924')
    .waitForVisible('.register-page__confirm-password-input')
    .setValue('.register-page__confirm-password-input','300923924')
    .waitForVisible('.register-page__specialties-list')
    .selectByIndex('.register-page__specialties-list', 1)
    .selectByIndex('.register-page__specialties-other-list', 2)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I type invalid Email Address on sign up page', function(callback) {
  this.browser
    .waitForVisible(".register-page__username-input")
    .setValue('.register-page__username-input','jessica')
    .waitForVisible('.register-page__email-input')
    .setValue('.register-page__email-input','jessica@gmail')
    .waitForVisible('.register-page__password-input')
    .setValue('.register-page__password-input','300923924')
    .waitForVisible('.register-page__confirm-password-input')
    .setValue('.register-page__confirm-password-input','300923924')
    .waitForVisible('.register-page__specialties-list')
    .selectByIndex('.register-page__specialties-list', 1)
    .selectByIndex('.register-page__specialties-other-list', 2)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see sign up is failed', function(callback) {
  this.browser
    .waitForVisible('.invalid-field')
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("That is not a valid email address");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I do not select the check box on sign up page', function(callback) {
  this.browser
    .waitForVisible(".register-page__username-input")
    .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
    .waitForVisible('.register-page__email-input')
    .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+"@gmail.com")
    .waitForVisible('.register-page__password-input')
    .setValue('.register-page__password-input','300923924')
    .waitForVisible('.register-page__confirm-password-input')
    .setValue('.register-page__confirm-password-input','300923924')
    .waitForVisible('.register-page__specialties-list')
    .selectByIndex('.register-page__specialties-list', 1)
    .selectByIndex('.register-page__specialties-other-list', 2)
    .scroll('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should not see sign up result', function(callback) {
  this.browser
    .waitForVisible('.invalid-field')
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("Must accept the Terms of Service");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I do not select the dropdown list on sign up page', function(callback) {
  this.browser
    .waitForVisible(".register-page__username-input")
    .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
    .waitForVisible('.register-page__email-input')
    .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+"@gmail.com")
    .waitForVisible('.register-page__password-input')
    .setValue('.register-page__password-input','300923924')
    .waitForVisible('.register-page__confirm-password-input')
    .setValue('.register-page__confirm-password-input','300923924')
    .waitForVisible('.register-page__specialties-list')
    .selectByIndex('.register-page__specialties-list', 1)
    .scroll('.box')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function() { 
     callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should not go to next page', function(callback) {
  this.browser
    .waitForVisible('.invalid-field')
    .getText('.invalid-field').then(function(result) { 
    result.should.equal("Please select a valid specialty");
     
     callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I input valid credentials on sign up page fields', function(callback) {
 this.browser
  .waitForVisible(".register-page__username-input")
  .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
  .waitForVisible('.register-page__email-input')
  .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+"@gmail.com")
  .waitForVisible('.register-page__password-input')
  .setValue('.register-page__password-input', '300923924')
  .waitForVisible('.register-page__confirm-password-input')
  .setValue('.register-page__confirm-password-input', '300923924')
  .waitForVisible('.register-page__specialties-list')
  .selectByIndex('.register-page__specialties-list', 1)
  .waitForVisible('.register-page__specialties-other-list')
  .selectByIndex('.register-page__specialties-other-list', 2)
  .waitForVisible('.register-page__terms-checkbox')
  .scroll('.register-page__terms-checkbox')
  .click('.register-page__terms-checkbox')
  .waitForVisible('.register-page__submit-button')
  .click('.register-page__submit-button')
  .then(function(){
    callback();
  }).catch(function(error){
  callback(error);
})
})
Then('I should see successful sign up result', function(callback) {
  this.browser
   .waitForVisible('.home-feed__share-case', 5000)
   .getText('.home-feed__share-case').then(function(result){
    result.should.equal("Have an interesting case to share?");
    callback();
  }).catch(function(error){
  callback(error);
})
})

When('I enter valid credentials on register page', function(callback) {
 this.browser
  .waitForVisible(".register-page__username-input")
  .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
  .waitForVisible('.register-page__email-input')
  .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+"@gmail.com")
  .waitForVisible('.register-page__password-input')
  .setValue('.register-page__password-input', '300923924')
  .waitForVisible('.register-page__confirm-password-input')
  .setValue('.register-page__confirm-password-input', '300923924')
  .waitForVisible('.register-page__specialties-list')
  .addValue('.register-page__specialties-list', 'Physician')
  .waitForVisible('.register-page__specialties-other-list')
  .addValue('.register-page__specialties-other-list', 'Anesthesiology')
  .waitForVisible('.register-page__terms-checkbox')
  .scroll('.register-page__terms-checkbox')
  .click('.register-page__terms-checkbox')
  .waitForVisible('.register-page__submit-button')
  .click('.register-page__submit-button')
  .then(function(){
    callback();
  }).catch(function(error){
  callback(error);
})
})
Then('I should sign up successful', function(callback) {
  this.browser
   .waitForVisible('.email-confirmation-intro', 5000)
   .isVisible('.email-confirmation-intro').then(function(result){
    result.should.to.be.true;
    callback();
  }).catch(function(error){
  callback(error);
})
})