// scripts/scroll-highlight.js
  document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    // 滚动高亮逻辑
    function highlightNav() {
      let currentSectionId = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.pageYOffset + 100; // +100px偏移量
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.id;
        }
      });
  
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
          item.classList.add('active');
        }
      });
    }
  
    // 事件监听
    window.addEventListener('scroll', highlightNav);
    window.addEventListener('load', highlightNav);
    
    // 点击锚点平滑滚动
    navItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' }); // 使用平滑滚动效果
      });
    });
  }); 