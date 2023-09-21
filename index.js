const successBtn=document.querySelector('.success')
const errorBtn=document.querySelector('.error')
const invalidBtn=document.querySelector('.invalid')
const toastBox=document.querySelector('#toastBox')

successBtn.addEventListener('click',showSnackBar)
errorBtn.addEventListener('click',showSnackBar)
invalidBtn.addEventListener('click',showSnackBar)


function showSnackBar(e){
  const createDiv=document.createElement('div')
  
  createDiv.classList.add('toast')
  console.log(e.target.className)
  if(e.target.className==='success'){
    createDiv.classList.add('successToast')
    createDiv.innerHTML=" <i class='fa-solid fa-circle-check'></i> Successfully submitted"
  }else if(e.target.className==='error'){
    createDiv.classList.add('errorToast')
    createDiv.innerHTML="<i class='fa-solid fa-circle-xmark'></i> Please fix the error!"
  }else if(e.target.className==='invalid'){
    createDiv.classList.add('invalidToast')
    createDiv.innerHTML='<i class="fa-solid fa-circle-exclamation"></i>Invalid input,check again'
  }
  toastBox.appendChild(createDiv)

  setTimeout(()=>{
    createDiv.remove()
  },6000)
}