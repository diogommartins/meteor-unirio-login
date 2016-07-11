// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by unirio-login-client.js.
import { name as packageName } from "meteor/unirio-login";

// Write your tests here!
// Here is an example.
Tinytest.add('unirio-login - example', function (test) {
  test.equal(packageName, "unirio-login");
    
});
