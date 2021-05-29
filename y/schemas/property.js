export default {
    name: 'property',
    title: 'propertyname',
    type: 'document',
    fields: [{
            name: 'propertyname',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'Location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'PropertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [{
                        title: 'House',
                        value: 'house'
                    },
                    {
                        title: 'Room',
                        value: 'room'
                    },
                    {
                        title: 'Condo',
                        value: 'condo'
                    },
                    {
                        title: 'Boutique Hotel',
                        value: 'boutique hotel'
                    },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        // {
        //      name: 'image',
        //      title: 'Image',
        //      type: 'array',
        //     of:[{type:'propertyImage'}]
        //  },
        {
            name: 'pricePerNight',
            title: 'Price Per Night',
            type: 'number',
        },
        {
            name: 'beds',
            title: 'Beds',
            type: 'number',
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 500,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }

    ]
}