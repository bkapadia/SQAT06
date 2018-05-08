Feature: login 

     In order to login
     As a user
     I want to input my credentials to login Fingure1

     
    Scenario: invalid login with invalid Username 
    Given I go to figure1 login page 
    When  I type invalid Username on login page
    Then  I should see unsuccessful login result

    Scenario: invalid login with invalid Password
    Given I go to figure1 login page 
    When  I enter invalid Password on login page
    Then  I should see unsuccessful login result

    Scenario: Valid login 
    Given I go to figure1 login page 
    When  I enter valid Username and Password on login page
    Then  I should see successful login 