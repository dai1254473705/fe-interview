log() {
  printf "[scripts/build.sh] : %s\n" "$1"
}
log "开始构建"
yarn docs:build
log "构建完成"

log "写入构建日志"
BUILD_DATE=`date "+%Y-%m-%d %H:%M:%S"`
cat >> docs/index.html <<- EOF
<script>
;(function(){
  console.log('%cBUILD_DATE: %c%s', 'color: gray;', 'color: blue;', '${BUILD_DATE}');
})();
</script>
EOF

# 复制CNAME到docs
cp CNAME ./docs

log "提交代码"
git add .
git commit -m "build: auto commit"
git pull
git push
log "提交完成"
# delete dist folder
# shopt -s extglob
# rm -rf src publish