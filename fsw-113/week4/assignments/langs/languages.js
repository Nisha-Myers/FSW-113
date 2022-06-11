const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.getElementById("submit").addEventListener("click", function() {
    let inputArray = [...document.querySelectorAll("input")];
    chkLang(inputArray);
});

function chkLang(langs) {
    let result = false
    langs.forEach(input => {
        if (input.value === lang){
            result = true;
        }
    });

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    let obj = document.querySelector('#TestResult')
    
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}