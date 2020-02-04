//crea una prueba o función que devuelva el número más grande del array. 
function mayor(x){
    max=x[0];
    for (i=0; i<x.length; i++){
        if(x[i]>max){
         max=x[i];
        }
}
return max;
}
x=[2,4,5];
console.log(mayor(x));

describe("mayor", function() { 
    it("should return 10 when we pass [1,3,10] as an argument", function() { 
        expect(mayor([1,3,10])).toEqual(10); 
    }); 
    it("should return -2 when we pass [-2,-5,-10] as an argument", function() { 
        expect(mayor([-2,-5,-10])).toEqual(-2); 
    }); 

})
  
