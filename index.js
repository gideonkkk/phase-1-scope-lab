// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'fred';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe fred';
}