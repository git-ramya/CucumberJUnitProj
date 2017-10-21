$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "To test Login functionality",
  "description": "",
  "id": "to-test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test login functionality",
  "description": "",
  "id": "to-test-login-functionality;test-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Login page in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cname\u003e\" and valid \"\u003cpswd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-test-login-functionality;test-login-functionality;",
  "rows": [
    {
      "cells": [
        "name",
        "pswd"
      ],
      "line": 10,
      "id": "to-test-login-functionality;test-login-functionality;;1"
    },
    {
      "cells": [
        "ramyag898@gmail.com",
        "ramya230$"
      ],
      "line": 11,
      "id": "to-test-login-functionality;test-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login functionality",
  "description": "",
  "id": "to-test-login-functionality;test-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Login page in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"ramyag898@gmail.com\" and valid \"ramya230$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});