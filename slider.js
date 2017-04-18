


$(document).ready(function(){
	var slide1 = $("<div class=\"slide slide-1 hidden\"></div>").attr("id", "1");
	var slide2 = $("<div class=\"slide slide-2 hidden\"></div>").attr("id", "2");
    var slide3 = $("<div class=\"slide slide-3 hidden\"></div>").attr("id", "3");
    var slide4 = $("<div class=\"slide slide-4 hidden\"></div>").attr("id", "4");
    var dotSlideMap = {
        "dot1": "1",
        "dot2": "2",
        "dot3": "3",
        "dot4": "4"
    }  
    var currentSlide = slide1;
    var currentSlideId = Number(currentSlide.attr("id"));
    var currentDot = $(".dot"+currentSlideId);
    var timer;

    $(".slider").append(slide1, slide2, slide3, slide4);
    currentSlide.show();
    currentDot.addClass("dot-full");

    var findPrevious = function(){
        if(currentSlideId == 1){
        	currentSlideId = 4;
        }
        else {currentSlideId--;}
    };

    var findNext = function(){
        if(currentSlideId == 4){
        	currentSlideId = 1;
        }
        else{ currentSlideId++;}
    };

    var hideSlide = function(){
        $("#"+currentSlideId).hide();
        $(".dot"+currentSlideId).removeClass("dot-full");
    };

    var showSlide = function(){
        $("#"+currentSlideId).fadeIn("slow");  
        $(".dot"+currentSlideId).addClass("dot-full");
    };

    function slideLoop(){
        hideSlide();
        findNext();
        showSlide();
        timer = setTimeout(slideLoop, 3000);

        $(".previous").click(function(){
        clearTimeout(timer);
        hideSlide();
        findPrevious();
        showSlide();
        //slideLoop();
        timer = setTimeout(slideLoop, 3000);
    });

    $(".next").click(function(){
        clearTimeout(timer);
        hideSlide();
        findNext();
        showSlide();
        slideLoop();
        timer = setTimeout(slideLoop, 3000);
    });

    $(".nav-dots").click(function(event){
        clearTimeout(timer);
        var dot = $(event.target).attr("class");
        var slideId = dotSlideMap[dot];
        if (slideId && slideId != currentSlideId){
            hideSlide();
            currentSlideId = slideId;
            showSlide();
        };
        //slideLoop();
        timer = setTimeout(slideLoop, 3000);
    });
    };
    slideLoop();
    //var timer = setTimeout(slideLoop,3000);

    

    
    
})