// Write your cade below:
function caclRemaindar(a,b) {
    return a%b;
};

function caclSum(array) {
    var result = 0;
    array.forEach(element => {
        result += element;
    });
    return result;
};

function caclSumInConditon(array,number) {
    var result = 0;
    array.forEach(element => {
        if(element<number)
        result += element;
    });
    return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}