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
module.exports.add = async (event = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const params = JSON.parse(event.body);
    try {
        const data = await docClient.put(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'User has been successfully created.',
                input: params,
            }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXJzL2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7OztBQUNiLDZDQUErQjtBQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUN6RCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEMsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUN6QztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNsQjtnQkFDRSxPQUFPLEVBQUUscUNBQXFDO2dCQUM5QyxLQUFLLEVBQUUsTUFBTTthQUNkLENBQ0Y7U0FDRixDQUFDO0tBRUg7SUFBQyxPQUFNLEtBQUssRUFBRTtRQUViLE9BQU87WUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFO2dCQUNQLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDekM7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixLQUFLLEVBQUUsTUFBTTthQUNkLENBQUM7U0FDSCxDQUFBO0tBRUY7QUFDSCxDQUFDLENBQUMifQ==