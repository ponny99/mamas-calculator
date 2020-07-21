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

    }
    appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return    
    this.currentOperand = this.currentOperand.toString() + number.tostring
    }
    chooseOperation(operation){
     this.operation = operation
     this.previousOperand = this.currentOperand
     this.currentOperand =''
    }
    compute(){
    let computer
    const prev = parseFalse(this.previousOperand)
    const current = parseFalse(this.currentOperand)
    if (isNaN(FloatNumber)) return ''
     return floatNumber.toLocalString('en')
    }
    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand
    
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-number]')
const equalsButtons = document.querySelector('[data-equal]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-nallClear]')
const dataPreviousOperandTextElement = document.querySelector('[data-previous-operand]')
const dataCurrentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator =  new calculator (currentOperandTextElement ,previousOperandTextElement  )

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