from fabric.api import run, env, cd

env.user = 'ubuntu'
env.hosts = ['52.13.211.168']

def deploy():
  with cd('/home/ubuntu/dc-weather-backend'):
    run('git pull')
    run('pm2 restart app.js')
