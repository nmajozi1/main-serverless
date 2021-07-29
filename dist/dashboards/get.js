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
module.exports.get = async (events = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const params = {
        TableName: 'dashboards'
    };
    try {
        const data = await docClient.scan(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: true,
                message: 'Dashboards retrieved successfully',
                data: data.Items,
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
                data: error
            })
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Rhc2hib2FyZHMvZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7O0FBQ1osNkNBQStCO0FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLFNBQWMsRUFBRSxFQUFnQixFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxZQUFZO0tBQzFCLENBQUM7SUFFRixJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxtQ0FBbUM7Z0JBQzVDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSzthQUNuQixDQUFDO1NBQ0wsQ0FBQTtLQUVKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFFWixPQUFPO1lBQ0gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0wsQ0FBQTtLQUVKO0FBRUwsQ0FBQyxDQUFBIn0=