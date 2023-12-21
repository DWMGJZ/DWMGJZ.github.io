		// 获取元素
		var numInput = document.getElementById('num');
		var addButton = document.getElementById('add');
		var minusButton = document.getElementById('minus');

		// 初始化计数器值
		var count = 0;

		// 更新计数器值及文本框显示
		function updateCounter() {
			numInput.value = count;
		}

		// 增加按钮点击事件处理函数
		addButton.addEventListener('click', function() {
			count++;
			updateCounter();
		});

		// 减少按钮点击事件处理函数
		minusButton.addEventListener('click', function() {
			if (count > 0) {
				count--;
				updateCounter();
			}
		});