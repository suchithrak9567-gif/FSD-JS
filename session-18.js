// // Function declaration
// function calculateDeliveryCharge(distance) {
//     return distance > 5 ? 50 : 20;
// }

// // Arrow function with default parameter
// const applyDiscount = (amount, discount = 0) => amount - amount * discount;

// function placeYourOrder(order, discountType, callback) {

//     // Destructuring
//     const {
//         customerName,
//         distance,
//         item
//     } = order;

//     // Calculate total price
//     const totalPrice = item.reduce(
//         (sum, { price, quantity = 1 }) => sum + price * quantity,
//         0
//     );

//     // Apply discount
//     const discountedPrice = discountType(totalPrice);

//     // Add delivery charge
//     const finalAmount =
//         discountedPrice + calculateDeliveryCharge(distance);

//     // Callback
//     callback(customerName, finalAmount);
// }

// // Sample order
// const order = {
//     customerName: "John Doe",
//     distance: 8, // in kilometers
//     item: [
//         { name: "Pizza", price: 300, quantity: 2 },
//         { name: "Burger", price: 150 } // quantity defaults to 1
//     ]
// };

// // 10% festival discount
// const festivalDiscount = total => applyDiscount(total, 0.10);

// // Place order
// placeYourOrder(order, festivalDiscount, (name, finalAmount) => {
//     console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount} for your order.`);
// });








// change discount 5%



// Function declaration
// function calculateDeliveryCharge(distance) {
//     return distance > 5 ? 50 : 20;
// }

// // Arrow function with default parameter
// const applyDiscount = (amount, discount = 0) => amount - amount * discount;

// function placeYourOrder(order, discountType, callback) {

//     // Destructuring
//     const {
//         customerName,
//         distance,
//         item
//     } = order;

//     // Calculate total price
//     const totalPrice = item.reduce(
//         (sum, { price, quantity = 1 }) => sum + price * quantity,
//         0
//     );

//     // Apply discount
//     const discountedPrice = discountType(totalPrice);

//     // Add delivery charge
//     const finalAmount =
//         discountedPrice + calculateDeliveryCharge(distance);

//     // Callback
//     callback(customerName, finalAmount);
// }

// // Sample order
// const order = {
//     customerName: "John Doe",
//     distance: 8, // in kilometers
//     item: [
//         { name: "Pizza", price: 300, quantity: 2 },
//         { name: "Burger", price: 150 } // quantity defaults to 1
//     ]
// };

// // 10% festival discount
// const festivalDiscount = total => applyDiscount(total, 0.5);

// // Place order
// placeYourOrder(order, festivalDiscount, (name, finalAmount) => {
//     console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount} for your order.`);
// });


//distance changed 2


// // Function declaration
// function calculateDeliveryCharge(distance) {
//     return distance > 5 ? 50 : 20;
// }

// // Arrow function with default parameter
// const applyDiscount = (amount, discount = 0) => amount - amount * discount;

// function placeYourOrder(order, discountType, callback) {

//     // Destructuring
//     const {
//         customerName,
//         distance,
//         item
//     } = order;

//     // Calculate total price
//     const totalPrice = item.reduce(
//         (sum, { price, quantity = 1 }) => sum + price * quantity,
//         0
//     );

//     // Apply discount
//     const discountedPrice = discountType(totalPrice);

//     // Add delivery charge
//     const finalAmount =
//         discountedPrice + calculateDeliveryCharge(distance);

//     // Callback
//     callback(customerName, finalAmount);
// }

// // Sample order
// const order = {
//     customerName: "John Doe",
//     distance: 2, // in kilometers
//     item: [
//         { name: "Pizza", price: 300, quantity: 2 },
//         { name: "Burger", price: 150 } // quantity defaults to 1
//     ]
// };

// // 10% festival discount
// const festivalDiscount = total => applyDiscount(total, 0.10);

// // Place order
// placeYourOrder(order, festivalDiscount, (name, finalAmount) => {
//     console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount} for your order.`);
// });



// change the difault 1 distance declear default value in destructuring

// Function declaration
function calculateDeliveryCharge(distance) {
    return distance > 5 ? 50 : 20;
}

// Arrow function with default parameter
const applyDiscount = (amount, discount = 0) => amount - amount * discount;

function placeYourOrder(order, discountType, callback) {

    // Destructuring
    const {
        customerName,
        distance=2,
        item
    } = order;

    // Calculate total price
    const totalPrice = item.reduce(
        (sum, { price, quantity = 1 }) => sum + price * quantity,
        0
    );

    // Apply discount
    const discountedPrice = discountType(totalPrice);

    // Add delivery charge
    const finalAmount =
        discountedPrice + calculateDeliveryCharge(distance);

    // Callback
    callback(customerName, finalAmount);
}

// Sample order
const order = {
    customerName: "John Doe",
    distance: 8, // in kilometers
    item: [
        { name: "Pizza", price: 300, quantity: 2 },
        { name: "Burger", price: 150 } // quantity defaults to 1
    ]
};

// 10% festival discount
const festivalDiscount = total => applyDiscount(total, 0.10);

// Place order
placeYourOrder(order, festivalDiscount, (name, finalAmount) => {
    console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount} for your order.`);
});