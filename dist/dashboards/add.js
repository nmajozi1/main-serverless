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
module.exports.add = async (events = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const params = JSON.parse(events.body);
    try {
        const data = await docClient.put(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'Successfully add dashboard',
                input: params,
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
                message: error.message,
                input: params,
            })
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Rhc2hib2FyZHMvYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7O0FBQ1osNkNBQStCO0FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLFNBQWMsRUFBRSxFQUFnQixFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2QyxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5ELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSw0QkFBNEI7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNO2FBQ2hCLENBQUM7U0FDTCxDQUFDO0tBRUw7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUVaLE9BQU87WUFDSCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixLQUFLLEVBQUUsTUFBTTthQUNoQixDQUFDO1NBQ0wsQ0FBQTtLQUVKO0FBQ0wsQ0FBQyxDQUFDIn0=