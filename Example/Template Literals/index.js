const fullName = 'Aydın Can İçiğen';
const city = 'Norveç';
const yearOfBirth = 1999;

let val = 'Benim adım' + fullName + city + 'Yaşıyorum'
            +yearOfBirth + 'yaşındayım'

val = `Benim Adım ${fullName}. ${city}
        yaşıyorum. ${(2021-yearOfBirth)}`

console.log(val)            