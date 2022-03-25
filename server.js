// const stackMethod =(n)=>{
//     let stack = []
//     let value = "654321"
//     let review = ""

//     for(let i=0; i < value.length; i++){
//         stack.push(value[i])
//     }

//     console.log(stack)

//     for(let i=0; i < value.length; i++){
//         review += stack.pop()
//     }

// console.log(review)
// }

// class stack{
//     constructor(){
//         this.storage={}
//         this.count = 0
//     }

//     add(value){
//         this.storage[this.count]=value;
//         this.count++
//     }

//     print(){
//         return this.storage
//     }

//     log(){
//         let data = this.storage
//         let loggie = []

//         for (let k in data){
//             loggie.push(data[k])
//         }

//         return loggie
//     }

//     size(){
//         return this.count
//     }

//     peek(){
//         return this.storage[this.count-1]
//     }

//     remove(){
//         if(this.count === 0){
//             return null
//         }
//         this.count--
//         return this.storage[this.count]
//     }
// }

// const model = new stack()

// model.add("mide")
// model.add("Toheeb")
// model.add("Micheal")
// model.add("Bukola")
// model.add("Jide")
// model.remove("Bello")

// console.log(model.print())
// console.log(model.peek())
// console.log(model.log())


    // let name = []
    // let newName = "Bello"
    // let review = ""

    // for(let i=0; i < newName.length; i++){
    //     name.push(newName[i])
    // }

    // console.log(name)

    // for(let i=0; i < newName.length; i++){
    //     review += name.shift()
    // }



// const reUse = (n)=>{
//     let name = []
//     let newName = n.toLowerCase()
//     let review = ""

//     for(let i=0; i < newName.length; i++){
//         name.push(newName[i])
//     }

//     console.log(name)

//     for(let i=0; i < newName.length; i++){
//         review += name.shift()
//     }

//     console.log(review)
// }

// console.log(reUse("ADELAG"))

// class Queue{
//     constructor(){
//         this.storage = []
//         this.count = 0
//     }

//     add(value){
//         this.storage[this.count]= value
//         this.count++
//     }

//     size(){
//         return this.count
//     }
// }

// const mim = new Queue()

// mim.add("miguel")

// conso

// const propmt = require('prompt-sync')()

// console.log(`'Welcome to the platform'`)
// let userName = (propmt('what is your name?  '))
// console.log(`'Mr/Mrs ${userName}, How many hours would you like study?'`)
// let studyTime = parseInt(propmt(`Type your response here____`))
// console.log(`Now that you have decided to study for ${studyTime}hrs`)
// let access = propmt((`Please enter your name to gain access to our resources for free  `))

// if(access === userName){
//     console.log(`welcome Mr/Mrs ${userName}`)
// }else {
//     console.log(`You must be an intruder, get out!!!`)
//     process.exit()
// }

// console.log(`Subjects`)
// let subject1 = (propmt('1.  '))
// let subject2 = (propmt('2.  '))
// let subject3 = (propmt('3.  '))
// let subject4 = (propmt('4.  '))

// let subjects = {
//     subject1,
//     subject2,
//     subject3,
//     subject4,
// }


// console.log(`You have succefully finished your study time of ${studyTime}hrs, subjects:`, subjects.subject1, subjects.subject2, subjects.subject3, subjects.subject4)

// Higest = 900
// let mid = Math.floor((Higest)/2)
// let mean = Math.floor((mid)/2)
// let mode = Math.floor((mid + mean))



// console.log(`Results`)
// if(studyTime <= mean){
//     console.log(`Mr/Mrs ${userName}, Your Study score is below average : F9`)
//     let que = (propmt('would you like to continue so you can improve your score?  '))
//     let y = "yes"
//     if(que === y){
//         let que2 = parseInt(propmt(`How many hours do you want to add?   `))
//         let add = studyTime + que2
//         console.log(`Your study Hours is now ${add}, please contnue learning`)
//         if(add <= mid){
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//             console.log(`Thank you for using our plaftform, you scored ${add}`)
//             console.log(`You are a failure`)
//         }else{
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//             console.log(`Thank you for using our plaftform, you scored ${add}`)
//         }
//     }else{
//         console.log(`Get the hell outta the platform, olodo score ${studyTime}`);
//         process.exit()
//     }
// }else if(studyTime < mid){
//     console.log(`Mr/Mrs ${userName}, Your Study score is fair : D8`)
//     let que = (propmt('would you like to continue so you can improve your score?  '))
//     let y = "yes"
//     if(que === y){
//         let que2 = parseInt(propmt(`How many hours do you want to add?   `))
//         let add = studyTime + que2
//         console.log(`Your study Hours is now ${add}, please contnue learning`)
//         if(add <= mid){
//             console.log(`You are a failure`)
//         }else{
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//             console.log(`Thank you for using our plaftform, you scored ${add}`)
//         }
//     }else{
//         console.log(`Get the hell outta the platform, olodo score ${studyTime}`);
//         process.exit()
//     }
// }else if(studyTime >= mean){
//     let que = (propmt('would you like to continue so you can improve your score?  '))
//     let y = "yes"
//     if(que === y){
//         let que2 = parseInt(propmt(`How many hours do you want to add?   `))
//         let add = studyTime + que2
//         console.log(`Your study Hours is now ${add}, please contnue learning`)
//         if(add <= mid){
//             console.log(`You are a failure`)
//         }else{
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//             console.log(`Thank you for using our plaftform, you scored ${add}`)
//         }
//     }else{
//         console.log(`Get the hell outta the platform, olodo score ${studyTime}`);
//         process.exit()
//     }
//     console.log(`Student info`)
//     console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//     console.log(`Thank you for using our plaftform, you scored ${studyTime}`)
// }else if(studyTime >= mode){
//     console.log(`Mr/Mrs ${userName}, Your Study score is very good you are champepe : B`)
//     let que = (propmt('would you like to continue?  '))
//     let y = "yes"
//     if(que === y){
//         let que2 = parseInt(propmt(`Type "continue"   `))
//         if(que2 === y){
//             console.log(`You have Full Access Now`)
//         }else{
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4},`)
//             console.log()
//             console.log(`Thank you for using our plaftform, you scored ${studyTime}`)
//         }
//     console.log(`Student info`)
//     console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//     console.log(`Thank you for using our plaftform, you scored ${studyTime}`)
//     } 
// }else if(studyTime >= Higest){
//     console.log(`Mr/Mrs ${userName}, Your Study score is too high, you just won yourself a lexus 350RDX 2022 model : B`)
//     let que = (propmt('would you like to continue?  '))
//     let y = "yes"
//     if(que === y){
//         let que2 = parseInt(propmt(`Add more subjects? Yes / No   `))
//         if(que2 === y){
//             console.log(`You have Full Access Now`)
//         }else{
//             console.log(`Student info`)
//             console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4},`)
//             console.log()
//             console.log(`Thank you for using our plaftform, you scored ${studyTime}`)
//         }
//     }
//     console.log(`Student info`)
//     console.log(`Name: ${userName}, Subjects: ${subject1}, ${subject2}, ${subject3}, ${subject4} `)
//     console.log(`Thank you for using our plaftform, you scored ${studyTime}`)
// }



// let k = i*j
// console.log(k)


// let lNumber = 4
// let gNumber = parseInt(propmt('You are correct'))

// if(lNumber === gNumber){
//     console.log(parseInt(propmt('what is')))
// }else if(lNumber > gNumber){
//     console.log(parseInt(propmt('w')))
// }else if(lNumber < gNumber){
//     console.log(parseInt(propmt('whvyiku')))
// }




// const dataSet = [1,2,3]
// const dataSet1 = {
//     1:"one", 2:"two"
// }

// const search = (array, target){

// }

// let set = []
// for(let i in dataSet1){
//     set.push(dataSet1[i])
// }
// console.log(set)


// const dataSet = [1,2,3,4,5,6,7,8,9]
// const mySearch = (array, target) =>{
//     return recur(array, target, 0, array.length)
// }

// const recur =(array, target, left, right)=>{
//     let mid = Math.floor((left + right)/2)
//     if(left > right){
//         return undefined;
//     }else if(target === array[mid]){
//         return mid
//     }else if (target < array[mid]){
//         return recur(array, target, mid -1, right)
//     }else {
//         return recur(array, target, right, mid +1)
//     }
// }




// const weSearch = (array, target)=>{
//     let left = 0
//     let right = array.lenght

//     while (left <= right){
//         let mid = Math.floor((left + right)/2)

//         if(target === array[mid]){
//             return mid
//         }else if (target < array[mid]){
//             right = mid - 1
//         }else {
//             left = mid + 1
//         }
//     }
// }

// console.log(`veiw`)

// console.log(mySearch(dataSet, 2))

// const treeify = require('treeify')

// class node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BSM{
//     constructor(){
//         this.root = null
//     }

//     put(value){
//         const newNode = new node(value)
//         if(!this.root){
//             this.root = newNode
//             return this
//         }

//         let current = this.root
//         if(value < current.value){
//             if(!current.left){
//                 current.left = newNode
//                 return this
//             }
//             current.left = current
//         }else if(value > current.value){
//             if(!current.right){
//                 current.right = newNode
//                 return this
//             }
//             current.rigt = current
//         }else if(value === current){
//             return null
//         }
//     }
// }

// const newSearch = new BSM()

// newSearch.put(5)
// newSearch.put(20)
// newSearch.put(10)
// newSearch.put(29)

// console.log(newSearch)
// console.log(treeify.asTree (newSearch, true))


// const dataSet = [1,2,3,4,5,6,7,8,9]

// const look =(n)=>{
//     let j = dataSet.length
//     for(let i=0; i < j; i++){
//         if(n === dataSet[i])
//         console.log(`The data is found ${i}`)
        
//     }  console.log(`Cannot find data`)
// }

// look(9)




// const dataSet = [1,2,3,4,5,6,7,8,9]
// const mySearch = (array, target, left, right)=>{
//     let left = 0
//     let right = array.length
//     return mySearchRecur(array, target, left, right)
// }

// const mySearchRecur =(array, target, left, right)=>{

//     if(left > right){
//         return undefined
//     }
//     const mid = Math.floor((left + right)/2)
//     if(target === array[mid]){
//         return mid
//     }else if(target < array[mid]){
//         return mySearchRecur(array, target, mid - 1, right)
//     }else{
//         return mySearchRecur(array, target, left, mid + 1)
//     }
// }

// console.log(mySearch(dataSet, 4))

// const x = [22, 4,66, 23, 70, 50,21]
// console.log(x.sort((a, b)=>{
//     return a - b
// }))

// let num = 10
// for(i = 0; i < num; i++){
    
// }



// const run =(n)=>{
//     for(i = n; i >= 0; i--){
//         console.log(i)
//     }
// }

// run(10)


const recall =(n)=>{
    if(n === 0){
        return
    }
    console.log(n)
    return recall(n-1)
}

console.log(recall(20))