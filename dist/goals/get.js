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
        TableName: 'goals'
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
                        message: 'successfully retrieved the goals',
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
                    message: `no goal list items found for ${input.username}`,
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
                input: error
            })
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dvYWxzL2dldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7OztBQUNaLDZDQUErQjtBQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUN6RCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxLQUFLLEdBQXlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELElBQUksV0FBVyxHQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxPQUFPO0tBQ3JCLENBQUE7SUFFRCxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU87b0JBQ0gsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFO3dCQUNMLDZCQUE2QixFQUFFLEdBQUc7d0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7cUJBQzNDO29CQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNqQixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsa0NBQWtDO3dCQUMzQyxJQUFJLEVBQUUsV0FBVztxQkFDcEIsQ0FBQztpQkFDTCxDQUFBO2FBQ0o7WUFFRCxPQUFPO2dCQUNILFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRTtvQkFDTCw2QkFBNkIsRUFBRSxHQUFHO29CQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2lCQUMzQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLGdDQUFnQyxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUN6RCxJQUFJLEVBQUUsV0FBVztpQkFDcEIsQ0FBQzthQUNMLENBQUE7U0FDSjtRQUVELE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDTCw2QkFBNkIsRUFBRSxHQUFHO2dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSwyQkFBMkIsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDcEQsSUFBSSxFQUFFLFdBQVc7YUFDcEIsQ0FBQztTQUNMLENBQUE7S0FFSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBRVosT0FBTztZQUNILFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQztTQUNMLENBQUE7S0FFSjtBQUNMLENBQUMsQ0FBQSJ9