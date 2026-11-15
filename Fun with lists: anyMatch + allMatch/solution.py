# 指定した Codewars ディレクトリ配下だけで vim 終了時に git 同期を自動実行する
vim() {
  command vim "$@"

  local target_dir="$HOME/Library/CloudStorage/Dropbox/Code/Codewars"

  if [[ "$PWD" == "$target_dir"* ]]; then
    if [[ -n $(git status --porcelain) ]]; then
      local today=$(date '+%Y-%m-%d')
      local cmd="executed command : 【git add . && git commit -m \"$today\" && git push】"

      # 英語のメッセージと実行コマンドを表示
      echo "\n[Codewars] Changes detected. Running automatic sync..."
      echo "$ $cmd"

      print -s "$cmd"
      eval "$cmd"
    else
      echo "\n[Codewars] No changes to sync."
    fi
  fi
}
