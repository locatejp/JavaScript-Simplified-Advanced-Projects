import Calculator from './Calculator.js'
const calculator = new Calculator()
console.log({ calculator })
setOutput()
// SET UP EVENT LISTENERS
document.addEventListener('click', (e) => {
  const target = e.target
  const innerText = target.innerText
  console.log(target)
  if (target.matches('[data-all-clear]')) {
    calculator.clear()
  }
  if (target.matches('[data-delete]')) {
    calculator.delete()
  }
  if (target.matches('[data-operation]')) {
    calculator.operation(innerText)
  }
  if (target.matches('[data-number]')) {
    calculator.number(innerText)
  }
  if (target.matches('[data-decimal]')) {
    calculator.decimal()
  }
  if (target.matches('[data-equals]')) {
    calculator.equals()
  }
  setOutput()
})

function setOutput() {
  const { primaryOutput, secondaryOutput, enteredOperation } = calculator
  const primaryOperandEl = document.querySelector('.primary-operand')
  const secondaryOperandEl = document.querySelector('.secondary-operand')
  const operationEl = document.querySelector('[data-operation]')
  if (primaryOutput != null) primaryOperandEl.innerText = primaryOutput
  if (secondaryOutput != null) secondaryOperandEl.innerText = secondaryOutput
  if (enteredOperation != null) operationEl.innerText = enteredOperation
}
