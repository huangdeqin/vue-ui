<template>
    <div class="container">
        <todo-input
            @addTodoItem="addTodoItem"
        />
        <todo-list
            :todo-list="todoList"
            @setCompleted="setCompleted"
            @removeTodoItem="removeTodoItem"
        />
    </div>
</template>


<script>
import TodoInput from '../TodoList/TodoInput'
import TodoList from '../TodoList/TodoList'

import {reactive, toRefs} from 'vue'

export default {
    name: "UseTodoList",
    components: {
        TodoInput,
        TodoList
    },
    setup () {
        const state = reactive({
            todoList: []
        });

        const addTodoItem = (todoItem) => {
            state.todoList.push(todoItem);
        }

        const setCompleted = (id) => {
            state.todoList = state.todoList.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }

                return item;
            })
        }

        const removeTodoItem = (id) => {
            state.todoList = state.todoList.filter(item => {
                return item.id !== id;
            })
        }


        return {
            addTodoItem,
            setCompleted,
            removeTodoItem,
            ...toRefs(state),

        }
    }
}
</script>

<style scoped>

</style>