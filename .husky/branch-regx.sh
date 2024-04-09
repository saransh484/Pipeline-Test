#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

RED='\033[0;41m'
BLUE='\033[0;44m'
OFF='\033[0m'

local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

if ! [[ "${local_branch_name}" =~ ^(dev|master|main|prod|task-[0-9]+-[-A-Za-z0-9]+(-comment-[0-9]+)?)$ ]]; then
    echo -e ""
    echo -e "Youre On ${local_branch_name}"
    echo -e ""
    echo -e "🚨 ${RED}${TEXT}INVALID BRANCH NAME${OFF}"
    echo -e ""
    echo -e "💡 ${BLUE}${TEXT}CHANGE IT USING:${OFF}"
    echo -e "👉 git branch -m new-branch-name"
    echo -e ""
    exit 1
fi
exit 0