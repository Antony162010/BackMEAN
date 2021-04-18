module.exports = {
  apps: [{
    name: 'API - BackMEAN',
    script: '/app/src/app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
    },
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }],
};
