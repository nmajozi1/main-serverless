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
    const input = JSON.parse(event.body);
    const params = {
        TableName: 'budgets',
        Key: {
            id: input.Key.id
        }
    };
    try {
        const data = await docClient.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'Budget has been successfully deleted',
                input: input,
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
                input: error,
            })
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1ZGdldHMvZGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7O0FBQ1osNkNBQThCO0FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLFFBQWEsRUFBRSxFQUFnQixFQUFFO0lBQzVELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEdBQUcsRUFBRTtZQUNELEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7U0FDbkI7S0FDSixDQUFDO0lBRUYsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsc0NBQXNDO2dCQUMvQyxLQUFLLEVBQUUsS0FBSzthQUNmLENBQUM7U0FDTCxDQUFBO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU87WUFDSCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUM7U0FDTCxDQUFBO0tBQ0o7QUFDTCxDQUFDLENBQUEifQ==