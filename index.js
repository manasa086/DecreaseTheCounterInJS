var counter = 10;

var myvar = setInterval(startInterval, 2000);
let arr = [];
let res;
(function counter_func(counter) {
    (function a(counter) {
        res = counter.toString() + "..";
        arr.push(res);
        counter--;
        (function b(counter) {
            res = counter.toString() + "..";
            arr.push(res);
            counter--;
            (function c(counter) {
                res = counter.toString() + "..";
                arr.push(res);
                counter--;
                (function d(counter) {
                    res = counter.toString() + "..";
                    arr.push(res);
                    counter--;
                    (function e(counter) {
                        res = counter.toString() + "..";
                        arr.push(res);
                        counter--;
                        (function f(counter) {
                            res = counter.toString() + "..";
                            arr.push(res);
                            counter--;
                            (function g(counter) {
                                res = counter.toString() + "..";
                                arr.push(res);
                                counter--;
                                (function h(counter) {
                                    res = counter.toString() + "..";
                                    arr.push(res);
                                    counter--;
                                    (function i(counter) {
                                        res = counter.toString() + "..";
                                        arr.push(res);
                                        counter--;
                                        (function j(counter) {
                                            res = counter.toString() + "..";
                                            arr.push(res);
                                            counter--;

                                            (function k(counter) {
                                                res = "HAPPY MORNING";
                                                arr.push(res);

                                            })(counter);
                                        })(counter);
                                    })(counter);
                                })(counter);
                            })(counter);
                        })(counter);
                    })(counter);
                })(counter);
            })(counter);
        })(counter);

    })(counter);

})(counter);
let i = 0;

function startInterval() {
    document.getElementById('p').innerHTML = arr[i];
    i++;
    if (i == 11) {
        stopCounter();
    }
}

function stopCounter() {

    clearInterval(myvar);
}