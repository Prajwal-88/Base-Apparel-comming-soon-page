const submitbtn = document.querySelector("#submit-btn");
const errortxt=document.querySelector("#error-txt");
const error_icn=document.querySelector("#icon-error");
const email_txt=document.querySelector("#text-sec");


const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

submitbtn.addEventListener('click',()=>{
    
    if(email_txt.value.match(emailRegEx)){
        error_icn.classList.add('hidden');
        errortxt.classList.add('hidden');
        email_txt.classList.remove('border-Soft_Red')

    }else{
        error_icn.classList.remove('hidden');
        errortxt.classList.remove('hidden');
        email_txt.classList.add('border-Soft_Red')
    }
})

