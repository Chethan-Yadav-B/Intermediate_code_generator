
document.getElementById("generate-button3").onclick=()=>{
inc=0
pr=0
pos = 0;
array=[]
ans=" #\tOperator\tArg1\tArg2\n\n"
console.log(document.getElementById("source-code").value);
input=document.getElementById("source-code").value;
console.log("Given expression : ",input,"\n"); 
document.getElementById("inter-code").value=addsub3()
}
function search13(first){
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

function search23(second){
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

function random3(){
  inc++
  return ("T"+inc)
}

function add3(variable,value,pri){
  array.push({variable:variable,value:value,pri:pri})
}

function term3(){
  let n = 0;
  if(input[pos] == '('){
    pos++;
    n = addsub3();
    
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
function muldiv3(){
  let first;
  let second;
  first = term3();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '*'){
      operator=input[pos]
      pos++;
      second = term3();
      first=value
      value *= second; 
      let r=random3()
      let pri="("+pr+++")"
      add3(r,value,pri)
      console.log(search13(first),operator,search23(second),r);
      ans+=(pri+"\t"+operator+"\t\t "+search13(first)+"\t "+search23(second)+"\n\n")
    }else if(input[pos] == '/'){
      operator=input[pos]
      pos++;
      second = term3();
      first=value
      value /= second;
      let r=random3()
      let pri="("+pr+++")"
      add3(r,value,pri)
      console.log(search13(first),operator,search23(second),r);
      ans+=(pri+"\t"+operator+"\t\t "+search13(first)+"\t "+search23(second)+"\n\n")
    }else{
      return value;
    }
  }
}

function addsub3(){
  let first;
  let second;
  first = muldiv3();
  let value=first
  let operator;
  for(;;){
    if(input[pos] == '+'){
      operator=input[pos]
      pos++;
      second = muldiv3();
      first=value
      value += second; 
      let r=random3()
      let pri="("+pr+++")"
      add3(r,value,pri)
      console.log(search13(first),operator,search23(second),r);
      ans+=(pri+"\t"+operator+"\t\t "+search13(first)+"\t "+search23(second)+"\n\n")
    }else if(input[pos] == '-'){
      operator=input[pos]
      pos++;
      second = muldiv3();
      first=value
      value -= second;
      let r=random3()
      let pri="("+pr+++")"
      add3(r,value,pri)
      console.log(search13(first),operator,search23(second),r);
      ans+=(pri+"\t"+operator+"\t\t "+search13(first)+"\t "+search23(second)+"\n\n")
    }else{
      ans+=("\nAnswer : "+value+"\n")
      console.log("ans ",ans)
      return ans;
    }
  }
}

