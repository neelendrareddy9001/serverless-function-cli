const getRandomDadJoke = async () => {
    // return "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree.";
    // const url = "https://icanhazdadjoke.com/";
    // const jokeStream = await fetch(url, {
    //     headers : {
    //         Accept: "application/json"
    //     }
    // });

    
    const url = "/.netlify/functions/jokes";
    const jsonJoke = await jokeStream.json();
    const joke = jsonJoke.joke;
    return joke;
};

const displayJoke = (joke) => {
    const h1 = document.querySelector("h1");
    h1.textContent = joke;
};

const rereshJoke = async () => {
    const joke = await getRandomDadJoke();
    displayJoke(joke);
};

//load list oj jokes
rereshJoke();

setInterval(rereshJoke, 10000);