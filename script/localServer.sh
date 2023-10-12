log() {
  printf "[scripts/localServer.sh] : %s\n" "$1"
}
log "启动服务"
cd ./docs
anywhere
log "启动完成"