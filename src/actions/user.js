import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from "./types"

export function setPurchaseDetail(_id){
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript In The Browser',
                    description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: "123532",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: '12355 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.40,
                orderNumber: "353636363535ddh",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Jon Doe",
                    shippingAddress: '12355 West State Street'
                }
            },
            {
                _id: 2,
                total: 9.40,
                orderNumber: "agsg345363",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Jane Doe",
                    shippingAddress: '12355 West State Street'
                }
            },
            {
                _id: 3,
                total: 40.00,
                orderNumber: "123532",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: '12355 West State Street'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: "343463353",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Mike Young",
                    shippingAddress: '12355 West State Street'
                }
            },    
            {
                _id: 5,
                total: 32.40,
                orderNumber: "32535ehhss",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Christen Black",
                    shippingAddress: '12355 West State Street'
                }
            },            
            {
                _id: 6,
                total: 76.90,
                orderNumber: "2998577ww44",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Michelle Brin",
                    shippingAddress: '12355 West State Street'
                }
            },
            {
                _id: 7,
                total: 15.34,
                orderNumber: "aag38w8w5",
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: "Jesicca White",
                    shippingAddress: '12355 West State Street'
                }
            },
        ]
    })
}