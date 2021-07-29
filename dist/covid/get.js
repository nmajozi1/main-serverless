'use strict';
const axios = require('axios');
module.exports.get = async (event = {}) => {
    const cumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv';
    try {
        const data = axios.get(cumulativeUrl);
        if (data) {
            setTimeout(() => {
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                    },
                    body: JSON.stringify({
                        success: true,
                        message: 'successfully retrieved the covid items',
                        data: data
                    })
                };
            }, 1000);
        }
        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                success: false,
                message: `no covid list items found`,
                data: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvdmlkL2dldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7QUFDWixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLFFBQWEsRUFBRSxFQUFnQixFQUFFO0lBQ3pELE1BQU0sYUFBYSxHQUFHLHNIQUFzSCxDQUFDO0lBQzdJLElBQUk7UUFFQSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXJDLElBQUksSUFBSSxFQUFFO1lBRU4sVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFWixPQUFPO29CQUNILFVBQVUsRUFBRSxHQUFHO29CQUNmLE9BQU8sRUFBRTt3QkFDTCw2QkFBNkIsRUFBRSxHQUFHO3dCQUNsQyxrQ0FBa0MsRUFBRSxJQUFJO3FCQUMzQztvQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDakIsT0FBTyxFQUFFLElBQUk7d0JBQ2IsT0FBTyxFQUFFLHdDQUF3Qzt3QkFDakQsSUFBSSxFQUFFLElBQUk7cUJBQ2IsQ0FBQztpQkFDTCxDQUFBO1lBRUwsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRVo7UUFFRCxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsNkJBQTZCLEVBQUUsR0FBRztnQkFDbEMsa0NBQWtDLEVBQUUsSUFBSTthQUMzQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsMkJBQTJCO2dCQUNwQyxJQUFJLEVBQUUsRUFBRTthQUNYLENBQUM7U0FDTCxDQUFBO0tBRUo7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUVaLE9BQU87WUFDSCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFO2dCQUNMLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLElBQUk7YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixJQUFJLEVBQUUsS0FBSzthQUNkLENBQUM7U0FDTCxDQUFBO0tBRUo7QUFDTCxDQUFDLENBQUEifQ==