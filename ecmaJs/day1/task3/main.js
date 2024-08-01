
const table = document.querySelector("table");
const h4 = document.querySelector("h4");
//     a. test that every element in the given array is a string 

let fruits = ["apple", "strawberry", "banana","orange",  "mango"];
fruits.map((el)=>{
    h4.innerHTML += " "+el.toUpperCase()+" ";
})
const a = fruits.every((ele)=>{
    return typeof ele === "string";
})
console.log(a);
const tr= document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");

td2.innerHTML = a;
td1.innerHTML = "element is a string";
tr.appendChild(td1);
tr.appendChild(td2);

table.appendChild(tr);



//b.test that some of array elements starts with "a"
const b = fruits.filter((ele)=>{
return ele[0] === "a";
})
const tr2= document.createElement("tr");
const td3 = document.createElement("td");
const td4 = document.createElement("td");

td3.innerHTML = "starts with a";
td4.innerHTML = b[0];
tr2.appendChild(td3);
tr2.appendChild(td4);

table.appendChild(tr2);
//c. generate new array filtered from the given array with only elements that
//starts with "b" or "s"
const c = fruits.filter((ele)=>{
    return ele[0] === "b" || ele[0] === "s";
    })

    const tr3= document.createElement("tr");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    
    td5.innerHTML = "starts with b or s";
   c.forEach(el=> td6.innerHTML += " "+el );
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    
    table.appendChild(tr3);
    //d. generate new array each element of the new array contains a string
//declaring that you like the give fruit element “I like ” + fruit[0]
const d = fruits.map((ele)=>{
return `I Like ${ele}`;
})
let ul= document.querySelector("ul");

let li = document.createElement("li");
d.forEach((el)=>{
    let li = document.createElement("li");
    li.innerHTML += `${el}`;
    ul.appendChild(li);
}
)
    
    ;

//e. use `forEach` to display all elements of the new array from previous point.

const e = d.forEach((ele)=>{
console.log(ele);
})



















