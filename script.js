
var myDiv = document.createElement("div");
myDiv.style.backgroundColor = "black";
myDiv.style.color = "blue";
myDiv.style.textAlign = "center";
myDiv.style.fontSize = "100px";
document.body.appendChild(myDiv);


// setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);
// function ten(){
//     console.log("10");
// }
// ten();

// function timeout_trigger() {
//     window.alert('Happy Birthday..!');   
// }

// function timeout_init() {
//     setTimeout('timeout_trigger()', 2000);
// }
// timeout_init();

function execute(a, cb){
    var result = a;
    cb(result);
      setTimeout(function(){
           result = 9;
           cb(result);
            setTimeout(function(){
               result = 8;
               cb(result);
                  setTimeout(function(){
                     result = 7;
                     cb(result);
                       setTimeout(function(){
                          result = 6;
                          cb(result);
                          setTimeout(function(){
                            result = 5;
                            cb(result);
                              setTimeout(function(){
                                  result = 4;
                                  cb(result);
                                      setTimeout(function(){
                                           result = 3;
                                           cb(result);
                                                setTimeout(function(){
                                                      result = 2;
                                                      cb(result);
                                                          setTimeout(function(){
                                                                 result = 1;
                                                                 cb(result);
                                                                 setTimeout(function(){
                                                                    result = "Happy BirthDay...!";
                                                                    cb(result);
                                                                }, 1000)
                                                          }, 1000)
                                                }, 1000)
                                      }, 1000)
                              }, 1000)
                          }, 1000)
                       }, 1000)
                  }, 1000)
            }, 1000)
       }, 1000)
}
execute(10, function(resultData){
    console.log(resultData);
    myDiv.innerText = resultData;
});
