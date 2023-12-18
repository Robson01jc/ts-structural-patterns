import { UserRest } from './application/UserRest';

export const hexagonalApp = {
  main(): void {
    const userRestApi: UserRest = new UserRest();
    const body: Map<string, string> = new Map<string, string>();
    body.set('email', 'user1@email.com');
    body.set('name', 'User 1');
    body.set('password', 'passwd');
    let statusCode: number = userRestApi.post(body);
    console.log(statusCode);

    statusCode = userRestApi.get();
    console.log(statusCode);

    body.set('email', 'user2@email.com');
    body.set('name', 'User 2');
    statusCode = userRestApi.post(body);
    console.log(statusCode);

    statusCode = userRestApi.get();
    console.log(statusCode);

    body.set('email', 'user2@email.com');
    body.set('name', 'User 2');
    statusCode = userRestApi.post(body);
    console.log(statusCode);

    statusCode = userRestApi.get();
    console.log(statusCode);
  },
};
