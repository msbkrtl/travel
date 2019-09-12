let bars=document.getElementById('bars');
let resnav=document.querySelector('.aaa');
let header=document.querySelector('header');
let clickcount=1;

bars.addEventListener('click', (e)=> {

    e.preventDefault();

    if (clickcount % 2==0) {
      resnav.classList.remove('ul-for-mobile');
      header.classList.remove('header-height-res');
    }

    else {
      setTimeout(()=> {
          resnav.classList.add('ul-for-mobile');
        }

        , 360);
      header.classList.add('header-height-res');
    }

    clickcount++;


  }

)