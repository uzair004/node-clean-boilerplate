const convict = require('convict');

// Define a schema
var config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test', 'staging'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: '127.0.0.1',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'database_development',
    },
    username: {
      doc: 'db user',
      format: String,
      default: 'root',
    },
    password: {
      doc: 'db password',
      format: '*',
      default: null,
    },
  },
  signIn: {
    secret: {
      doc: 'singin secret',
      format: String,
      default: 'defaultsecret',
    },
  },
  version: {
    doc: 'apk version',
    format: String,
    default: 'v0.0.0',
  },
  s3Bucket: {
    accessKeyId: {
      doc: 'access key for s3',
      format: String,
      default: null,
      env: 'S3_ACCESS_KEY',
    },
    secretAccessKey: {
      doc: 'secret access key for S3',
      format: String,
      default: null,
      env: 'S3_SECRET_ACCESS_KEY',
    },
    bucketName: {
      doc: 'bucket name for s3',
      format: String,
      default: null,
      env: 'S3_BUCKET_NAME',
    },
  },
});

// Load environment dependent configuration
let env = config.get('env');
if (env) {
  config.loadFile(__dirname + '/environments/' + env + '.json');
}

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
