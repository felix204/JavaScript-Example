function karesinial(sayi){
    return sayi*sayi;
}

let a = karesinial(2);
let b = karesinial(4);



////   ////   ////  ////



function toplam(sayi1,sayi2){
    function karesinial(x){
        return x*x;
    }

    return karesinial(sayi1) + karesinial(sayi2);
}

let sonuc = toplam(2,4);




/// Function Declaration vs Expression



// Function Declaration
function sum(a,b){
    const c = a + b;
    return c;
}

console.log(sum(10,20));


//Function Expression

const sum = function(a,b){ //Declaration ile farkı fonsiyonu değişkene eşitleyebiliyoruz
    const c = a + b;
    return c;
}

console.log(sum(10,20));


////  ////  ////  ////  ////


const x = function(a=0, b=0){

    // ES6 ile bu if konrol yapmadan prop un içine değerleri yukarıda görüldüğü gibi koyulabilir.
    // if (typeof a === undefined) {
    //     a = 0;
    // }
    // if (typeof b === undefined){
    //     b = 0;
    // }
    const c = a + b;
    return c;
}

console.log(x(a));
//eğer a nın '0' değerini almasını istiyorsak bu kez 'console.log(x(b));' değerini bastıracağız.
console.log(x(b));