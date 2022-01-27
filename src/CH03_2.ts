const arr = [1,2]
const arr2 = [1,2,'3']
//只能使用文字
const arr3:string[] = ['1','2','3'];
console.log('arr3',arr3);

//傳入數字就會錯
// arr3.push(100)

//另一種寫法
const arr4: Array<string> =[]

const arr5: (string | boolean)[] =[]

//特定位置
const arr6:[string,number,boolean] =['1',9,true]
const arr7:[number,number][] =[[9,9]]