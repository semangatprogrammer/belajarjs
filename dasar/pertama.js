const angka= [-2,0,-1,3,6,7,2,-3,5,2,9]
const newAngka=[];
for (let i=0; i<angka.length;i++){
    if(angka[i]>=3){
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);


const newAngka2 = angka.filter(function(a){
    return a>=3;
});
console.log(newAngka);