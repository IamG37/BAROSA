#!/bin/bash

# 자동 업로드 스크립트
# 파일 변경을 감지하고 자동으로 GitHub에 푸시

echo "🚀 자동 업로드 스크립트 시작..."
echo "📁 감시 중인 디렉토리: $(pwd)"

# Git 상태 확인
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Git 저장소가 아닙니다. Git 저장소를 초기화해주세요."
    exit 1
fi

# 원격 저장소 확인
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ 원격 저장소가 설정되지 않았습니다."
    echo "다음 명령어로 원격 저장소를 추가해주세요:"
    echo "git remote add origin https://github.com/IamG37/Calcurator37.git"
    exit 1
fi

# 파일 변경 감지 함수
check_and_commit() {
    # 변경된 파일 확인
    if git diff --quiet && git diff --cached --quiet; then
        echo "📝 변경된 파일이 없습니다."
        return
    fi
    
    echo "📝 변경된 파일이 감지되었습니다!"
    
    # 변경된 파일 목록 출력
    echo "변경된 파일:"
    git status --porcelain | while read -r line; do
        status=${line:0:2}
        file=${line:3}
        case $status in
            "M ") echo "  수정됨: $file" ;;
            "A ") echo "  추가됨: $file" ;;
            "D ") echo "  삭제됨: $file" ;;
            "R ") echo "  이름변경: $file" ;;
            *) echo "  기타: $file" ;;
        esac
    done
    
    # 모든 변경사항 스테이징
    git add -A
    
    # 커밋 메시지 생성
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    commit_message="Auto upload: $timestamp - 자동 업로드"
    
    # 커밋
    if git commit -m "$commit_message"; then
        echo "✅ 커밋 완료: $commit_message"
        
        # 푸시
        if git push origin main; then
            echo "🚀 GitHub에 성공적으로 업로드되었습니다!"
            echo "🌐 https://barosa.shop 에서 확인하세요."
        else
            echo "❌ 푸시 실패. 다시 시도해주세요."
        fi
    else
        echo "❌ 커밋 실패."
    fi
}

# 초기 상태 확인
echo "🔍 초기 상태 확인 중..."
check_and_commit

# 파일 변경 감지 루프
echo "👀 파일 변경 감지 중... (Ctrl+C로 종료)"
echo ""

while true; do
    # 5초마다 변경사항 확인
    sleep 5
    
    # 백그라운드에서 변경사항 확인
    if ! git diff --quiet || ! git diff --cached --quiet; then
        echo ""
        echo "🔄 변경사항 감지됨! 처리 중..."
        check_and_commit
        echo ""
        echo "👀 파일 변경 감지 중... (Ctrl+C로 종료)"
    fi
done 