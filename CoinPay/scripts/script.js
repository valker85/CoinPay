const arrow = document.querySelector('.arrow')
const balanceBtn = document.querySelector('.balance')
const coinValueBtn = document.querySelector('.coin_value')
const allInfoArr = [arrow, balanceBtn, coinValueBtn]
const allInfo = document.querySelector('.all-info')

const scanCopyBtns = document.querySelector('.btns-wrapper').children
const scanContent = document.querySelector('.scan_content')

const copyContent = document.querySelector('.copy_content')
const copyLinkBtns = document.querySelectorAll('.copy-link-button')
const amountInputCopy = document.querySelector('.amount_copy-link-input')
const paymentInputCopy = document.querySelector('.payment_copy-link-input')

let allInfoOpen = false
let scanOpened = true

// all info and arrow
allInfoArr.map( btn => (
    btn.addEventListener('click', ()=>{
        allInfoOpen = !allInfoOpen
        if(allInfoOpen){
            allInfo.classList.add('active')
            arrow.classList.add('active')
        } else{
            arrow.classList.remove('active')
            allInfo.classList.remove('active')
        }
    })
))
// ///////////////////

// scan and copy buttons and content
for (const btn of scanCopyBtns) {
    btn.addEventListener('click', (event)=>btnsActive(event))
}

function btnsActive(event){
    for (const btn of scanCopyBtns) {
        btn.classList.remove('active')            
    }
    // scan and copy content
    openContent(scanOpened = !scanOpened)
    // //////////////////////
    event.target.classList.add('active')
}
    
function openContent() {
    if(scanOpened){
        scanContent.classList.add('active')
        copyContent.classList.remove('active')
    } else {
        scanContent.classList.remove('active')
        copyContent.classList.add('active')
    }
}
// //////////////////////

// copy inputs value
copyLinkBtns.forEach( copyBtn => {
    copyBtn.addEventListener('click', (event)=>{
        if(event.target.getAttribute('copyInput') === 'amount'){
            amountInputCopy.select()
            navigator.clipboard.writeText(amountInputCopy.value)
        } else if(event.target.getAttribute('copyInput') === 'payment') {
            paymentInputCopy.select()
            navigator.clipboard.writeText(paymentInputCopy.value)
        }
    })
})
// //////////////////////