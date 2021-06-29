function receivesAFunction(test) {
    return test();
};

function returnsANamedFunction() {
    return function hello(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}