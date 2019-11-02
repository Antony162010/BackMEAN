module.exports = {
  apps: [{
    name: 'API - BackMEAN',
    script: './src/app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      MONGODB_URI: 'mongodb://localhost:27017/mean',
      JWT_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW50b255IEFiZWwiLCJwYXNzd29yZCI6OTg3NjU0MzIxLCJjcmVkZW50aWFsIjoiYWRtaW4ifQ.ruKiqFFxdOtZ1kAaGVtx6fcXs7orucfq3f99jYIxEiM',
      APP_PORT: 3000,
      APP_HOST: 'localhost',
      APP_URL: '/api/v1'

    },
    env_production: {
      NODE_ENV: 'production'
    },
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
