'use strict'
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.get = async (event: any = {}): Promise<any> => {
    const docCLient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});
    const input: { username: string } = JSON.parse(event.body);
    let budgetItems: any = [];

    const params = {
        TableName: 'budgets'
    }

    try {
        const data = await docCLient.scan(params).promise();

        if (data.Items) {
            data.Items.forEach(budgetItem => {
                if (budgetItem.username === input.username) {
                    budgetItems.push(budgetItem)
                }
            });

            if (budgetItems.length > 0) {
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                    },
                    body: JSON.stringify({
                        success: true,
                        message: 'successfully retrieved the budgets',
                        data: budgetItems
                    })
                }
            }

            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                    success: false,
                    message: `no budget list items found for ${input.username}`,
                    data: budgetItems
                })
            }
        }

        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: false,
                message: `no data items found for ${input.username}`,
                data: budgetItems
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