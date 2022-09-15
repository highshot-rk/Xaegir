module.exports = {
  apps: [
    {
      name: 'xaegir-app',
      exec_mode: 'cluster',
      instances: '1', // options: ['max', '1', '2', ...]
      script: './.output/server/index.mjs',
    },
  ],
};
