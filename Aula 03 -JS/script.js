// vetores

// v1=[]
// v1[0]=3.4
// v1[10]=2
// console.log(v1)

// for (let i=0; i<v1.length;i++)
//     console.log(v1[i])

// arrow function
// const teste = () => {console.log("My arrow function")}
// teste()

// // filter
// const nomes = ['Ana Maria', 'Antonio','Rodrigo','Claudio']
// const resultados = nomes.filter((nome)=>{return nome.startsWith('A')})
// console.log(resultados)

// // mapeamento
// const champs = ['Aatrox', 'Nunu','Assol','Lissandra']
// const initialLetters = champs.map((nome)=>{return nome.charAt(0)})
// console.log(initialLetters)

// const numeros = [1,2,3,4,5]
// const potencia = numeros.map((number)=>{return number**2})
// console.log(potencia)

// const values = [1,2,3,4]
// const soma = values.reduce((ac,v)=>{return ac + v})
// console.log(soma)

// odd number
// const values = [1,2,3,4]
// const odd = values.filter((number)=>{return number % 2 !== 0})
// console.log(odd)

// even number
// const values = [1,2,3,4]
// const even = values.filter((number)=>{return number % 2 === 0})
// console.log(even)

// function soma(a,b){
//     return a+b;
// }
// console.log(soma(2,3))

// v=[2,'abc',true]

// //functions
// function hello(){
//     console.log('Hello')
// }
// hello()
// //  içamento ~ var
// function hello(nome){
//     console.log('Hello ' + nome)
// }
// hello('Flávia')

// const dobro = function (n){
//     return 2 * n
// }
// const res = dobro(5)
// console.log(res)

// valor padrao para um parametro
// const triple = function (n=5){
//     return n*3
// }
// console.log(triple())
// console.log(triple(214))

// (a,b) => console.log(a+b) //syntax sugar
// const test = (a,b,c) => {return a * b * c}
// const tests = (a,b,c) =>  a * b * c //use return if u use {}

// const dobro = valor => valor * 2

// //closures
// let oneFunction = function () { console.log("I was stored in a variable") }
// oneFunction()

// //higher order function
// function g() {
//     function otherFunction() {
//         console.log("I was created by G")
//     }
//     return otherFunction()
// }
// const gResult= g()
// gResult()
// //or
// g()()

// function salutFactory(hey, name){
//     return function(){console.log(hey + ", " + name)}
// }
// let heyJohn = salutFactory("Hello","John")
// let byeJohn = salutFactory("Bye","John")
// heyJohn()
// byeJohn()

// function andNow() {
//     let count = 1
//     function f1() {
//         console.log(count)
//     }
//     count++
//     function f2() {
//         console.log(count)
//     }
//     return {f1,f2}
// }
// let andNowResult = andNow()
// andNowResult.f1()
// andNowResult.f2()

//JavaScript Object Notation JSON

// //A person who is 17yo called Marie
// let person1 = {
//     name: "Marie",
//     age:17
// }
// console.log(person1.name)
// console.log(person1.age)
// //or
// person1["name"]
// person1["age"]

// //A person who is called Martha, is 21yo and lives at 21st Street, 121
// let person2 = {
//     name:"Martha",
//     age: 21,
//     adress: {
//         street: "21st Street",
//         number: 121
//     }
//    }
// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.adress)
// //or
// person2["name"]
// person2["age"]
// person2["name"]
// person2["adress"]
// person2["adress"].street
// person2["adress"].number

//A car store has a CNPJ and an adress. It has currently 3 vehicles on stock. Each vehicle has its own model, brand and manufacturing year.
// let store1 = {
//     storeName: "Carlo Vehicles",
//     CNPJ: "483.233.746-43",
//     adress: {
//         street: "4th Avenue",
//         number: 81
//     },
//     stock: {
//         car1: {
//             model: "S",
//             brand: "Tesla",
//             manufacturingYear: 2021
//         },
//         car2: {
//             model: "March",
//             brand: "Nissan",
//             manufacturingYear: 2016
//         },
//         car3: {
//             model: "C3",
//             brand: "Citroën",
//             manufacturingYear: 2014
//         }
//     }
// }
// console.log("The store name is " + store1.storeName + ", in use of the CNPJ " + store1.CNPJ + ". ")
// //or
// let store1 = {
//     storeName: "Carlo Vehicles",
//     CNPJ: "483.233.746-43",
//     adress: {
//         street: "4th Avenue",
//         number: 81
//     },
//     stock: [
//         {
//             model: "S",
//             brand: "Tesla",
//             manufacturingYear: 2021
//         },
//         {
//             model: "March",
//             brand: "Nissan",
//             manufacturingYear: 2016
//         },
//         {
//             model: "C3",
//             brand: "Citroën",
//             manufacturingYear: 2014
//         }
//     ]
// }

// for(let stock of store1.stock){
//     console.log(stock.model, stock["brand"], stock.manufacturingYear)
// }   

