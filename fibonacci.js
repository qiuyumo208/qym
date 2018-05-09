module.exports=function getNthFibonacci(count) { 
    var count = count * 1, //如果为其他类型，则转int型 
    tailFactorial = function(count, curr = 1, next = 1) { 
    //ES6函数参数默认值 
    console.log(curr);
    if (count == 0) { 
    return curr; 
    } else { 
    return tailFactorial(count - 1, next, curr + next); //尾递归采用函数，可有效解决栈溢出问题 
    } 
    }; 
    return tailFactorial(count); //直接传count参数 
    }