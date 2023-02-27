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