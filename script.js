const pointsArr = Array.from(document.querySelectorAll(".points"));
const scores = document.querySelectorAll(".score");
let sum1=0;
let sum2=0;

pointsArr.forEach(points=>{
    points.addEventListener("click",function(e){
        let point = e.target.innerText;
        let par = e.target.parentElement.parentElement;

        if(par.classList.contains("Home")){
            sum1+=parseInt(point);
            par.querySelector(".score").innerText=sum1;
        }
        else{
            sum2+=parseInt(point);
            par.querySelector(".score").innerText=sum2;
        }

        //--highlight the team which has high score
        highlightTeam();
        
    });
});

function highlightTeam(){
    console.log(scores);
    let homeScore = parseInt(scores[0].innerText);
    let guestScore = parseInt(scores[1].innerText);

    if(homeScore>guestScore){
        scores[0].previousElementSibling.classList.add("highlight");
        scores[1].previousElementSibling.classList.remove("highlight");
    }
    else{
        scores[1].previousElementSibling.classList.add("highlight");
        scores[0].previousElementSibling.classList.remove("highlight");
    }

    
}


//---------Implement the feature where the team which is winning will be Highlighted--------
