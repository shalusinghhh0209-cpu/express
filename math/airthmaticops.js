const sum = (a,b)=>{
    return a + b;
};

const subtract = (a,b) =>{
    return a - b;
};

const multiply =(a, b)=> {
    return a * b;
};

//commonJS: attach what you want to expose to module.exposrts

// module.exports ={
//     sum:sum,
//     subtract:subtract,
//     multiply:multiply,
// };

export { sum, subtract , multiply};

