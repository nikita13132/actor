$(document).ready(function(){
    $(".main__blue__button").click(function(){
        $(".hide, .wdth__800, wdth__600, wdth__400").toggleClass("visible");
        if($('.hide').hasClass('visible')){
            document.getElementById("reverse").innerHTML = "менше";
        }else{
            document.getElementById("reverse").innerHTML = "ще";
        }
    });
    const lazyImages = document.querySelectorAll('img[data-src]');
    const windowHeight = document.documentElement.clientHeight;
    let lazyImagesPositions = [];
    if(lazyImages.length > 0){
        lazyImages.forEach(img => {
            if(img.dataset.src){
                lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
                lazyScrollChek();
            }
        });
    };

    window.addEventListener("scroll", lazyScroll);

    function lazyScroll(){
        if(document.querySelectorAll('img[data-src]').length>0){
            lazyScrollChek();
        }
    }

    function lazyScrollChek(){
        let imgIndex = lazyImagesPositions.findIndex(
            item => pageYOffset > item - windowHeight
        );
        if(imgIndex >=0){
            if(lazyImages[imgIndex].dataset.src){
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            }
            delete lazyImagesPositions[imgIndex];
        }
    }


    console.log(lazyImagesPositions);
});