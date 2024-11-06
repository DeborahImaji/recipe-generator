
function displayRecipe(response) {

    console.log("Recipe generated")
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

}

function generateRecipe(event) {

    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "5c8o643ae4ebb3ft8e1b94e99eafcfb0";

    let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;

    let context = `You are a culinary expert and you love to write short recipes. Your mission is to generate a simple recipe in basic HTML. Please do not display any HTML signs. Make sure to follow the user instructions. At the end of the recipe, please sign Deborah x SheCodes AI inside a <strong>`;

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for ${instructionsInput.value} for you. Please wait...</div>`;

    axios.get(apiUrl).then(displayRecipe);

}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);