export default class UsersController {
    static async listUsers() {
        return {
            statusCode: 200,
            body: JSON.stringify(
              {
                users: [{
                  name: 'Krantifsd',
                  age: 29
                }]
              },
              null,
              2
            ),
          };
    }

    static async welcome(event) {
        return {
            statusCode: 200,
            body: JSON.stringify(
            {
                message: 'Hey whaz up',
            },
            null,
            2
            ),
        };
    }
      
    static async getUserById(event, req, res) {
        console.log(event);
        console.log(event['pathParameters']['userId']);
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              user: {
                name: 'Kranti',
                age: 29,
                id: event['pathParameters']['userId']
              }
            },
            event,
            2
          ),
        };
    }
}