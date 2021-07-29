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
const uuid = __importStar(require("uuid"));
AWS.config.update({ region: 'eu-west-1' });
module.exports.add = async (event = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const input = JSON.parse(event.body);
    const params = {
        TableName: input.TableName,
        Item: {
            id: uuid.v1(),
            item: input.Item.item,
            amount: input.Item.amount,
            payment: input.Item.payment,
            username: input.Item.username
        },
    };
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
                message: 'Successfully added the goal item',
                data: data,
            })
        };
    }
    catch (error) {
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
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dvYWxzL2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7OztBQUNaLDZDQUErQjtBQUMvQiwyQ0FBNkI7QUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsUUFBYSxFQUFFLEVBQWdCLEVBQUU7SUFDekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQzFCLElBQUksRUFBRTtZQUNGLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDM0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUNoQztLQUNKLENBQUE7SUFFRCxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5ELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxrQ0FBa0M7Z0JBQzNDLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQztTQUNMLENBQUM7S0FFTDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBRVosT0FBTztZQUNILFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQztTQUNMLENBQUE7S0FFSjtBQUNMLENBQUMsQ0FBQyJ9