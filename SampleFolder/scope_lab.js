function show(){
    let functionLet = "I'm a block-scoped let";     // console.log(blockVar);
    const functionConst = "I'm a block-scoped const";   // console.log(blockLet);
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError