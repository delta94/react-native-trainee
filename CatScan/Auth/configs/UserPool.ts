import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_ptUnqyQd9',
  ClientId: '7i3jmp1q5vq9ftq9jcjgchv1bp'
};

export default new CognitoUserPool(poolData);