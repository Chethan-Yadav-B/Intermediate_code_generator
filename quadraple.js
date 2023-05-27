
document.getElementById("generate-button4").onclick=()=>{
inc=0
pr=0
pos = 0;
array=[]
ans=" #\tOperator\tArg1\tArg2\tResult\n\n"
console.log(document.getElementById("source-code").value);
input=document.getElementById("source-code").value;
console.log("Given expression : ",input,"\n"); 
document.getElementById("inter-code").value=addsub()
}
function search1(first){
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

function search2(second){
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

function random(){
  inc++
  return ("T"+inc)
}

function add(variable,value){
  array.push({variable:variable,value:value})
}

function term(){
  let n = 0;
  if(input[pos] == '('){
    pos++;
    n = addsub();
    
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
function muldiv(){
  let first;
  let second;
  first = term();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '*'){
      operator=input[pos]
      pos++;
      second = term();
      first=value
      value *= second; 
      let r=random()
      add(r,value)
      console.log(search1(first),operator,search2(second),r);
      ans+=("("+pr+++")\t  "+operator+"\t\t "+search1(first)+"\t "+search2(second)+"\t "+r+"\n\n")
    }else if(input[pos] == '/'){
      operator=input[pos]
      pos++;
      second = term();
      first=value
      value /= second;
      let r=random()
      add(r,value)
      console.log(search1(first),operator,search2(second),r);
      ans+=("("+pr+++")\t  "+operator+"\t\t "+search1(first)+"\t "+search2(second)+"\t "+r+"\n\n")
    }else{
      return value;
    }
  }
}

function addsub(){
  let first;
  let second;
  first = muldiv();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '+'){
      operator=input[pos]
      pos++;
      second = muldiv();
      first=value
      value += second; 
      let r=random()
      add(r,value)
      console.log(search1(first),operator,search2(second),r);
      ans+=("("+pr+++")\t  "+operator+"\t\t "+search1(first)+"\t "+search2(second)+"\t "+r+"\n\n")
    }else if(input[pos] == '-'){
      operator=input[pos]
      pos++;
      second = muldiv();
      first=value
      value -= second;
      let r=random()
      add(r,value)
      console.log(search1(first),operator,search2(second),r);
      ans+=("("+pr+++")\t  "+operator+"\t\t "+search1(first)+"\t "+search2(second)+"\t "+r+"\n\n")
    }else{
      ans+=("\nAnswer : "+value+"\n")
      console.log("ans ",ans)
      return ans;
    }
  }
}

