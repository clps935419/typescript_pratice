//enum列舉值
//例如我有三種值狀態利用三種數字去代表
//0是關播
//1是開播
//2是多人開播

enum live {
    'streaming'= 1,
    'close'= 0,
    'mutiple'=2
}
let state =0
if(state === live.streaming){
    //如果開播就做哪些事
}