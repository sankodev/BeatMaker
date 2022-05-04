window.addEventListener("load", () => {
    const beats = document.querySelectorAll(".beat");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#f19407"
    ];

    // sound starts here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            //needs to draw respetive beat for click
            beats[index].currentTime = 0;
            beats[index].play;

            //passes index
            createBubbles(index);
        });
    });

    //create a function that adds bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});

//pulling the beats from the library
//console.log(beats);