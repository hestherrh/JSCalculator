function calc () {
  let num1 = Number(prompt('Enter a number'));
  let operation = (prompt('Enter Operation'));
  let num2 = Number(prompt('Enter a number'));

  if (operation == '+') {
    const res = num1 + num2 
    return alert(`The result is ${res}`)
  } else if (operation == "-") {
    const res = num1 -  num2
    return alert(`The result is ${res}`)
  } 
   else if (operation == "*") {
    const res = num1 *  num2
    return alert(`The result is ${res}`)
  } 
   else if (operation == "%") {
    const res = num1 %  num2
    return alert(`The result is ${res}`)
  } 
   else if (operation == "/") {
    const res = num1 /  num2
    return alert(`The result is ${res}`)
  } else {
     return alert('The operation is invalid')
  } 
} 

calc ()