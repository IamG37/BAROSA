// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 활성화
    initNavigation();
    
    // 스크롤 효과
    initScrollEffects();
    
    // 버튼 이벤트
    initButtonEvents();
    
    // 광고 애니메이션
    initAdAnimations();
    
    // 서비스 카드 호버 효과
    initServiceCardEffects();
});

// 네비게이션 활성화
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // 스크롤 시 네비게이션 활성화
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 네비게이션 클릭 시 부드러운 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 스크롤 효과
function initScrollEffects() {
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // 스크롤 시 요소들 페이드인
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 관찰할 요소들
    const animatedElements = document.querySelectorAll('.service-card, .ad-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 버튼 이벤트
function initButtonEvents() {
    // CTA 버튼
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Calculator37로 스크롤
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// 광고 애니메이션
function initAdAnimations() {
    // 사이드 광고 호버 효과
    const adCards = document.querySelectorAll('.ad-card');
    adCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateX(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // 배너 광고 플레이스홀더 애니메이션
    const adPlaceholders = document.querySelectorAll('.ad-placeholder, .ad-placeholder-small, .ad-placeholder-horizontal');
    adPlaceholders.forEach(placeholder => {
        setInterval(() => {
            placeholder.style.borderColor = placeholder.classList.contains('ad-placeholder') || placeholder.classList.contains('ad-placeholder-horizontal') 
                ? 'rgba(255,255,255,0.6)' 
                : '#adb5bd';
            setTimeout(() => {
                placeholder.style.borderColor = placeholder.classList.contains('ad-placeholder') || placeholder.classList.contains('ad-placeholder-horizontal')
                    ? 'rgba(255,255,255,0.3)'
                    : '#dee2e6';
            }, 1000);
        }, 3000);
    });
}

// 서비스 카드 호버 효과
function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 카드 내부 요소들 애니메이션
            const icon = card.querySelector('.service-icon');
            const title = card.querySelector('h3');
            const features = card.querySelectorAll('.feature-tag');
            
            if (icon) icon.style.transform = 'scale(1.1) rotate(5deg)';
            if (title) title.style.color = '#667eea';
            
            features.forEach((feature, index) => {
                setTimeout(() => {
                    feature.style.transform = 'translateY(-3px)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            const title = card.querySelector('h3');
            const features = card.querySelectorAll('.feature-tag');
            
            if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
            if (title) title.style.color = '#333';
            
            features.forEach(feature => {
                feature.style.transform = 'translateY(0)';
            });
        });
    });
}

// 페이지 로드 완료 후 추가 초기화
window.addEventListener('load', function() {
    // 로딩 애니메이션
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 서비스 카드 애니메이션
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}); 