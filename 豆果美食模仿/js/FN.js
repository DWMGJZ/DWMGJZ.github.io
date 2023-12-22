const tabs = document.querySelectorAll('#fixed li');
const boxes = document.querySelectorAll('.box');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // 移除所有选项卡和内容的active类
        tabs.forEach(tab => tab.classList.remove('cur'));
        boxes.forEach(box => box.classList.remove('active'));

        // 添加当前选项卡和内容的active类
        tab.classList.add('cur');
        boxes[index].classList.add('active');
    });
});

