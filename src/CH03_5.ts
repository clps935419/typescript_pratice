//斷言
let name2:unknown ='AAA'
name2 = 999

let name3 = name2 as string

//應用
async function test() {
    const res =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //斷言能限制JSON回傳參數
    const data =await res.json() as {
        useId:number,
        id:number,
        title:string,
        completed:string
    }
    console.log('data',data);
}
test();

//強制斷言
let name4 = 999
let name5 = name4 as unknown as string

//如果要把function回傳的東西定義好，就要使用斷言的操作
function test2(){
    return [1,2,'a'] as [number,number,string]
}
const [a,b,c] = test2();

