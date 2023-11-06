// create button element
let button = document.createElement("button");
button.innerText = "Randomize Color!";

// add button to document
document.body.append(button);

// create function to randomize color of webpage
let randomizePageColor = () => {
    let red = Math.floor((Math.random() * 256)); // 0 inclusive, to 255 inclusive
    let green = Math.floor((Math.random() * 256));
    let blue = Math.floor((Math.random() * 256));
    console.log(`rgb: (${red}, ${green}, ${blue})`);

    // set body style backgroundColor to random rgb
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// add an event listener to randomize page color when button is clicked
button.addEventListener("click", randomizePageColor);