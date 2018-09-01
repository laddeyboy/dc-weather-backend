from fabric.api import run, env, cd

env.user = 'ubuntu'
env.hosts = ['54.70.13.38']
env.key_filename = '/data/data/com.termux/files/home/.ssh/id_rsa'

def deploy():
  with cd('/home/ubuntu/dc-weather-backend'):
    run('git pull')
    run('pm2 restart app.js')
