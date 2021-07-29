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
                body: JSON.stringify({
                    message: data,
                    dataPassword: data.Item.password,
                    inputPassword: inputJson.password,
                    input: inputJson,
                }),
            };
        }
        else {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Incorrect password.',
                    input: inputJson,
                })
            };
        }
    }
    catch (error) {
        if (error.message === "Cannot read property 'password' of undefined") {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Incorrect username',
                    input: inputJson,
                })
            };
        }
        else {
            return {
                statusCode: error.statusCode,
                body: JSON.stringify({
                    message: error.message,
                    input: inputJson,
                })
            };
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXNlcnMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7QUFDYiw2Q0FBK0I7QUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsUUFBYSxFQUFFLEVBQWdCLEVBQUU7SUFDN0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLE1BQU0sTUFBTSxHQUFHO1FBQ2IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQzlCLEdBQUcsRUFBRTtZQUNILFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtTQUM3QjtLQUNGLENBQUE7SUFFRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5ELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3pELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQ2xCO29CQUNFLE9BQU8sRUFBRSxJQUFJO29CQUNiLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ2hDLGFBQWEsRUFBRSxTQUFTLENBQUMsUUFBUTtvQkFDakMsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCLENBQ0Y7YUFDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ25CLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDO2FBQ0gsQ0FBQTtTQUNGO0tBQ0Y7SUFBQyxPQUFNLEtBQUssRUFBRTtRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyw4Q0FBOEMsRUFBRTtZQUNwRSxPQUFPO2dCQUNMLFVBQVUsRUFBRSxHQUFHO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixLQUFLLEVBQUUsU0FBUztpQkFDakIsQ0FBQzthQUNILENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3RCLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDO2FBQ0gsQ0FBQTtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUMifQ==