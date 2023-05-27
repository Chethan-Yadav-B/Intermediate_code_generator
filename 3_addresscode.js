
document.getElementById("generate-button2").onclick=()=>{
inc=0
pos = 0;
array=[]
ans=""
console.log(document.getElementById("source-code").value);
input=document.getElementById("source-code").value;
console.log("Given expression : ",input,"\n"); 
document.getElementById("inter-code").value=addsub2()
}
function search12(first){
     let k=null
     array.map(ele=>{
      if(ele.value===first){
        k=(ele.variable)
      }
     })
      if(k!==null){
      return k
    }else{
      return first
    }
}

function search22(second){
  let k=null
 array.map(ele=>{
   if(ele.value===second){
     k=(ele.variable)
   }
  })
  if(k!==null){
    return k
  }else{
    return second
  }
}

function random2(){
  inc++
  return ("T"+inc)
}

function add2(variable,value){
  array.push({variable:variable,value:value})
}

function term2(){
  let n = 0;
  if(input[pos] == '('){
    pos++;
    n = addsub2();
    
    if(input[pos] == ')'){
      pos++;
      return n;
    }
  }else{
    while('0' <= input[pos] && input[pos] <= '9'){
      n = n*10 + (input[pos] - '0');
      pos++;
    }
  }

  return n;
}
function muldiv2(){
  let first;
  let second;
  first = term2();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '*'){
      operator=input[pos]
      pos++;
      second = term2();
      first=value
      value *= second; 
      let r=random2()
      add2(r,value)
      console.log(search12(first),operator,search22(second),r);
      ans+=(r+" = "+search12(first)+" "+operator+" "+search22(second)+"\n")
    }else if(input[pos] == '/'){
      operator=input[pos]
      pos++;
      second = term2();
      first=value
      value /= second;
      let r=random2()
      add2(r,value)
      console.log(search12(first),operator,search22(second),r);
      ans+=(r+" = "+search12(first)+" "+operator+" "+search22(second)+"\n")
    }else{
      return value;
    }
  }
}

function addsub2(){
  let first;
  let second;
  first = muldiv2();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '+'){
      operator=input[pos]
      pos++;
      second = muldiv2();
      first=value
      value += second; 
      let r=random2()
      add2(r,value)
      console.log(search12(first),operator,search22(second),r);
      ans+=(r+" = "+search12(first)+" "+operator+" "+search22(second)+"\n")
    }else if(input[pos] == '-'){
      operator=input[pos]
      pos++;
      second = muldiv2();
      first=value
      value -= second;
      let r=random2()
      add2(r,value)
      console.log(search12(first),operator,search22(second),r);
      ans+=(r+" = "+search12(first)+" "+operator+" "+search22(second)+"\n")
    }else{
      ans+=("\nAnswer : "+value+"\n")
      console.log("ans ",ans)
      return ans;
    }
  }
}

