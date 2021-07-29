'use strict'
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.delete = async (event: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const params = JSON.parse(event.body);

    try {
        const data = await docClient.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    message: 'deleted user successfully',
                    input: params
                }
            ),
        }
    } catch (error) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    message: error.statusCode,
                    input: params
                }
            ),
        }
    };
}