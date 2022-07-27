const menuBtn=document.querySelector('.menu-icon');
const closeMenu=document.querySelector('.close-menu');
const slideBtns=document.querySelectorAll('.navigator >div');

const articlesContainer= document.querySelector('.second-articles-wrapper .articles');
const imagesContainer= document.querySelector('.images-wrapper .images');

const menuContent=document.querySelector('nav .content');

const margin = {
    images: 0,
    articles:200,
};


function slideContent(btn){
    
    if( btn.classList.contains('right') ){

        if( margin.articles == 0 && margin.images == 200){
            margin.articles = 200;
            margin.images = 0;
        }else{
            margin.articles -= 100;
            margin.images += 100;
        }

    }else{

        if( margin.articles == 200 && margin.images == 0){
            margin.articles = 0;
            margin.images = 200;
        }
        else{
            margin.articles += 100;
            margin.images -= 100;
        }

    }

    imagesContainer.style.marginLeft=`-${margin.images}%`;
    articlesContainer.style.marginLeft=`-${margin.articles}%`;

}

slideBtns.forEach((el)=>{
    el.addEventListener('click', ()=>{
        slideContent(el)
        console.log(margin
            )
    })
})


menuBtn.addEventListener('click',()=>{
    menuContent.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    menuContent.classList.remove('active');
})