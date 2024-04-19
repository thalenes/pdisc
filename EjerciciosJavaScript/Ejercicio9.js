let myArray = new Array();
myArray[0] = 20;
myArray[1] = 33;
myArray[2] = 2;
myArray[3] = 23;

for(i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
        console.log(`${myArray[i]} Es par`);
    }   
    else {
        console.log(`${myArray[i]} Es impar`);
    }
}
