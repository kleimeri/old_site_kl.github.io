let btn = document.querySelector('#btn_dark_mode') 
let class_html = document.querySelector('.dark-mode')
btn.addEventListener('click',()=>{
     if( class_html.classList.contains === ('dark')){
          class_html.classList.remove('dark')
     }
     else{
          class_html.classList.toggle('dark')
     }
})