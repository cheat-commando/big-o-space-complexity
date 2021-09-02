
// 1) -------------------------------------------------------
function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
  }
}

// Q: Given an array of numbers, what is the space complexity of this function?
// ANSWER: O(n)


// 2) You are challenged to find the 4th element of the array, and you came up with this solution:

function findFourth(numbers) {
  var count = 1
  var answer = 0

  for (let i = 0; i < numbers.length; i++) {
      if (count === 4) {
          answer = numbers[i]
          return
      } else {
          count += 1
      }
  }
}

// Q: Given an array of numbers, what is the space complexity of this function?
// ANSWER: O(1)


// 3) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the space complexity of this function?
// ANSWER: O(1)


// 4) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the space complexity of the function?
// ANSWER: O(n)


// 5) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the space complexity of the function?
// ANSWER: O(n^2)


// 6) -------------------------------------------------------
function nested(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(j)
    }
  }
}

// Q: What is the space complexity of this function?
// ANSWER: O(n^2)


// 7) -------------------------------------------------------
let numbers = [76,35,73,13,4,88,23,12,86,1,54,9,10,2]
// remember numbers could be reassigned, added to, etc.
let newNumbersA = numbers.filter((num) => {
  return num < 5
})

// Q: What is the space complexity of the filter higher-order function?
// ANSWER: O(n)


// 8) -------------------------------------------------------
// remember numbers (in #7) could be reassigned, added to, etc.
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the space complexity of the map higher-order function?
// ANSWER: O(n)


// 9) -------------------------------------------------------
// This function takes in parentArr which is an array of arrays
// It will only ever have 2 levels of arrays (the child arrays can't have array children)
// ex: [[1,2,3], ['a','b','c'], [5,null,'x',0]]
// NOT: [[1,2,3], ['a', ['an', 'invalid', '(grand)child', 'array], 'b', 'c'], [6,7,8,9,10]]
function arrInception(parentArr) {
  for (let i = 0; i < parentArr.length; i++) {
    let childArr = parentArr[i]
    for (let j = 0; j < childArr.length; j++) {
      console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
    }
  }
}
// Q: What is the space complexity of this function?
// ANSWER: O(n^2)


// 10) You are challenged to find the squared value of each number in an array. This is not the best solution, but it is what you come up with anyway...

function getNumbersSquared(numbers) {
  let numbers2 = [...numbers]

  let answers = []

  for (let i = 0; i < numbers.length; i++) {
    let squaredValue = numbers[i] * numbers2[i]
    answers.push(squaredValue)
  }
  return answers
}

// Q: What is the space complexity of this function?
// ANSWER: O(n)


// Q: Is it possible to improve this function's space complexity? If it is, write a new function below.
// ANSWER: I don't think this changes the complexity; it's still O(n).

function getNumbersSquaredBetter(numbers) {
  return numbers.map(elem => elem ** 2)
}


// 11) Here are two functions that you came up with to count how many of each letter is in a given string and return an object with the individual counts: 

function countLetters(str) {
  let letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  str = str.toLowerCase()
  const splitStr = str.split('')

  splitStr.forEach(char => {
    if (letters.hasOwnProperty(char)) {
      letters[char]++
    }
  })

  return letters
}

/////////////////////////////

function countLettersRoundTwo(str) {
  // this contains a RegEx or Regular Expression, feel free to google
  str = str.toLowerCase().replace(/([^a-z])+/g,'')
  let letters = {}
  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++
    } else {
      letters[str[i]] = 1 // This should be 1, so I changed it.
    }
  }
  return letters
}


// Q: Do these functions have the same space complexity?
// ANSWER: yes, techinically they do, but the second one is still better.


// Q: What is the space complexity of each? 
// ANSWER - countLetters: O(n)
// ANSWER - countLettersRoundTwo: O(n)


// Q: Explain how you came to your conclusions about the space complexity of each function. 
// ANSWER: While the first one has a constant sized object, it creates an array that has just as many elements as characters as the inital string, so O(n)
//         The second function has a better way of created the returned object, but in line 189, it still uses up space that is dependent on the length of the initial string, so 0(n).


// 12) Memoization
/*
  Without looking up memoization examples on
  the internet, let's write a method in a class 
  that memoizes results.

  Create a class called Factorial 

  We'll be calculating factorials in this class 
    - factorial is a number multiplied by all the numbers 
      below it besides 0
    - so the factorial of 4 is 24, which is 4*3*2*1

  Inside the class, create a constructor function 
    - the constructor shouldn't take in any params
    - it should initialize this.cache which should
      be an empty object

  In the class, write a method called calcFac
    - the function should take in a num as an argument 
    - it should check if an answer for this input exists
      in the cache object already 
        - if it does, return that answer 
    - otherwise:
        - create an answer variable
        - create a loop that will perform the necessary multiplication
        - set the answer to a new property on the cache obj 
        - return the answer
*/

// CODE HERE 

class Factorial {
  constructor() {
    this.cache = {}
  }
  calcFac = function (num) {
    if (this.cache[num]) {
      return this.cache[num]
    } else {
      let answer = num
      for (let i = num-1; i >= 1; i--) {
        answer *= i
      }
      this.cache[num] = answer
      return answer
    }
  }
}


/* 
  We want to test a non-memoized version of this too, 
  so copy and paste your calcFac function and save it 
  to this new function called noCacheCalcFac
  (psst...don't forget to uncomment it and remove
  references to the cache)
*/

function noCacheCalcFac(num) {
  let answer = num
  for (let i = num-1; i >= 1; i--) {
    answer *= i
  }
  return answer
}

/*
  The logs below will show you how long these functions
  take to run, fill out the CAPITALIZED PARTS before
  running this file 
  (run using 'node index.js' in the terminal)
*/

const myFac = new Factorial // CREATE A NEW INSTANCE OF THE FACTORIAL CLASS

console.time("not memoized factorial");
console.log(noCacheCalcFac(8))
console.log(noCacheCalcFac(8))
console.log(noCacheCalcFac(8))
console.log(noCacheCalcFac(8))
console.timeEnd("not memoized factorial");

console.time("memoized factorial");
console.log(myFac.calcFac(8))
console.log(myFac.calcFac(8))
console.log(myFac.calcFac(8))
console.log(myFac.calcFac(8))
console.timeEnd("memoized factorial");

// 13) Memoization Challenge
/*
  Write another class that contains a cache and a method 

  The method should cache answers

  The method should be constant (you can use examples 
  we've covered or come up with your own)
*/

// CODE HERE
// Recaman's Sequence: 	Recamán's sequence (or Recaman's sequence): a(0) = 0; for n > 0, a(n) = a(n-1) - n if nonnegative and not already in the sequence, otherwise a(n) = a(n-1) + n.

class Another {
  constructor() {
    this.cache = { '0' : 0 }
  }
  recaman = function(num) {
    if (this.cache[num] || this.cache[num] === 0) {
      return this.cache[num]
    }
    const previous = this.recaman(num - 1)
    let previously = false
    for (let done in this.cache) {
      if (this.cache[done] === previous - num) {
        previously = true
        break
      }
    }
    if (previous - num > 0 && !previously) {
      return this.cache[num] = previous - num
    } else {
      return this.cache[num] = previous + num
    }
  }
}

/*
    Copy and paste the method outside the class and
    save it to a new variable (and take out references
    to the cache)
*/

// CODE HERE 

// So this is a pretty bizarre sequence that I found online. It's call the Recaman Sequence. I had to use a cache for it to work because part of its logic is that it checks if a certain number already exists in the sequence. BUT the cache for it does clear out after each iteration, and it DOES take longer than the method I wrote which uses memoization.
// More on the Recaman Sequence here: https://en.wikipedia.org/wiki/Recam%C3%A1n%27s_sequence

function recamanDude(num1){
  const recamanDudeList = {}

  function recamanSmall(num) {
    if (num === 0) {
      return 0
    }
    const previous = recamanSmall(num - 1)
    let previously = false
    for (let done in recamanDudeList) {
      if (recamanDudeList[done] === previous - num) {
        previously = true
        break
      }
    }
    if (previous - num > 0 && !previously) {
      return recamanDudeList[num] = previous - num
    } else {
      return recamanDudeList[num] = previous + num
    }
  }
  return recamanSmall(num1)
}

/*
    Before you see how much time they take, make a 
    guess as to if one will be faster.
*/

// ANSWER: The memoized method will be faster than the function.

// Now fill this out and run your file

// CREATE A NEW INSTANCE OF YOUR CLASS

const igloo = new Another()

console.time("not memoized function time");
console.log(recamanDude(2000))
console.log(recamanDude(2000))
console.log(recamanDude(2000))
console.log(recamanDude(2000))
console.timeEnd("not memoized function time");

console.time("memoized function time");
console.log(igloo.recaman(2000))
console.log(igloo.recaman(2000))
console.log(igloo.recaman(2000))
console.log(igloo.recaman(2000))
console.timeEnd("memoized function time");