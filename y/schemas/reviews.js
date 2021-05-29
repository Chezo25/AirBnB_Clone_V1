// Creating of Custom type

export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'object',
    fields: [{
            name: 'reviewDescription',
            title: 'Review Description',
            type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [{
                        title: '5 Star',
                        value: '5 Star'
                    },
                    {
                        title: '4 Star',
                        value: '4 Star'
                    },
                    {
                        title: '3 Star',
                        value: '3 Star'
                    },
                    {
                        title: '2 Star',
                        value: '2 Star'
                    },
                    {
                        title: '1 Star',
                        value: '1 Star'
                    },
                ],
                layout: 'dropdown'
            },
        },
    ]
}