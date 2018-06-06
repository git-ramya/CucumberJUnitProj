Feature: To test Login functionality

  @tag1
  Scenario Outline: Test login functionality
    Given Open Login page in browser
    When I enter valid "<name>" and valid "<pswd>"
    Then user should be able to login successfully

    Examples: 
      | name                | pswd      |
      | ramyag898@gmail.com | ......... |
