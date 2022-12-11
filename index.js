let res = document.getElementById("res");
let btn1 = document.getElementById('btn0');
let btn2 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');


btn1.addEventListener('click',()=>{{
  let valueZero = btn1.textContent;
   putInRes(valueZero)
}})
btn2.addEventListener('click',()=>{{
  let valueOne = btn2.textContent;
   putInRes(valueOne)
}})
btnSum.addEventListener('click',()=>{{
  let valueSum = btnSum.textContent;
  if(res.textContent.endsWith('0')||res.textContent.endsWith('1')){  
    putInRes(valueSum)
   } 
}})
btnSub.addEventListener('click',()=>{{
  let valueSub = btnSub.textContent;
  if(res.textContent.endsWith('0')||res.textContent.endsWith('1')){  
    putInRes(valueSub)
   } 
}})
btnMul.addEventListener('click',()=>{{
  let valueMul = btnMul.textContent;
  if(res.textContent.endsWith('0')||res.textContent.endsWith('1')){
    putInRes(valueMul)
   }
   
}})
btnDiv.addEventListener('click',()=>{{
  let valueDiv = btnDiv.textContent;
   
   if(res.textContent.endsWith('0')||res.textContent.endsWith('1')){
    putInRes(valueDiv);
   }
}})

var opr = '';
var result= [];
function putInRes(values){
  
   if (values != "C" && values != "=" ) {
    res.innerHTML += values;
   }
    if(values != '0' && values != '1'){
      opr = values;
      console.log(opr)
    }
       
}

btnEql.addEventListener('click',()=>{
  console.log(opr);
  var str = res.textContent.split(opr);
  var op1 = str[0];
  var op2 = str[1];
  console.log(str);
  console.log(op1);
  console.log(op2);

  res.innerHTML = (~~eval(parseInt(op1, 2) + opr + parseInt(op2, 2))).toString(2);     
  opr = "";
  document.getElementById('resultBinary').innerHTML = res.textContent;
  document.getElementById('resultDecimal').innerHTML = parseInt(res.innerHTML,2);
});
btnClr.addEventListener('click',()=>{
  res.textContent ='';})
