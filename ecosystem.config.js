module.exports = {
  apps: [{
    name: 'onnuriloan',
    cwd: '/home/bitnami/htdocs',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
    watch: ['./'],
    watch_options: {
      followSymlinks: true,
      usePolling: true,
      interval: 10000,
      binaryInterval: 10000,
    },
    env: {
      PORT: 3000,
      NODE_ENV: 'production',
    }
  }]
}