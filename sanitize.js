// Import npm-paketet vi ska använda 
const sanitizeHtml = require("sanitize-html")

console.log('Sanitize some dirty HTML');

//Text som innehåller HTML
const dirty = "<h1> Heading </h1> Today is a <em>sunny</em> day.";

//Använd npm-paketet för att rensa bort HTML från strängen

const clean = sanitizeHtml(dirty, { allowedTags: [] })

//Skriv ut resultatet: före och efter
console.log(dirty);
console.log(clean);


//Detta är bara ett exempel
//Detta är andra exempel
//I will be best programmer