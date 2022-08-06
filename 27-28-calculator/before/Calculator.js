export default class Calculator {
  constructor() {
    this.primaryOutput = 0
    this.secondaryOutput = ''
    this.enteredOperation = ''
  }
  clear() {
    this.primaryOutput = 0
    this.secondaryOutput = ''
    this.enteredOperation = ''
  }
  delete() {
    this.primaryOutput = this.primaryOutput.toString().slice(0, -1)
  }
  operation(operation) {
    if (!this.secondaryOutput) {
      this.secondaryOutput = this.primaryOutput
      this.primaryOutput = 0
    }
    this.enteredOperation = operation
  }
  number(clickedNumber) {
    if (this.primaryOutput.toString().length > 9) {
      return
    }
    const withNumberAdded = this.primaryOutput + clickedNumber
    this.primaryOutput =
      this.primaryOutput === 0 ? clickedNumber : withNumberAdded
  }
  decimal() {
    if (!this.primaryOutput.toString().includes('.')) {
      this.primaryOutput += '.'
    }
  }
  equals() {
    if (
      !this.primaryOutput ||
      !this.secondaryOutput ||
      !this.enteredOperation
    ) {
      return
    }
    const operatorFn = this.getOpName(this.enteredOperation)
    const a = parseFloat(this.secondaryOutput)
    const b = parseFloat(this.primaryOutput)
    const result = parseFloat(this[operatorFn](a, b))
    console.log({ result })
    this.primaryOutput = result
    this.secondaryOutput = ''
    this.enteredOperation = ''
  }
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }
  getOpName(clickedOp) {
    switch (clickedOp) {
      case '+':
        return 'add'
      case '-':
        return 'subtract'
      case '*':
        return 'multiply'
      case '÷':
        return 'divide'
      default:
        return null
    }
  }
}
