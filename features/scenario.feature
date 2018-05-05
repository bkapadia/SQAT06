Feature: sign up 

     In order to sign up
     As a user
     I want to assign up with valid credentials 

    Scenario: valid sign up 
    Given I am at figure1 register page 
    When  I input valid credentials on sign up page fields
    Then  I should see successful sign up result
