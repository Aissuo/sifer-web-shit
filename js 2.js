// --- PRIMITIVE DATA TYPES (7 Types) ---
// The typeof operator returns the type of a variable or an expression.

typeof "John";           // Returns string
typeof ("John"+"Doe");   // Returns string
typeof 3.14;             // Returns number
typeof 33;               // Returns number
typeof (33+66);          // Returns number
typeof true;             // Returns boolean
typeof false;            // Returns boolean
typeof 1234n;            // Returns bigint
typeof Symbol();         // Returns symbol
typeof x;                // Returns undefined

// Note: 'null' is also a primitive data type, though it is evaluated as an object in JS due to a legacy bug.

// --- COMPLEX DATA TYPES ---
// A complex data type can store multiple values and/or different data types together.

typeof {name:'John'};    // Returns object
typeof [1,2,3,4];        // Returns object