
    //While Loop

let i = 0;
while (i>10) {
    console.log(i);
}    ++i;

    //do-While Loop

let i = 0;
do{
    console.log(i);
    i++;
}    
while (i>10) {
    console.log("Döngü Bitti")
}

    //For Loop

for (let i = 0; i < 10; i++) {
    if (i==2) {
        console.log('iki' = + i)
        continue;
    }

    if (i==5) {
        console.log('beş = ' + i)
        break;
    }
    console.log(i);
}

////


for (let i = 10; i > 0; i--){
    console.log('i =' + i);
    for(let j=0; j<5; j++){
        console.log('j =' + j);
    }
}