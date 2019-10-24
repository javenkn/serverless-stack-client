export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-fileuploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6ew7p6hkn3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jyEBdzRsD",
    APP_CLIENT_ID: "3fc6plc9md2gfp6r883ttl35nr",
    IDENTITY_POOL_ID: "us-east-1:a9a2d2df-5b3d-41d2-90d4-21e7856ad08f"
  }
};
