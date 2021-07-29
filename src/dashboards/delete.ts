'use strict'
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.delete = async (event: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const params = JSON.parse(event.body);

    try {
        const data = docClient.delete(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Dashboard successfully removed',
                input: params
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
                message: error.message,
                input: params
            })
        }

    }

}