const object_list = [];

class Todo_Class {
    constructor(item){
        this.ulElement =item;
    } 

    add() {
        const user_input = document.querySelector("#input").value;
        if (user_input == "") {
            alert("Enter something please...") 
        } else {
            const todoObject = {
                id : object_list.length,
                todoText : user_input,
                isDone : false,
            }

        object_list.unshift(todoObject);
        this.display();
        document.querySelector("#input").value = '';

        }
    }

    done_undone(x) {
        const selected_id = object_list.findIndex((item)=> item.id == x);
        console.log(object_list[selected_id].isDone);
        object_list[selected_id].isDone == false ? object_list[selected_id].isDone = true : object_list[selected_id].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selected_del_id = object_list.findIndex((item)=> item.id == z);

        object_list.splice(selected_del_id,1);

        this.display();
    }


    display() {
        this.ulElement.innerHTML = "";

        object_list.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");

            liElement.appendChild(delBtn);
            
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                my_list.deleteElement(deleteId);
            })
            
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                my_list.done_undone(selectedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        })
    }
} 




const listSection = document.querySelector("#items");
my_list = new Todo_Class(listSection);


document.querySelector(".addBtn").addEventListener("click", function() {
    my_list.add()
})

document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        my_list.add()
    }
})