
const initialState = {
    products: [
        {
            Title: 'Red Shirt',
            Price: 20,
            Description: 'Red like a tomato',
            ImageUrl: 'https://i.ebayimg.com/images/g/3YgAAOSwcZ1cHLMj/s-l400.jpg'
        },
        {
            Title: 'Trousers',
            Price: 35,
            Description: 'Stylish mens throusers',
            ImageUrl: 'https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/0a82767dab00426169ea376c94411d75219196fd_Y213US05_000_1.jpeg'
        },
        {
            Title: 'Yellow...',
            Price: 30,
            Description: 'Very yellow',
            ImageUrl: 'https://cdn.lookastic.ru/%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D1%81%D0%B2%D0%B8%D1%82%D0%B5%D1%80-%D1%81-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B5%D0%B7%D0%BE%D0%BC/sun-68-original-8652890.jpg'
        },
        {
            Title: 'A Pan',
            Price: 50,
            Description: 'Comfortable lightweight a pen',
            ImageUrl: 'https://static01.nyt.com/images/2011/01/26/business/pan2/pan2-blog480.jpg'
        }

    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}


