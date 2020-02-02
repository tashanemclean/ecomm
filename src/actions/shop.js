import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'ALL'
            },
            {
                _id: 1,
                title: 'PRODUCTS'
            },
            {
                _id: 2,
                title: 'BUY'
            },
            {
                _id: 3,
                title: 'RESOURCES'
            },
            {
                _id: 4,
                title: 'PROMOTIONS'
            },
            {
                _id: 5,
                title: 'WHO WE ARE'
            },
            {
                _id: 6,
                title: 'CONTACT US'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript In The Browser',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'

            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 1, 4],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 4,
                title: 'Javascript Development',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 6,
                title: 'Advance OOP',
                description: 'The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.',
                price: 1.99,
                belongsTo: [0, 1, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            }
        ]
    })
}