log() {
  printf "[scripts/build.sh] : %s\n" "$1"
}
log "开始构建"
yarn docs:build
log "构建完成"

log "写入构建日志"
cat >> docs/index.html <<- EOF

;(function(){
  console.log('%cBUILD_DATE: %c%s', 'color: gray;', 'color: blue;', '${BUILD_DATE}');
})();
EOF

log "提交代码"
git add .
git commit -m "[build]: auto commit"

log "提交完成"
# delete dist folder
# shopt -s extglob
# rm -rf src publish