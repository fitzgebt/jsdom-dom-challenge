

    // grab elements
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");

    const likeList = document.getElementsByClassName("likes");
    const commentList = document.getElementById("list");

    const commentForm = document.getElementById("comment-form");
    const commentText = document.getElementById("comment-input");
    const subButton = document.getElementById("submit");

    let pause = false;
    let count = 0;
    let counter = document.getElementById("counter");

    let likesObj = {};

    let timer = window.setInterval(function() {
        if(!pause) {
            count++;
            updateCounterDisplay();
        }
    }, 1000);


    function updateCounterDisplay(){
        counter.innerHTML = count;
    };
    
    function timedCount() {
        updateCounterDisplay();
    }
    
// Comment Section

const addNewComment = event => {
    event.preventDefault();

    const commentText = document.getElementById("comment-input");
    const addComment = document.createElement("li");
    addComment.innerText = commentText.value;

    appendNewComment(addComment);
    event.target.reset();
};

const appendNewComment = comment => {
    document.getElementById("list").appendChild(comment);
};

// likes section


const appendNewLike = like => {
    document.querySelector(".likes").appendChild(like);
};

const addNewLike = event => {
    if (likesObj[counter.innerText]) {
        const findLikeElement = document.getElementById(counter.innerText);
        let val = likesObj[counter.innerText] + 1
        likesObj[counter.innerText] = val;
        const likeText =  counter.innerText + " has been liked " + val + " times";
        findLikeElement.innerText = likeText;
    } else{ 
        const likeText =  counter.innerText + " has been liked 1 time";   
        const addLike = document.createElement("li")
        addLike.setAttribute("id", counter.innerText);
        addLike.innerText = likeText;
        appendNewLike(addLike);
        let name = counter.innerText;
        let val = 1;
        likesObj[name] = val;      
    }
}

// eventListeners

commentForm.addEventListener("submit", addNewComment);

heartButton.addEventListener("click", addNewLike);

pauseButton.addEventListener("click", () => {
    if (!pause) {
        pause = true;
    } else {
        pause = false
    }
});

 
minusButton.addEventListener("click", () => {
    count--;
    updateCounterDisplay()
});
    
plusButton.addEventListener("click", () => {
    count++;
    updateCounterDisplay()
});




