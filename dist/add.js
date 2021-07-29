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
            body: JSON.stringify({
                message: 'User has been successfully created.',
                input: params,
            }),
        };
    }
    catch (error) {
        return {
            statusCode: error.statusCode,
            body: JSON.stringify({
                message: error.message,
                input: params,
            })
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VzZXJzL2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7OztBQUNiLDZDQUErQjtBQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUN6RCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEMsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FDbEI7Z0JBQ0UsT0FBTyxFQUFFLHFDQUFxQztnQkFDOUMsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUNGO1NBQ0YsQ0FBQztLQUVIO0lBQUMsT0FBTSxLQUFLLEVBQUU7UUFFYixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNuQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQztTQUNILENBQUE7S0FFRjtBQUNILENBQUMsQ0FBQyJ9