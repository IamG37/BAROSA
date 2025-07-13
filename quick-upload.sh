#!/bin/bash

# 빠른 업로드 스크립트
# 현재 변경사항을 즉시 GitHub에 업로드

echo "🚀 빠른 업로드 시작..."

# 모든 변경사항 스테이징
git add -A

# 변경사항이 있는지 확인
if git diff --cached --quiet; then
    echo "📝 변경된 파일이 없습니다."
    exit 0
fi

# 변경된 파일 목록 출력
echo "📝 변경된 파일:"
git status --porcelain

# 커밋 메시지 생성
timestamp=$(date '+%Y-%m-%d %H:%M:%S')
commit_message="Quick upload: $timestamp - 빠른 업로드"

# 커밋 및 푸시
echo "💾 커밋 중..."
if git commit -m "$commit_message"; then
    echo "🚀 GitHub에 업로드 중..."
    if git push origin main; then
        echo "✅ 성공적으로 업로드되었습니다!"
        echo "🌐 https://barosa.shop 에서 확인하세요."
    else
        echo "❌ 푸시 실패."
        exit 1
    fi
else
    echo "❌ 커밋 실패."
    exit 1
fi 