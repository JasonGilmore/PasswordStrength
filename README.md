# PasswordStrength
A simple JavaScript library to check the strength of passwords.
## Why PasswordStrength?
Complex password rules make remembering passwords difficult or make users create passwords that are simple and easy to guess. New research (some of which can be found [here](https://pages.nist.gov/800-63-3/sp800-63b.html)) has shown the need to rethink password requirements. This library is a step in this direction.  

PasswordStrength analyses the strength of a password by giving it a score out of 6. This is based on several different factors, but **primarily the length of a password**. The use of uppercase letters, numbers and symbols can award a higher score, but this is diminishing as the password length increases (as a longer password gives more score). This scoring system pushes users towards using passphrases which are easier to remember, reduce the chance of a dictionary attack succeeding and greatly reduce the chance of a brute force attack succeeding.  

Please note that this library is designed to be used on the front end, providing the user with feedback as to the strength of their password when creating an account or updating their password.
## Getting Started
To use PasswordStrength in your application, simply download the PasswordScore.js file, import it into your project and call the `passwordScore(password)` function, ensuring to pass the password to test as the parameter.  

This library also comes with some html code to demonstrate its use. Simply download the PasswordScore.js and index.html files to the same directory, and open the html file in your browser.
## License
This library is licensed under the GNU General Public License v3.0, which can be found [here](https://github.com/JasonGilmore/PasswordStrength/blob/master/LICENSE).
