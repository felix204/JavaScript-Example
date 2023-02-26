var marka = 'opel';
var model = 'Astra';
var otomatik = 'yes';

if (otomatik == 'yes') {
    console.log('araç otomatiktir');
}else{
    console.log('araç otomatik değildir');
}

otomatik = true;

if (otomatik) {
    console.log(marka + '' + model 'otomatik' );
}

if (otomatik === 'true') {
    console.log('true');
}

if (10 == '10') {
    console.log('sayılar Eşit');
}




/* Switch */


let day ;

switch (new Date().getDay()){
    case 0:
        day = 'Pazar';
        console.log('Bugün günlerden' + day)
        break;
    case 1:
        day = 'Pazartesi';
        console.log('Bugün günlerden' + day)
        break;
    case 2:
        day = 'Salı';
        console.log('Bugün günlerden' + day)
        break;
    case 3:
        day = 'Çarşamba';
        console.log('Bugün günlerden' + day)
        break;
    case 4:
        day = 'Perşembe';
        console.log('Bugün günlerden' + day)
        break;
    case 6:
        day = 'Cuma';
        console.log('Bugün günlerden' + day)
        break;

}