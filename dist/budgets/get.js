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
module.exports.get = async (event = {}) => {
    const docCLient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });
    const input = JSON.parse(event.body);
    let budgetItems = [];
    const params = {
        TableName: 'budgets'
    };
    try {
        const data = await docCLient.scan(params).promise();
        if (data.Items) {
            data.Items.forEach(budgetItem => {
                if (budgetItem.username === input.username) {
                    budgetItems.push(budgetItem);
                }
            });
            if (budgetItems.length > 0) {
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                    },
                    body: JSON.stringify({
                        success: true,
                        message: 'successfully retrieved the budgets',
                        data: budgetItems
                    })
                };
            }
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                    success: false,
                    message: `no budget list items found for ${input.username}`,
                    data: budgetItems
                })
            };
        }
        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: false,
                message: `no data items found for ${input.username}`,
                data: budgetItems
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1ZGdldHMvZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7O0FBQ1osNkNBQStCO0FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLFFBQWEsRUFBRSxFQUFnQixFQUFFO0lBQ3pELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLEtBQUssR0FBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsSUFBSSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBRTFCLE1BQU0sTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLFNBQVM7S0FDdkIsQ0FBQTtJQUVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUN4QyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUMvQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsT0FBTztvQkFDSCxVQUFVLEVBQUUsR0FBRztvQkFDZixPQUFPLEVBQUU7d0JBQ0wsNkJBQTZCLEVBQUUsR0FBRzt3QkFDbEMsa0NBQWtDLEVBQUUsSUFBSTtxQkFDM0M7b0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxvQ0FBb0M7d0JBQzdDLElBQUksRUFBRSxXQUFXO3FCQUNwQixDQUFDO2lCQUNMLENBQUE7YUFDSjtZQUVELE9BQU87Z0JBQ0gsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFO29CQUNMLDZCQUE2QixFQUFFLEdBQUc7b0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7aUJBQzNDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNqQixPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsa0NBQWtDLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQzNELElBQUksRUFBRSxXQUFXO2lCQUNwQixDQUFDO2FBQ0wsQ0FBQTtTQUNKO1FBRUQsT0FBTztZQUNILFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLDJCQUEyQixLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxJQUFJLEVBQUUsV0FBVzthQUNwQixDQUFDO1NBQ0wsQ0FBQTtLQUVKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFFWixPQUFPO1lBQ0gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0wsQ0FBQTtLQUVKO0FBQ0wsQ0FBQyxDQUFBIn0=