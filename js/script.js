// document.getElementById();
const logById = document.getElementById("logById")
logById.addEventListener("click", function() {
  const logByIdEl = document.getElementById("triangle")
  console.log(triangle)
})

// document.getElementsByClassName(); (getting an array)
const logByClassName = document.getElementById("logByClassName")
logByClassName.addEventListener("click", function() {
  const logByClassNameEls = document.getElementsByClassName("rectangle")
  console.log(logByClassNameEls)
})

// document.getElementsByClassName(); (log distinct elements from an array)
const logByClassNameDisinct = document.getElementById("logByClassNameDisinct")
logByClassNameDisinct.addEventListener("click", function() {
  const logByClassNameEls = document.getElementsByClassName("rectangle")

  for (let i = 0; i < logByClassNameEls.length; i++) {
    console.log(logByClassNameEls[i])
  }
})

// document.getElementsByTagName(); (getting an array)
const logByTagName = document.getElementById("logByTagName")
logByTagName.addEventListener("click", function() {
  const logByTagNameEl = document.getElementsByTagName("pentagon")
  console.log(logByTagNameEl)
})

// document.getElementsByTagName(); (log distinct tags from an array)
const logByTagNameDistinct = document.getElementById("logByTagNameDistinct")
logByTagNameDistinct.addEventListener("click", function() {
  const logByTagNameDistinctEl = document.getElementsByTagName("pentagon")
  console.log(logByTagNameDistinctEl[0])
})

// document.querySelector(); (selecting a class)
const logQuerySelectorClass = document.getElementById("logQuerySelectorClass")
logQuerySelectorClass.addEventListener("click", function() {
  const logQuerySelectorClassEl = document.querySelector(".hexagon")
  console.log(logQuerySelectorClassEl)
})

// document.querySelector(); (selecting an id)
const logQuerySelectorId = document.getElementById("logQuerySelectorId")
logQuerySelectorId.addEventListener("click", function() {
  const logQuerySelectorIdEl = document.querySelector("#hexagon")
  console.log(logQuerySelectorIdEl)
})

// document.querySelector(); (selecting a tag)
const logQuerySelectorTagName = document.getElementById("logQuerySelectorTagName")
logQuerySelectorTagName.addEventListener("click", function() {
  const logQuerySelectorTagNameEl = document.querySelector("hexagon")
  console.log(logQuerySelectorTagNameEl)
})

// document.querySelector(); (selecting an element by it's class inside another)
const logQuerySelectorNested = document.getElementById("logQuerySelectorNested")
logQuerySelectorNested.addEventListener("click", function() {
  const logQuerySelectorNestedEl = document.querySelector(".container .circle")
  console.log(logQuerySelectorNestedEl)
})

// document.querySelector(); (selecting an element by it's class inside another version 2)
const logQuerySelectorNestedVers2 = document.getElementById("logQuerySelectorNestedVers2")
logQuerySelectorNestedVers2.addEventListener("click", function() {
  const logQuerySelectorNestedVers2FirstEl = document.querySelector(".container")
  const logQuerySelectorNestedVers2SecondEl = logQuerySelectorNestedVers2FirstEl.querySelector(".circle"); 
  console.log(logQuerySelectorNestedVers2SecondEl)
})

// document.querySelectorAll(); (selecting multiple tags)
const logQuerySelectorAllTagNames = document.getElementById("logQuerySelectorAllTagNames")
logQuerySelectorAllTagNames.addEventListener("click", function() {
  const logQuerySelectorAllTagNamesEl = document.querySelectorAll("septagon")
  console.log(logQuerySelectorAllTagNamesEl)
})

// document.querySelectorAll(); (adding eventlistener error)
const logEventListenerError = document.getElementById("logEventListenerError")
logEventListenerError.addEventListener("click", function() {
  const logEventListenerErrorEl = document.querySelectorAll("septagon")
  logEventListenerErrorEl.addEventListener("click", windowAlert)
})

function windowAlert() {
  alert("Hallo Welt");
};

// clear console buttons
const clearConsoleBtns = document.getElementsByClassName("clear");

for (let i = 0; i < clearConsoleBtns.length; i++) {
  clearConsoleBtns[i].addEventListener("click", () => {
    console.clear()
  });
};




// const copyTest = document.getElementById("copyTest")
// console.log(copyTest.innerHTML)


// const codeBoxes = document.getElementsByTagName("code")
// for (i = 0; i < codeBoxes.length; i++) {
//   let copyBtn = document.createElement("button")
//   copyBtn.textContent = "hi"
//   codeBoxes[i].insertAdjacentElement("beforeend", copyBtn)
// }


// (function () {
//   var old = console.log;
//   var logger = document.getElementById('log');
//   console.log = function () {
//     for (var i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] == 'object') {
//           logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
//       } else {
//           logger.innerHTML += arguments[i] + '<br />';
//       }
//     }
//   }
// })();