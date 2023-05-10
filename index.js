const buttons=document.querySelectorAll('.rate');
const ratePage=document.querySelector('.rate-page');
const thankYouPage=document.querySelector('.thankyou-page');
const submitBtn=document.querySelector('.submit-btn');
const selectedNumber=document.getElementById('selected-number');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        buttons.forEach((ratebutton)=>{
            ratebutton.classList.remove('clicked-rate');
        })
        button.classList.add('clicked-rate');
    })
})
thankYouPage.style.display='none';

submitBtn.addEventListener('click',()=>{
    const clickedBtn=document.querySelector('.clicked-rate');
    if(clickedBtn===null){
        alert("Pleae choose a rating.");
    }
    else{
        ratePage.style.display='none';
        thankYouPage.style.display='block';
        selectedNumber.textContent=clickedBtn.value;
    }

})