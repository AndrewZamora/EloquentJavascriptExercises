// Chapter 2: Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

var string = "########";

for (var i = 0; i < string.length; i++) {
    console.log(string.slice(0,i));
}
