let str1 = "Hello";
let str2 = "World";

// Traditional concatenation
console.log("Using traditional String concatenation"); //Poner la barra / delante de una comiilas significa escapar
console.log("\'" + str1 + "\' and \'" + str2 + "\'");
console.log("\"" + str1 + "\" and \"" + str2 + "\"");
console.log("\`" + str1 + "\` and \`" + str2 + "\`");

// String literals
console.log("\nUsing String literals");
console.log(`'${str1}\' and \'${str2}'`);
console.log(`"${str1}\" and \"${str2}"`);
console.log(`\`${str1}\` and \`${str2}\``);