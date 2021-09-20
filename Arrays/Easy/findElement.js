//Find an element of the array of size n. 
//Find an element that divides the array into two sub-arrays with equal sums. 

//Example:
//Input: 1, 4, 2, 5
//Output: 2
//Expalnation: [(1 + 4 = 5), 2, 5]

function findElemnt(arr,n){
	let i =0, start = 0, end = n -1, left_sum=0, right_sum; 
	for (i = 0 ; i < n; i ++) {
		if (start === end && right_sum === left_sum){
            return a[start];
        } 
		if (start === end){
            return -1;
        } 
		if (right_sum < left_sum) {
            Right_sum += a[end];
            end--;
        } 
        else if (right_sum > left_sum) {
            left_sum += a[end];
            start++;
        } 
        else {
            Right_sum += a[end];
            end--;
        }
    }

}
