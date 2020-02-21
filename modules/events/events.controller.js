export default class EventsController {
    static async listEvents(event) {
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              events: [{
                name: 'Trekking Kudremukha',
                days: 2
              }]
            },
            null,
            2
          ),
        };
    }
      
    static async getEventById(event, req, res) {
        console.log(event);
        console.log(event['pathParameters']['eventId']);
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              event: {
                name: 'Kranti',
                days: 29,
                id: event['pathParameters']['eventId']
              }
            },
            event,
            2
          ),
        };
    }
}