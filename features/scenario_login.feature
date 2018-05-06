Feature: login 

     In order to login
     As a user
     I want to input with valid credentials 

     
    Scenario: invalid login 1 
    Given I go to figure1 login page 
    When  I type invalid Username on login page
    Then  I should see unsuccessful login result

    Scenario: invalid login 2
    Given I go to figure1 login page 
    When  I enter invalid Password on login page
    Then  I should see unsuccessful login result
