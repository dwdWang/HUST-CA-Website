document.addEventListener('DOMContentLoaded', function() {
  // 当整个文档的内容加载完成后执行这个函数

  const scrollHint = document.querySelector('.scroll-hint');
  // 选择页面中类名为 'scroll-hint' 的第一个元素

  scrollHint.addEventListener('click', function() {
    // 为选中的元素添加一个点击事件监听器

    window.scrollBy({
      top: window.innerHeight,
      // 向下滚动的距离为当前视窗的高度

      behavior: 'smooth'
      // 滚动行为是平滑的
    });
  });
});