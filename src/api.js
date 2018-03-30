export const endpoints = [
    {
        request: 'POST /api/heart_rate',
        usage: 'Stores heart rate measurements.',
        in: {
            'user_email': 'me@harveyshi.com',
            'user_age': 100,
            'heart_rate': 82
        }
    },
    {
        request: 'GET /api/heart_rate/<user_email>',
        usage: 'Retrieves a list of the heart rate measurements for the specified user.'
    },
    {
        request: 'GET /api/heart_rate/average/<user_email',
        usage: 'Returns the average heart rate measurement for the specified user.'
    },
    {
        request: 'POST /api/heart_rate/interval_average',
        usage: 'Returns the average heart rate for a user in the interval following a specified time.',
        in: {
            'user_email': 'me@harveyshi.com',
            'heart_rate_average_since': '2018-08-18T01:23:45.6789'
        },
        out:{
            'average': 77.23,
            'tachycardia': false
        }      
    },
]