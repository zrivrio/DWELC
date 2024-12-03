const list = [1,2,3,4,5];


//Filter devuelve un boolean
const list2 = list.filter(e => e >3);
const list3 = list.filter(e => e%2 ==0);
const list4 = list.filter(e => {
    if(!(e%2)){
        return true;
    }else{
        return false;
    }});

console.log(list);
console.log(list2);
console.log(list3);

