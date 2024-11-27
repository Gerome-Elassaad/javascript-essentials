{
    // Block Scope
    var blockVar = "I am a var inside the block.";
    let blockLet = "I am a let inside the block.";
    const blockConst = "I am a const inside the block.";

    // Reassign variables inside the block
    blockVar = "I am reassigned var inside the block.";
    blockLet = "I am reassigned let inside the block.";
    // blockConst = "I am reassigned const inside the block."; // This will throw an error
    console.log("Inside block:");
    console.log(blockVar); // Reassigned value
    console.log(blockLet); // Reassigned value
    // console.log(blockConst); // Uncommenting above reassignment throws TypeError
}

// Attempt to reassign variables outside the block
console.log("Outside block:");
try {
    blockVar = "I am reassigned var outside the block.";
    console.log(blockVar); // Accessible and reassignable (var is function/global scoped)
} catch (error) {
    console.log("Error with blockVar:", error.message);
}

try {
    blockLet = "I am reassigned let outside the block."; // Throws ReferenceError
    console.log(blockLet);
} catch (error) {
    console.log("Error with blockLet:", error.message);
}

try {
    blockConst = "I am reassigned const outside the block."; // Throws ReferenceError
    console.log(blockConst);
} catch (error) {
    console.log("Error with blockConst:", error.message);
}
