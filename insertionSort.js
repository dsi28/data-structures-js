function is(array){
    for (let i = 0; i < array.length; i++) {
        let j = i;
        console.log(`yoooo ${array}`);
        while (j>0 & array[j-1] > array[j]) {
            let temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j = j - 1;
            console.log(`change ${array}`);
        }
    }
    return array;
}

console.log(is(([2,8,5,3,9,4])));