// ======================= 01 =========================
function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').innerText = dateTimeString;
}
window.onload = displayDateTime; 


// ======================= 02 =========================
function greetUser() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName + " " + lastName;
    var greetingMessage = "Hello, " + fullName + "!";
    document.getElementById('greeting').innerText = greetingMessage;
}


// ======================= 03 =========================
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    document.getElementById('result').innerText = "The sum is: " + sum;
}


// ======================= 04 =========================
function calculate(num1, num2, operator) {
    var result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = "Invalid operator!";
    }
    return result;
}

function performCalculation() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operator = prompt("Enter the operator (+, -, *, /):");
    var result = calculate(num1, num2, operator);
    document.getElementById('result2').innerText = "The result is: " + result;
}


// ======================= 05 =========================
function square(number) {
    return number * number;
}

function performSquare() {
    var num = parseFloat(prompt("Enter a number to square:"));
    var result = square(num);
    document.getElementById('result3').innerText = "The square of " + num + " is: " + result;
}


// ======================= 06 =========================
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function computeFactorial() {
    var num = parseInt(prompt("Enter a number to compute its factorial:"));
    if (isNaN(num) || num < 0) {
        document.getElementById('result4').innerText = "Please enter a valid non-negative integer.";
    } else {
        var result = factorial(num);
        document.getElementById('result4').innerText = "The factorial of " + num + " is: " + result;
    }
}


// ======================= 07 =========================
function displayCounting(start, end) {
    var counting = "";
    for (var i = start; i <= end; i++) {
        counting += i + " ";
    }
    return counting;
}

function performCounting() {
    var start = parseInt(prompt("Enter the start number:"));
    var end = parseInt(prompt("Enter the end number:"));
    if (isNaN(start) || isNaN(end) || start > end) {
        document.getElementById('result5').innerText = "Please enter valid start and end numbers, and ensure that start is less than or equal to end.";
    } else {
        var result = displayCounting(start, end);
        document.getElementById('result5').innerText = "Counting from " + start + " to " + end + ": " + result;
    }
}


// ======================= 08 =========================
function calculateHypotenuse() {
    function calculateSquare(number) {
        return number * number;
    }

    var base = parseFloat(prompt("Enter the base of the triangle:"));
    var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

    if (isNaN(base) || isNaN(perpendicular) || base <= 0 || perpendicular <= 0) {
        document.getElementById('result6').innerText = "Please enter valid positive numbers for base and perpendicular.";
    } else {
        var baseSquare = calculateSquare(base);
        var perpendicularSquare = calculateSquare(perpendicular);
        var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
        document.getElementById('result6').innerText = "The hypotenuse of the triangle is: " + hypotenuse.toFixed(2);
    }
}


// ======================= 09 =========================
// Arguments as Value 
function calculateAreaValue(width, height) {
        return width * height;
    }

    function displayAreaValue() {
        var width = parseFloat(prompt("Enter the width of the rectangle:"));
        var height = parseFloat(prompt("Enter the height of the rectangle:"));

        if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
            document.getElementById('resultValue').innerText = "Please enter valid positive numbers for width and height.";
        } else {
            var area = calculateAreaValue(width, height);
            document.getElementById('resultValue').innerText = "The area of the rectangle is: " + area;
        }
    }
// Arguments as Variables
function calculateAreaVariables(width, height) {
    return width * height;
}

function displayAreaVariables() {
    var width = parseFloat(prompt("Enter the width of the rectangle:"));
    var height = parseFloat(prompt("Enter the height of the rectangle:"));

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        document.getElementById('resultVariables').innerText = "Please enter valid positive numbers for width and height.";
    } else {
        var area = calculateAreaVariables(width, height);
        document.getElementById('resultVariables').innerText = "The area of the rectangle is: " + area;
    }
}


// ======================= 10 =========================
function isPalindrome(str) {
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

function checkPalindrome() {
    var inputStr = prompt("Enter a string to check if it's a palindrome:");
    if (inputStr === null || inputStr.trim() === "") {
        document.getElementById('result7').innerText = "Please enter a valid string.";
    } else {
        var result = isPalindrome(inputStr);
        document.getElementById('result7').innerText = result ? 
            "'" + inputStr + "' is a palindrome." : 
            "'" + inputStr + "' is not a palindrome.";
    }
}


// ======================= 11 =========================
function capitalizeWords(str) {
    var words = str.split(' ');
    var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
}

function performCapitalization() {
    var inputStr = prompt("Enter a string to capitalize the first letter of each word:");
    if (inputStr === null || inputStr.trim() === "") {
        document.getElementById('result8').innerText = "Please enter a valid string.";
    } else {
        var result = capitalizeWords(inputStr);
        document.getElementById('result8').innerText = "Capitalized String: " + result;
    }
}


// ======================= 12 =========================
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = words.reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    }, "");
    return longestWord;
}

function performLongestWordSearch() {
    var inputStr = prompt("Enter a string to find the longest word:");
    if (inputStr === null || inputStr.trim() === "") {
        document.getElementById('result9').innerText = "Please enter a valid string.";
    } else {
        var result = findLongestWord(inputStr);
        document.getElementById('result9').innerText = "The longest word is: " + result;
    }
}


// ======================= 13 =========================
function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

function performCount() {
    var inputStr = prompt("Enter a string:");
    var letter = prompt("Enter the letter to count:");

    if (inputStr === null || inputStr.trim() === "" || letter === null || letter.length !== 1) {
        document.getElementById('result10').innerText = "Please enter a valid string and a single letter.";
    } else {
        var result = countLetterOccurrences(inputStr, letter);
        document.getElementById('result10').innerText = "The letter '" + letter + "' occurs " + result + " times in the string.";
    }
}


// ======================= 14 =========================
 function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference.toFixed(2);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return "The area is " + area.toFixed(2);
}

function performCalculations() {
    var radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('result11').innerText = "Please enter a valid positive number for the radius.";
    } else {
        var circumferenceResult = calcCircumference(radius);
        var areaResult = calcArea(radius);
        document.getElementById('result11').innerText = circumferenceResult + "\n" + areaResult;
    }
}

// ------ X ----- X ----- X ----- X -------