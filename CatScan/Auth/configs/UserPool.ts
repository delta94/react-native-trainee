import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_k8DeFD1hg',
  ClientId: '2r9mgei5shp8qhs6aqn789qme7'
};

export default new CognitoUserPool(poolData);