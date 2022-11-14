// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("number", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      const fibLength1 = 6
      const fibLength2 = 10
    expect(number(fibLength1)).map("1, 1, 2, 3, 5, 8")
    expect(number(fibLength2)).map("1, 1, 2, 3, 5, 8, 13, 21, 34, 55")
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// const number =(array) =>{
//     if(array.number > 2){
//         return number-1 + number -2
//     }
    
// }

const number =(array) =>{
for (let i = 1; i <= array.length; i++)
return array =>{
}
}

// Create a function that takes in a number as an arguement greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence
// Create a variable called number that takes in number
// Use dot notation map
// Use length built in method to take in the 
// // I googled the fibonacci sequence and found on javascript how to input the logicalExpression. When doing this problem, thats the only that occured. 
// The problem wasnt the function its in the test
// I was truly confused on the question until i googled what that actually is

TypeError: expect(...).indexOf is not a function. This is the

FAIL  ./code-challenges.test.js
number
  ✕ returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

● number › returns an array that length containing the numbers of the Fibonacci sequence

  TypeError: expect(...).indexOf is not a function

    21 |         const fibLength1 = 6
    22 |         const fibLength2 = 10
  > 23 |       expect(number(fibLength1)).indexOf("1, 1, 2, 3, 5, 8")
       |                                  ^
    24 |       expect(number(fibLength2)).indexOf("1, 1, 2, 3, 5, 8, 13, 21, 34, 55")
    25 |     })
    26 |   })

    at Object.indexOf (code-challenges.test.js:23:34)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.343 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values



// a) Create a test with expect statements for each of the variables provided.


// Create a function that takes takes sort the objects values from least to greatest. 
// Create a new variable that takes in the object
// Use the .sort to sort the values in the array
// Return the array with just the values sorted from least the greatest. 

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

const material = studyMinutesWeek1.sort((value)) =>{
return value.map
}
 
// I keep gettin synthax error. All around the same as this one. 
// I used the objects part of the syllabus and google, and the reference provided above. 
// SyntaxError: /Users/learnacademy/golf/weeklyassessments/week-3-assessment-cibrown94/code-challenges.test.js: 'return' outside of function. (35:0)

// 33 |
// 34 | const material = studyMinutesWeek1.filter((value))
// > 35 | return value.map
//    | ^
// 36 |
// 37 |  
// 38 |   



// b) Create the function that makes the test pass.

describe("object", () => {
      it("returns an array of the values sorted from least to greatest.", () => {
          const studyMinutesWeek1 = 
            {sunday: '90',
            monday: '30',
            tuesday: '20',
            wednesday: '15',
            thursday: '30',
            friday: '15',
            saturday: '60'}
          const studyMinutesWeek2 = 
          {sunday: '100',
            monday: '10',
            tuesday: '45',
            wednesday: '60',
            thursday: '20',
            friday: '15',
            saturday: '65'}
        expect(studyMinutesWeek1(value)).map([15, 15, 20, 30, 30, 60, 90]) 
        expect(studyMinutesWeek2(value)).map([10, 15, 20, 45, 60, 65, 100])
      })
    })
  
    ReferenceError: value is not defined


    const expected = { name:'component name' }
    const actual = { name: 'component name', type: 'form' }
    expect(actual).toMatchObject(expected)

    ReferenceError: value is not defined
This is the format i used for jest and objectTypeSpreadProperty. 




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

describe("account", () => {
  it("an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
    expect(account(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(account(accountTransactions2)).toEqual([250, -89, 100, -96])
    expect(account(accountTransactions3)).toEqual([])
  })
})

const accounts = (array) => array.map((sum => value => sum += value)(0))

const accounts =(array) =>{
accountTransactions1.array.forEach(num, index => {
  if(index === 0){
    out [index] = num;
  } else{
    output[index]= num + output[index -1]
  }
return array
  }
  
// Create a function, that takes in a array,
// create a new variable called accounts and return the first index of the number subtracted by the second index and so on
// Use the .map to return a new array
// create logic that access every items in the index
// I took me a second to understand the question itself

https://www.tutorialspoint.com/converting-array-of-numbers-to-cumulative-sum-array-in-javascript