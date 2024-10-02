function camelize(str) {
    return str
        .split(' ')                  
        .map((word, index) => {
            if (index === 0) {
                // Keep the first word's first letter in lowercase
                return word.toLowerCase();
            } else {
                // Capitalize the first letter of subsequent words
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');                    
}

console.log(camelize("JavaScript Exercises"));   
console.log(camelize("JavaScript exercises"));   
console.log(camelize("JavaScriptExercises"));