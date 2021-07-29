'use strict'
import * as AWS from 'aws-sdk'
AWS.config.update({region: 'eu-west-1'});

module.exports.delete = async (event: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const input = JSON.parse(event.body);

    const params = {
        TableName: 'budgets',
        Key: {
            id: input.Key.id
        }
    };

    try {
        const data = await docClient.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'Budget has been successfully deleted',
                input: input,
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
                input: error,
            })
        }
    }
}