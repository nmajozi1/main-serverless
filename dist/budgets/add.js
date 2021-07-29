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
module.exports.add = async (events = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
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
                message: 'Successfully added the budget item',
                data: params,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1ZGdldHMvYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7O0FBQ1osNkNBQStCO0FBQy9CLDJDQUE2QjtBQUM3QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxTQUFjLEVBQUUsRUFBZ0IsRUFBRTtJQUMxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEMsTUFBTSxNQUFNLEdBQUc7UUFDWCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsSUFBSSxFQUFFO1lBQ0YsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDekIsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztZQUMzQixRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ2hDO0tBQ0osQ0FBQTtJQUVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkQsT0FBTztZQUNILFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDO1NBQ0wsQ0FBQztLQUVMO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFFWixPQUFPO1lBQ0gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDO1NBQ0wsQ0FBQTtLQUVKO0FBQ0wsQ0FBQyxDQUFDIn0=