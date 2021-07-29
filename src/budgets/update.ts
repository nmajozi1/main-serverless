'use strict'
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.update = async (events: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const params = JSON.parse(events.body);

    try {
        const data = await docClient.put(params).promise();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: true,
                message: 'Successfully updated the budget item',
                data: params,
            })
        };

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
                input: error,
            })
        }

    }
};