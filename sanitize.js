const sanitizeHtml = require("sanitize-html")

console.log('Sanitize some dirty HTML');

const dirty = "<h1> Heading </h1> Today is a <em>sunny</em> day.";

const clean = sanitizeHtml(dirty, { allowedTags: [] })

console.log(dirty);
console.log(clean);