# CananolabClientNew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development test mode:
- Set TEST_MODE = true in assets/configuration
  - Add test data to TestData in src/app/testData.ts
    - In the TestData object, add an entry which matches the name from its corresponding rest-call  in Consts src/app/constants.ts.

-  Other test related `TODO`    
   - Will soon have DEV mode which will bypass logging in
     - Still need to get logging in working first

### TODO
-[ ] Update pre commit check script
-[X] Login
-[X] Rest calls - after login

### Constants, Properties, and Configuration
- assets/properties.ts
  - values used by multiple component,services and/or classes
  - Some values (defaults) in the properties.ts file can be over-ridden in the assets/configuration file 
- assets/configuration.  
  - These values can be changed on the server (unlike assets/properties.ts), does not require a server restart
- constants
  - constant values for rest calls
  - other stuff I can't remember right now...  
