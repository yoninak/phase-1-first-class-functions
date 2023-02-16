function receivesAFunction(callback) {
  console.log (callback()) ;
}

function returnsANamedFunction() {
    return function named(){
        
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}