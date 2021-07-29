'use strict'
import * as AWS from 'aws-sdk';
import * as uuid from 'uuid';
AWS.config.update({region: 'eu-west-1'});

module.exports.add = async (events: any = {}): Promise<any> => {
    const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const input = JSON.parse(events.body);

    const params = {
        TableName: input.TableName,
        Item: {
            id: uuid.v1(),
            item: input.Item.item,
            amount: input.Item.amount,
            payment: input.Item.payment,
            username: input.Item.username
        },
    }

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
                message: 'Successfully added the budget item',
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