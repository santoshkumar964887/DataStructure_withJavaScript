/**Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1 */
/**Time Complexity - Log(N) - Binary Search */
function search(arr,val){
    var r=arr.length-1,l=0;
    
    while(l<=r){
    m=Math.floor((l+r)/2);
    if(arr[m]==val)return m;
    else if(arr[m]<val) l=m+1;
    else if(arr[m]>val) r=m-1;
    
    }
    return -1;
    }
    console.log(search([1,2,3,4,5,6],4));
    console.log(search([1,2,3,4,5,6],6));
    console.log(search([1,2,3,4,5,6],11));
    