// Chess board
// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a “#” character. The characters should form a chess
// board.
// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable
// size = 8 and change the program so that it works for any size, outputting
// a grid of the given width and height.

var output = "";
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        output += "#";
    }
        output += " ";
}
for(var j=0; j<10; j++){
    console.log(output);
    console.log(" "+ output);
}


// 0 = 0 1= na 2=0  3=na  4
// 5 = na 6= 0  7=na  8= 0  9= na
// 10= 0 11= na 12=0 13=na 14