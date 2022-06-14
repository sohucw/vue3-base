<template>
    <div class="main">
        <div class="container">
            <h1>欢迎使用Todo List</h1>
            <div class="add-todo">
                <input type="text" name="todo" />
                <button>
                    <!-- 按钮上的加号元素 -->
                    <i class="add-icon"></i>
                </button>
            </div>

            <div class="filters">
                <span class="filter active">全部</span>
                <span class="filter">已完成</span>
                <span class="filter">未完成</span>
            </div>

            <div class="todo-list">
                <div class="todo-item">
                    <!-- 使用label包裹input与span，后续用户无论点击input还是span，都会触发checkbox事件，从而实现勾选了input的效果 -->
                    <label>
                        <input type="checkbox" />
                        写开发Todo List的文章
                        <span class="check-button"></span>
                    </label>
                </div>
                <div class="todo-item">
                    <label>
                        <input type="checkbox" />
                        写开发Todo List的文章
                        <span class="check-button"></span>
                    </label>
                </div>
                <div class="todo-item">
                    <label>
                        <input type="checkbox" />
                        写开发Todo List的文章
                        <span class="check-button"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
