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
module.exports.delete = async (event = {}) => {
    const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const params = JSON.parse(event.body);
    try {
        const data = await docClient.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'deleted user successfully',
                input: params
            }),
        };
    }
    catch (error) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: error.statusCode,
                input: params
            }),
        };
    }
    ;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXJzL2RlbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7OztBQUNaLDZDQUErQjtBQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUM1RCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEMsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNoQjtnQkFDSSxPQUFPLEVBQUUsMkJBQTJCO2dCQUNwQyxLQUFLLEVBQUUsTUFBTTthQUNoQixDQUNKO1NBQ0osQ0FBQTtLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNoQjtnQkFDSSxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQ3pCLEtBQUssRUFBRSxNQUFNO2FBQ2hCLENBQ0o7U0FDSixDQUFBO0tBQ0o7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFBIn0=