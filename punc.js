App academy javascript notes

//make unique

let dog = ['b', 's' , 'l', 'd'];

let combo = function(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}
combo(dog);
console.log('string'.slice(0,1));


let twoSum = function(nums, targetSum) {
    for (let i = 0; i < nums.length; i++){
        let num1 = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let num2 = nums[j];
            if (num1 + num2 === targetSum) {
                return true;
            } else
        }
    }

}
