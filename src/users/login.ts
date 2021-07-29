'use strict';
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'eu-west-1'});

module.exports.login = async (event: any = {}): Promise<any> => {
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

  const inputJson = JSON.parse(event.body);

  const params = {
    TableName: inputJson.TableName,
    Key: {
      username: inputJson.username
    }
  }

  try {
    const data = await docClient.get(params).promise();

    if(data.Item && data.Item.password === inputJson.password) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(
          {
            success: true,
            message: `successfully logged in user ${params.Key.username}`,
            data: data.Item,
          }
        ),
      };
    } else {
      return {
        statusCode: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          success: false,
          message: 'Incorrect password.',
          data: [],
        })
      }
    }
  } catch(error) {
    if (error.message === "Cannot read property 'password' of undefined") {
      return {
        statusCode: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          success: false,
          message: 'Incorrect username',
          data: [],
        })
      }
    } else {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        statusCode: error.statusCode,
        body: JSON.stringify({
          success: false,
          message: error.message,
          data: [],
        })
      }
    }
  }
};