(function() {
// **메인 배너 hover이벤트**

    const mainLi = document.querySelectorAll('.main-li');
    

    function mouseoutHandler(e){
        e.preventDefault();
        for(let i= 0; i < mainLi.length; i++){
        mainLi[i].classList.remove('on');
        }
        mainLi[1].classList.add('on');
    } 

    function mouseoverHandler(e){
        e.preventDefault();
        for(let i= 0; i < mainLi.length; i++){
        mainLi[i].classList.remove('on');
        }
        this.classList.add('on');
    } 
    
    for(let i= 0; i < mainLi.length; i++){
    mainLi[i].addEventListener ('mouseover', mouseoverHandler);
    mainLi[i].addEventListener ('mouseleave', mouseoutHandler);
    }
    }) (); 

// ** section2 슬라이드 이벤트**
const teaSlideUl = document.querySelector('.tea-slide-ul');
const teaSlideLi = document.querySelectorAll('.tea-slide-li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0; 

// console.log(document.querySelector('.tea-slide-li').offsetWidth);


//슬라이드 움직이는 함수
//idx랑 리스트 길이가 같으면 멈춘다. 
function goToSlide(idx) {
    if(idx < 0 || teaSlideLi.length - 2 === idx){
        return;
    }
    else {
        const teaSlideLiWidth = document.querySelector('.tea-slide-li').offsetWidth;

        currentIndex = idx;
    
        for(let i = 0;  i < teaSlideLi.length; i++ ){
            teaSlideLi[i].style.transform = `translateX(${currentIndex * -teaSlideLiWidth}px)`;
        }
    }
}

// nextBtn 눌렀을때 할일
function nextBtnHandler(e){
    goToSlide(currentIndex +1);
}

//prevBtn 눌렀을 때 
function prevBtnHandler(e){
    goToSlide(currentIndex -1);
}




nextBtn.addEventListener('click',nextBtnHandler);
prevBtn.addEventListener('click',prevBtnHandler);






















// $(function(){
//     let s1 = 0;
//     let s2 = 0;
//     let s3 = 0;
//     let s4 = 0;
//     slide_move1();
//     function slide_move1(){
//         s1 = 1;
//         s2 = 0;
//         s3 = 0;
//         s4 = 0;

//         $('.slide').animate({'left':'0'},500);
//     }
//     function slide_move2(){
//         s1 = 0;
//         s2 = 1;
//         s3 = 0;
//         s4 = 0;
//         $('.slide').animate({'left':'-330px'},500);
//     }
//     function slide_move3(){
//         s1 = 0;
//         s2 = 0;
//         s3 = 1;
//         s4 = 0;
//         $('.slide').animate({'left':'-660px'},500);
//     }
//     function slide_move4(){
//         s1 = 0;
//         s2 = 0;
//         s3 = 0;
//         s4 = 1;
//         $('.slide').animate({'left':'-990px'},500);
//     }

//     $('.left').click(function(e){
//         e.preventDefault();
//         if(s1 == 1){
//             slide_move4();
//         }else if(s2 == 1){
//             slide_move1();
//         }else if(s3 == 1){
//             slide_move2();
//         }else if(s4 == 1){
//             slide_move3();
//         }
//     });
//     $('.right').click(function(e){
//         e.preventDefault();
//         if(s1 == 1){
//             slide_move2();
//         }else if(s2 == 1){
//             slide_move3();
//         }else if(s3 == 1){
//             slide_move4();
//         }else if(s4 == 1){
//             slide_move1();
//         }
//     });
// //e.slide

// let nav = 1;

// $('.menu_bar').click(function(e){
//     e.preventDefault();
//     if(nav==1){
//         $('.nav').animate({'width':'61%'},500);
//         $('.top, .bottom').fadeOut(500);
//         $('.middle1, .middle3').addClass('on');

//         nav =0;
//     } else if(nav==0){
//         $('.nav').animate({'width':0},500);
//         $('.top, .bottom').fadeIn(500);
//         $('.middle1, .middle3').removeClass('on');
//         nav=1;
//     }
    
// });
//})