'use strict'
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.get = async (events: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const params = {
        TableName: 'dashboards'
    };

    try {
        const data = await docClient.scan(params).promise();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: true,
                message: 'Dashboards retrieved successfully',
                data: data.Items,
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