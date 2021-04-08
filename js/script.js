function initVue(){

    new Vue ({
        el: "#app",

        data: {

            todos: [
                'item 1',
                'item 2',
                'item 3'
            ],

            newTodo: ''
        },

        methods: {

            addTodo: function(){

                if (this.newTodo.length > 0){

                    this.todos.push(this.newTodo);
                    this.newTodo = ''
                }
            },

            delTodo: function(index){
                
                this.todos.splice(this.todos[index], 1)
            }
        }
    })
};

function init() {
    initVue();
};

document.addEventListener('DOMContentLoaded', init);