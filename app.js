

var counter = 0, inter;
var v1 = document.getElementById("leftTextfield");
var v2 = document.getElementById("rightTextfield");

document.getElementById("btn1").addEventListener("click", function () {

    stopInterval();

    var leftValue = v1.value;
    var valueLength = leftValue.length;
    var rightValue = v2.value;

    inter = setInterval(function () {

        if (valueLength - 1 <= 0) {
            stopInterval();
        }
        // console.log("Length of string:" + valueLength + " LeftValue: " + leftValue);

        rightValue += leftValue.charAt(0);
        leftValue = leftValue.slice(1, valueLength);
        v1.value = leftValue;
        v2.value = rightValue;

        // console.log(rightValue + " " + leftValue + " " + counter);
        valueLength--;
        counter++;

    }, 1000);

});

document.getElementById("btn2").addEventListener("click", function () {

    stopInterval();

    var leftValue = v1.value;
    var rightValue = v2.value;
    var valueLength = rightValue.length;

    inter = setInterval(function () {

        if (valueLength - 1 <= 0) {
            stopInterval();
        }
        // console.log("Length of string:" + valueLength + " RightValue: " + rightValue);

        leftValue = rightValue.charAt(valueLength - 1) + leftValue;
        rightValue = rightValue.slice(0, valueLength - 1);
        v1.value = leftValue;
        v2.value = rightValue;

        // console.log(rightValue + " " + leftValue + " " + counter);
        valueLength--;
        counter++;


    }, 1000);

});

document.getElementById("btn3").addEventListener("click", function () {
    stopInterval();
});

function stopInterval() {
    clearInterval(inter);
}