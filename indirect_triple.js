
document.getElementById("generate-button1").onclick=()=>{
inc=0
pr=10
pr2=0
pos = 0;
array=[]
ans=" #\tOperator\tArg1\tArg2\t\t\t\t  #\tStatement\n\n"
console.log(document.getElementById("source-code").value);
input=document.getElementById("source-code").value;
console.log("Given expression : ",input,"\n"); 
document.getElementById("inter-code").value=add1sub1()
}
function search11(first){
     let k=null
     array.map(ele=>{
      if(ele.value===first){
        k=(ele.pri)
      }
     })
      if(k!==null){
      return k
    }else{
      return first
    }
}

function search21(second){
  let k=null
 array.map(ele=>{
   if(ele.value===second){
     k=(ele.pri)
   }
  })
  if(k!==null){
    return k
  }else{
    return second
  }
}

function random1(){
  inc++
  return ("T"+inc)
}

function add1(variable,value,pri){
  array.push({variable:variable,value:value,pri:pri})
}

function term1(){
  let n = 0;
  if(input[pos] == '('){
    pos++;
    n = add1sub1();
    
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
function muldiv1(){
  let first;
  let second;
  first = term1();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '*'){
      operator=input[pos]
      pos++;
      second = term1();
      first=value
      value *= second; 
      let r=random1()
      let pri2="("+pr+")"
      let pri="("+pr+++")"
      add1(r,value,pri)
      console.log(search11(first),operator,search21(second),r);
      ans+=(pri+"\t  "+operator+"\t\t "+search11(first)+"\t "+search21(second)+"\t\t\t\t ("+pr2+++")\t  "+pri2+"\n\n")
    }else if(input[pos] == '/'){
      operator=input[pos]
      pos++;
      second = term1();
      first=value
      value /= second;
      let r=random1()
      let pri2="("+pr+")"
      let pri="("+pr+++")"
      add1(r,value,pri)
      console.log(search11(first),operator,search21(second),r);
      ans+=(pri+"\t  "+operator+"\t\t "+search11(first)+"\t "+search21(second)+"\t\t\t\t ("+pr2+++")\t  "+pri2+"\n\n")
    }else{
      return value;
    }
  }
}

function add1sub1(){
  let first;
  let second;
  first = muldiv1();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '+'){
      operator=input[pos]
      pos++;
      second = muldiv1();
      first=value
      value += second; 
      let r=random1()
      let pri2="("+pr+")"
      let pri="("+pr+++")"
      add1(r,value,pri)
      console.log(search11(first),operator,search21(second),r);
      ans+=(pri+"\t  "+operator+"\t\t "+search11(first)+"\t "+search21(second)+"\t\t\t\t ("+pr2+++")\t  "+pri2+"\n\n")
    }else if(input[pos] == '-'){
      operator=input[pos]
      pos++;
      second = muldiv1();
      first=value
      value -= second;
      let r=random1()
      let pri2="("+pr+")"
      let pri="("+pr+++")"
      add1(r,value,pri)
      console.log(search11(first),operator,search21(second),r);
      ans+=(pri+"\t  "+operator+"\t\t "+search11(first)+"\t "+search21(second)+"\t\t\t\t ("+pr2+++")\t  "+pri2+"\n\n")
    }else{
      ans+=("\nAnswer : "+value+"\n")
      console.log("ans ",ans)
      return ans;
    }
  }
}

