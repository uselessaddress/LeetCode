// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

let isValid = (str)=>{
    let left_stack = []
    for(let i=0;i<str.length;i++){
        if(str[i]==='('||str[i]==='['||str[i]==='{'){
            left_stack.push(str[i])
        }
        if(str[i]===')'){
            let left_ = left_stack.pop();
            if(left_!=='('){
                return false
            }
        }
        if(str[i]===']'){
            let left_ = left_stack.pop();
            if(left_ !== '['){
                return false
            }
        }
        if(str[i]==='}'){
            let left_ = left_stack.pop();
            if(left_!=='{'){
                return false
            }
        }
    }
    if(left_stack.length === 0){
        return true
    }else{
        return false
    }  
}

console.log(isValid('['))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid("([)]"))
console.log(isValid('(('))
console.log(isValid('){'))
console.log(isValid('([])'))