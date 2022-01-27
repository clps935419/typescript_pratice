//擴充
// type animal ={
//     name:string
// }

// type dog = animal & {
//     age:number
// }
// type cat = animal

// let dog: dog ={
//     name:'aaa',
//     age:12
// }
// let cat: cat ={
//     name:'aaa'
// }

// interface animal{
//     name:string
// }
// interface dog extends animal{
//     age:number
// }

// let dog: dog ={
//     name:'aaa',
//     age:12
// }

//合併
//只有interface可以這樣寫，type不行
interface animal {
    name:string
}
interface animal {
    age:number
}
let dog:animal={
    name:'aaa',
    age:13
}

