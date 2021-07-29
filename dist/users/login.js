'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = __importStar(require("aws-sdk"));
AWS.config.update({ region: 'eu-west-1' });
module.exports.login = async (event = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const inputJson = JSON.parse(event.body);
    const params = {
        TableName: inputJson.TableName,
        Key: {
            username: inputJson.username
        }
    };
    try {
        const data = await docClient.get(params).promise();
        if (data.Item && data.Item.password === inputJson.password) {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                    success: true,
                    message: `successfully logged in user ${params.Key.username}`,
                    data: data.Item,
                }),
            };
        }
        else {
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
            };
        }
    }
    catch (error) {
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
            };
        }
        else {
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
            };
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7QUFDYiw2Q0FBK0I7QUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsUUFBYSxFQUFFLEVBQWdCLEVBQUU7SUFDN0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLE1BQU0sTUFBTSxHQUFHO1FBQ2IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQzlCLEdBQUcsRUFBRTtZQUNILFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtTQUM3QjtLQUNGLENBQUE7SUFFRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5ELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3pELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLDZCQUE2QixFQUFFLEdBQUc7b0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7aUJBQ3pDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNsQjtvQkFDRSxPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsK0JBQStCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUM3RCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2hCLENBQ0Y7YUFDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLDZCQUE2QixFQUFFLEdBQUc7b0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7aUJBQ3pDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO2FBQ0gsQ0FBQTtTQUNGO0tBQ0Y7SUFBQyxPQUFNLEtBQUssRUFBRTtRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyw4Q0FBOEMsRUFBRTtZQUNwRSxPQUFPO2dCQUNMLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRTtvQkFDUCw2QkFBNkIsRUFBRSxHQUFHO29CQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2lCQUN6QztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsSUFBSSxFQUFFLEVBQUU7aUJBQ1QsQ0FBQzthQUNILENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUU7b0JBQ1AsNkJBQTZCLEVBQUUsR0FBRztvQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTtpQkFDekM7Z0JBQ0QsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO2FBQ0gsQ0FBQTtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUMifQ==