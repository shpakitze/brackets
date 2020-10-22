module.exports = function check(str, bracketsConfig) {
  // your solution
function isBrOpen(str) {
  for (let i=0;i<bracketsConfig.length;i++) {
    if (bracketsConfig[i][0]===str) return true;
    
    }
    return false;
}

function isBrClose(str) {
  for (let i=0;i<bracketsConfig.length;i++) {
    if (bracketsConfig[i][1]===str) return true;
    
  }
  return false;
}
  function getOpenBrek(closeBr) {
    for (let i=0;i<bracketsConfig.length;i++) {
      if (bracketsConfig[i][1]===openBr) return bracketsConfig[i][0];
    }
  }

  function getCloseBr(openBr) {
    for (let i=0;i<bracketsConfig.length;i++) {
      if (bracketsConfig[i][0]===openBr) return bracketsConfig[i][1];
    }
  }
  let stack=[];
  let result=false;;
for (let a=0;a<str.length;a++) {
  if (isBrOpen(str[a])) {
    if ((stack[stack.length-1]===str[a])&&(isBrOpen(str[a])===isBrClose(str[a])))
    {
    stack.pop();
    continue;
    }
    stack.push(str[a]);
    continue;
  }
  if (isBrClose(str[a])) {
    if (stack.length===0) return false;
    let c=stack.pop();
    let b=getCloseBr(c);
    if (str[a]!==b) return false;
  }
}
if (stack.length===0) result=true;
return result;
}
