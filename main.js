// problem 1:تقييم العلامة 
let mark=30;
mark>=90?console.log("ممتاز"):
mark>=70&&mark<=89?console.log("جيد"):
mark>=50&&mark<=69?console.log("ناجح"):
mark<50?console.log("راسب"):console.log("غير متضمن");

// problem2:check data type
let Name="rima";
let age=19;
let active=true;
let jukr=null;
let length=160;
let art=undefined;
let count=0;
let data={Name, age, active,jukr,length , art }
for(let i in data){
console.log(i," is ",typeof data[i])
if(typeof data[i]==="number")
    count++;
}
console.log(`numbers count:${count}`)


    // prpblem3:العمليات الحسابي
  let a=10,b=3;
  let sum=a+b;
  let diff=b-a;
  let Mul=a*b;
  let Div=a/b;
  let mod=Div- Math.round(Div *100)/100;  
  console.log(`sum: ${sum}` )
  console.log(`Diff: ${diff}`)
  console.log(`Mul:${Mul}`)
  console.log(`Div: ${Div.toFixed(2)}`)
  console.log(`Mod: ${mod}`)

//   problem4: رخصة قيادة
let age2=71;
age2<0||typeof age2!="number"?console.log("قيمة عمر غير موجودة"):
age2<18? console.log("انت صغير/ة"):
age2>=18&&age2<=70?console.log("مؤهل"):
age2>70?console.log("راجع الطبيب"):console.log("error");

// problem5:ايام الاسبوع سبعة
let weekday=5;
let end="_نهاية الأسبوع"
switch(weekday){
    case 1:
        console.log("الاثنين");
        break;
        case 2:
        console.log("الثلاثاء");
        break;
        case 3:
        console.log("الأربعاء");
        break;
        case 4:
        console.log("الخميس");
        break;
        case 5:
        console.log("الجمعة"+end);
        break;
        case 1:
        console.log("السبت"+end);
        break;
        case 7:
        console.log("الأحد"+end);
        break;
        default:
            console.log("رقم غير صحيح")
}


// problem6:حاسبة شرطية
let x=10;  //firt num
let y=0;  //secend num
let op='/';
if(op==='+'){
    console.log(x+y)
}
else if(op==='-'){
    console.log(x-y)
}
else if(op==='*'){
    console.log(x*y)
}
else if(op==='/'){
    if(y===0){
        console.log("قسمة على صفر خطأ");
    }
    else
    console.log(x/y)
}
else {
    console.log("عملية غير مدعومة");
}
//problem7:فلترة اسماء
let names = ["Ahmad", "Sara", "Lina", "Omar", "Sameh", "Ali"];
let filterNames = names.filter(name => {
    let lengthCond = name.length >= 4;
    let startS = name.startsWith("S") || name.startsWith("A");
    return lengthCond && startS;
});

console.log(filterNames);

// problem 8:احصاء المصفوفة
let nums=[4,5,7,8,30,1]
let sum2=0;
for(let j of nums){
    sum2+=j
}
console.log(`sum: ${sum2}`)
let avg=sum2/nums.length;
console.log(`avg: ${avg.toFixed(2)}`)
let max=nums[0];
for ( j of nums) {
    if(j>max)max=j;
    
    
}
console.log("max:",max)
let min=nums[0]
for ( j of nums) {
    if(j<min)min=j;
    
    
}
console.log("min:",min)
let above=[];
for ( j of nums) {
    if(j>avg)above.push(j);
}
console.log( "above avrege: ",above)



// problem 9:قيم مكررة
let repeat=["a","b","a","b"]
let unrepeat=[]
for(let y of repeat){
    if(!unrepeat.includes(y))unrepeat.push(y);
}
console.log(unrepeat);

// problem 10:نسلسل حسابي
let arr3=[1,4,7,10,13]
let difrenc=arr3[1]-arr3[0]
let cheke=true;
for (let w = 0; w < arr3.length - 1; w++) {
    if (arr3[w + 1] - arr3[w] !== difrenc)
  {  console.log("Not progression ")
    cheke=false ;
break;
}

}
if(cheke)console.log(`Progression with difference ${difrenc}`)

    // problem11:التخمين
    const secret=9;
    const guesses=[3,5,6,7,8,9]
    let check=false;
    for(let i=0;i<guesses.length;i++){
        if(guesses[i]===secret){
            check= true;
            console.log(`found at attempt ${i+1}`);
        }
    }
    if(!check){
        console.log("not found")
    }

    //problem12:دمج القا~متين و تنظيف البيانات
    let arr4=[1,null,"a",""];
    let arr5=["a",2,undefined,3]
    const notav=[null,undefined,""]
    let allarr=arr4.concat(arr5);
    let finalarr=[]
    for(let i of allarr){
      if  (!finalarr.includes(i)&&!notav.includes(i)){
        finalarr.push(i)
      }
    }
    console.log(finalarr)