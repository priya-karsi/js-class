function callback1(callback2Param){
    console.warn("callback 1 called");
    callback2Param()
}
function callback2(){
    console.warn("callback 2 called");
}
function mainFunction(callback1Param, callback2Param){
    console.warn("Performing main function tasks");
    callback1Param(callback2Param);
}

mainFunction(callback1, callback2);
