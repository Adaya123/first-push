// console.log(065434)
// alert(5566754635645)
// prompt(443345)

// console.log("my name is adaya")
// console.log("my pet's name")
// console.log(58+8)
// console.log(true)

// var myname ="var: my name is adaya and i love coding"
// console.log(myname)

// let greeting ="let: hello there"
// console.log (greeting)

// const greet =" const: goodmorning"
// console.log (greet)



// let name = prompt ("what is your name")
// console.log("hello " + name)


const firstname = "oti"
const secondname = "ikechukwu"
const lastname = "gideon"

// const fullname =firstname + secondname + lastname

const fullname = firstname.concat(" ",secondname, " ",lastname)
console.log (fullname)
secondname.length
console.log( secondname.length)
console.log(secondname.indexOf("c"))
console.log(secondname[4])

const english = "pneumonoultramicopicsilicovolcanoconiosis"
console.log(english.slice(8, -5))
console.log(english[26] + english [34] + english [14] + english[15] + english [2])

// const promp =prompt("what is your age")
// console.log(`my age is (30)`)


// const askuser = prompt("what are your age")
// console.log(`your age is ${askuser}`)



let n = 4
console.log(n)
n++
console.log(n)


let nn= 4
nn-=1
console.log(nn)

console.log(Math.random())

console.log(Math.ceil(Math.random() * 1200000))
console.log(Math.floor(Math.random()))




// variable scope in javascript
const variable = "hello"

function greetName() {
    let time = 12
    var timee2 = 23
    if(time=12){
        // var timee2 = 23
        console.log(timee2)
        // console.log(time)
    }
    else(
    console.log(timee2 + 2)
    )
}
greetName()

// arrow function
const fixName = () =>{
    console.log("favour")
}
fixName()


const classes = [
{ name:"joy", desc: "she is ....."},    
  { name: "favour", desc: "she is ....."},       
  { name: "peace", desc: "she is ....."},
       { name: "james", desc: "she is ....."},
       { name: "earnet", desc: "she is ....."},
       { name: "chibuike", desc: "she is ....."},
    
    
]

function recure(a){
    if(a <= 0){
        console.log("Done")
        return
        }
        console.log(a)
        recure(a - 1)
}
recure(7);
const someArray = [2,4,5,6,9]
function sumofarray(n){
    if(n.length === 0){
        console.log("hurray!!")
        return 0;
        }
        console.log(n)
        return n[0] + sumofarray(n.slice(1))
}
    console.log(sumofarray(someArray));

    const fruits = [
        "mango", "orange", "pineapple", "indomie","waterrmelon"
    ]
    fruits.forEach(function(elem, dex, ray)
{
    // console.log(elem)

    // console.log(dex)

    // console.log(ray)
    console.log(`${elem} is at index of ${dex} in the ${ray} array`)
    // mango is at the index of 0 inside the fruits Array


})
const price = {
    name: "hello",

    sayHello: function hello(){
        console.log("say hello")
    }
}
price.sayHello();

const products = [
    {NAME: "laptop", price: 1000},
    {NAME: "phone", price: 600},
    {NAME: "tablet", price: 400},

];
products.forEach(function(eachItem){
    eachItem.disCountedPrice = eachItem.price * 0.5
    console.log(`the price for
         ${eachItem.NAME} is ${eachItem.price}
         but the discount price is ${eachItem.disCountedPrice} `)
})
// map function
//  map method: a javascript function that iterates over an array and 
//  excute a provided function on each of the element .it doesn't modify the array
// const frut = fruits.map(function(element,dex,ray){
//     return element;
// })
// console.log(frut);
// console.log(fruits);






    
const people = [
    { name :"joy", desc: "she is ....."},    
      { name: "favour", desc: "she is ....."},       
      { name: "peace", desc: "she is ....."},
           { name: "james", desc: "she is ....."},
           { name: "earnest", desc: "she is ....."},
           { name: "chibuike", desc: "she is ....."},
        
        
    ]
    people.map((element,index,array) =>{
        console.log (element.name) 
    })

// find function
// an array function that checks the first element that satisfies a condition
     const num = [2,6,5,3,7,10]

     const fin = num.find(function(element, index, array){
        return element > 5
     })

    //  filter: checks all element that satisfies a condition
     console.log(fin)
     const fill = num.filter(function(element, index, array){
        return element > 5
     })
     console.log(fill)

     const ask = prompt("search for name")
     const fil = people.filter(function(elem){
        if(ask === elem.name){
            return elem.desc;
        }
     })
     console.log(fil)
     const ak = prompt("search for name")
     const fl = people.filter(function(elem){
        if(ask === elem.name){
        console.log(elem.desc)
        }
     })
     
    //  rest .params: used in unknown cases

    function para(...re){
        console.log(...re)
    }
    para(2,5,6,5,84,38)

    const num1 = [2,6,5,3,7,10]
    const num2 = [2,6,5,3,7,10]
        console.log(...num1,...num2)

        // array destruction
        const vehicles =['mustang','f-150','expedition'];

        // old ways
        // console.log(vehicles[0]);
        // console.log(vehicles[1]);
        // console.log(vehicles[2]);
        // end of old ways

        // destructuring
        const [aa, bb, cc] = vehicles
        console.log(aa)
        console.log(cc)

        // Object destrucuring
        const pep ={
            name:"joy",
            desc:"joy is not okay"
        }
        const{ name,desc} = pep 
        console.log(name)
        console.log(desc)


        const user = {
            id :1,
            profile: {
                username: "johndoe",
                location1:"new york"

            }
        };
        // destructuring const
       const { id, profile } = user;
       const {username, location1} = profile;
       console.log(id)
       console.log(username)
       console.log(location1)

    //    destructuring params: parameters

    // without destructuring
    function greeter(user){
        return`hello ${user.name} your age is ${user.age}`
    }
    const use = greeter({ name: "vivian", age: 20})
    console.log(use)
 

    // with destructuring
    function greeter2({ name, age}){
        return`Hello ${name} your age is ${age}`
    }
    const use2 = greeter2({ name: "vicky", age: 30})
    console.log(use2)

    // default params
    function greeter3( name = "valeria", age = 19){
        return`Hello ${name} your age is ${age}`
    }
    console.log(greeter3())

    // reduce function: a javascript method that iterates through each element in an array and applies
    // a callback function ,acculating a single output,mostly used for suming array, flattening array Etc
    const red1 = [2,4,6,7]
    const red2 = red1.reduce( function( accumulator, currenvalue){
        return accumulator + currenvalue}, 4)
    console.log(red2)