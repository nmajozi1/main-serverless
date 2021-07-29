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
            body: JSON.stringify({
                message: 'deleted user successfully',
                input: params
            }),
        };
    }
    catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: error.statusCode,
                input: params
            }),
        };
    }
    ;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VzZXJzL2RlbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7OztBQUNaLDZDQUErQjtBQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUM1RCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFFekUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEMsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0RCxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FDaEI7Z0JBQ0ksT0FBTyxFQUFFLDJCQUEyQjtnQkFDcEMsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FDSjtTQUNKLENBQUE7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTztZQUNILFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQ2hCO2dCQUNJLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVTtnQkFDekIsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FDSjtTQUNKLENBQUE7S0FDSjtJQUFBLENBQUM7QUFDTixDQUFDLENBQUEifQ==