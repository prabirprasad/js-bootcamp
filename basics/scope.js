// JavaScript uses Lexical Scope (Static scope)

// Types of Scope
// --------------
// GLobal scope     Defined outside of all code blocks
// Local Scope


// In a scope you can access variables that are defined in that scope, or in any parent/ancestor scope

// Scope Hierarchy
// ---------------
// Global Scope (varOne)
    // Local Scope  (varTwo)
        // Local Scope  (varFour)
    // Local Scope  (varThree)



// Global Scope
let varOne = 'varOne'

if(true) {
    console.log(varOne);
    // Local Scope
    let varTwo = 'varTwo'
    console.log(varTwo);

    if(true) {
        // Local Scope
        let varFour = 'varFour'
        console.log(varFour);
        // varOne   Accessible
        // varTwo   Accessible
        // varThree   Not Accessible
    }
}

if(true) {
    // Local Scope
    let varThree = 'varThree'
    console.log(varThree);
    // varOne   Accessible
    // varTwo   Not Accessible
    // varFour  Not Accessible
}

// varOne Accessible
// varTwo   Not Accessible
// varThree   Not Accessible
// varFour   Not Accessible