#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkChatStack } from '../lib/cdk-chat-stack';

const app = new cdk.App();
new CdkChatStack(app, 'CdkChatStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  // https://github.com/full-stack-serverless/cdk-appsync-chat
  // https://dev.to/dabit3/full-stack-serverless-building-a-real-time-chat-app-with-graphql-cdk-appsync-and-react-1dbb
  // frontEnds
  // https://github.com/aws-samples/aws-mobile-appsync-chat-starter-angular
  // https://github.com/amazon-archives/aws-appsync-chat
  // https://github.com/jarrodwatts/amplify-live-chat
  // https://medium.com/serverless-transformation/building-a-massively-scalable-serverless-chat-application-with-aws-appsync-dbe1733dcb95


  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },


  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
