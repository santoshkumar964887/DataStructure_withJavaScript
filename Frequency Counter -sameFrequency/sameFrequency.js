/*write a function called sameFrequency.Given two postive integer, find out if the two numbers have the same frequency of digits*/
/* Method-1:-Time Complexity - O(N)*/
function sameFrequency(n,m){
    var obj1={},a=0;
    st1=n.toString();
    st2=m.toString();
    if(st1.length!=st2.length)return false;
    for(let i=0;i<st1.length;i++){
      obj1[st1.charAt(i)]?obj1[st1.charAt(i)]+=1:obj1[st1.charAt(i)]=1;
    }
    for(let i=0;i<st2.length;i++){
    
      if(obj1[st2.charAt(i)]){
    obj1[st2.charAt(i)]-=1}
     else return false;
    }
    return true;
    
    }
    
    console.log(sameFrequency(182,281));
    console.log(sameFrequency(3589578,5879385));
    console.log(sameFrequency(22,222));
    console.log(sameFrequency(1821,28111));
    console.log(sameFrequency(34,14)); 