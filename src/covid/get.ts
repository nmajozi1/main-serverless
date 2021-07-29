'use strict'
const axios = require('axios');


module.exports.get = async (event: any = {}): Promise<any> => {
    const cumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv';
    try {

        const data = axios.get(cumulativeUrl)

        if (data) {

            setTimeout(() => {

                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                    },
                    body: JSON.stringify({
                        success: true,
                        message: 'successfully retrieved the covid items',
                        data: data
                    })
                }
                
            }, 1000);

        }

        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: false,
                message: `no covid list items found`,
                data: []
            })
        }

    } catch (error) {

        return {
            statusCode: error.statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: false,
                message: error.message,
                data: error
            })
        }

    }
}