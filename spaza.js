class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand =''
        this.currentOperand =''
        this.operation = undefined

    }
    delete(){
     this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return    
    this.currentOperand = this.currentOperand.toString() + number.tostring()
    }
    chooseOperation(operation){
     if (this.currentOperand === '') return
     if (this.previousOperand !== ''){
         this.compute()
     }      
     this.operation = operation
     this.previousOperand = this.currentOperand
     this.currentOperand =''
    }
    getDisplayNumber(number)
    compute(){
    let compuation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return 
     switch (this.operation){
         case '+':
         compuation = prev + current
         break
      case '-':
         compuation = prev - current
         break
      case '*':
         compuation = prev * current
         break
      case '/':
         compuation = prev / current
         break
         default:
         return
        }
        this.currentOperand = compuation
        this.operation = undefined
        this.previousOperand = ''
    }
    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
   if (this.operation != null) {
      this.previousOperandTextElement.innerText =
      `&{this.previousOperand}&{this.operation}`
      }
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-number]')
const equalsButtons = document.querySelector('[data-equal]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-nallClear]')
const dataPreviousOperandTextElement = document.querySelector('[data-previous-operand]')
const dataCurrentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator =  new calculator (currentOperandTextElement ,previousOperandTextElement)

numberButtons.forEach(Button => {
    button.addEvenListener('click', () => {
     calaculator.appendNumber(button.innerText)
     calculator.updateDisplay()   
    })
    
})
operationButtons.forEach(Button => {
    button.addEvenListener('click', () => {
     calaculator.chooseOperation(button.innerText)
     calculator.updateDisplay()   
    })
    
})

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})