	// Define a variable called myVar initialized to 5
    let myVar = 5;
 
    // Log myVar to the console
    console.log("myVar:", myVar);
     
    // Increment myVar by 5
    myVar += 5;
     
    // Log myVar again
    console.log("myVar after increment:", myVar);
     
    // Create a constant called addThis with a value of 2
    const addThis = 2;
     
    /**
     * Function to increment a number by a specified value.
     *
     * @param {number} num - The number to be incremented.
     * @param {number} value - The value by which the number should be incremented.
     * @returns {number} The result of incrementing the number by the specified value.
     */
    function incrementNumber(num, value) {
        return num + value;
    }
     
    // Call incrementNumber passing myVar and addThis as arguments
    const result = incrementNumber(myVar, addThis);
     
    // Log the result of the function call
    console.log("Result of incrementNumber:", result);