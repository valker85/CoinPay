const pay_with = document.querySelector('.btns-wrapper').children
const copyLinkButton = document.querySelector('.copy-link-button')
const copyInput = document.querySelector('.copy-link-input')

// let btcButnFlag = true

copyLinkButton.addEventListener('click', ()=>{
    copyInput.select()
    navigator.clipboard.writeText(copyInput.value)
})


for (const btn of pay_with) {
    btn.addEventListener('click', (event)=>btnsActive(event))
}

function btnsActive(event){
    for (const btn of pay_with) {
        btn.classList.remove('active')            
    }
    // btcButnFlag = !btcButnFlag
    event.target.classList.add('active')
}