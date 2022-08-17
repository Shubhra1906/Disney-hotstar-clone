let movies = [
    {
        name: "Loki",
        des:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Iure perspiciatis fuga harum, magnam voluptatum quisquam!",
        
        image : "images/slide1.jpg"
    },
    {
        name: "American Horror stories",
        des:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Iure perspiciatis fuga harum, magnam voluptatum quisquam!",
        
        image : "images/slide2.jpg"
    },
    {
        name: "Raya and the last dragon",
        des:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Iure perspiciatis fuga harum, magnam voluptatum quisquam!",
        
        image : "images/slide3.jpg"
    },
    {
        name: "Wanda vision",
        des:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Iure perspiciatis fuga harum, magnam voluptatum quisquam!",
        
        image : "images/slide4.jpg"
    },
    {
        name: "Luca",
        des:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Iure perspiciatis fuga harum, magnam voluptatum quisquam!",
        
        image : "images/slide5.jpg"
    }
];

const carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex = 0;

const createSlide = () => {
        if (slideIndex >= movies.length) {
            slideIndex = 0;
        } 
        
        //create DOM elements
        let slide = document.createElement("div");
        var imgElement = document.createElement("img");
        let content = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");

        //attach all elements
       imgElement.appendChild(document.createTextNode(''));
       h1.appendChild(document.createTextNode(movies[slideIndex].name));
       p.appendChild(document.createTextNode(movies[slideIndex].des));
            content.appendChild(h1);
            content.appendChild(p);
            slide.appendChild(imgElement);
            carousel.appendChild(slide);

            //setting up the image
            imgElement.src=movies[slideIndex].image;
            slideIndex++;

            //setting element class name
            slide.className = "slider";
            content.className = "slide-content";
            h1.className = "movie-title";
            p.className = "movie-des";

            sliders.push(slide);

            if(slide.length){
                sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - 
                ${30 * (sliders.length - 2)} px)`;
              }
            }
 
            for(let i=0;i<3;i++){
                createSlide();
            }

            setInterval(() => {
            createSlide();
            }, 3000);

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach(item => {
    item.addEventListener("mousehover", ()=>{
        let video=item.children[1];
        video.play();
    });
    item.addEventListener("mouseLeave", ()=>{
        let video=item.children[1];
        video.pause();


});
});