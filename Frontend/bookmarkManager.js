class bookmarkManager { 

    constructor() {
        this.urls = [];
        this.lS = localStorage;
    }

    addItem(input) { 
        //ToDo
    }
    
}  

let instance = new bookmarkManager();

document.getElementById("add").addEventListener("click", (event) => { 
    let value = document.getElementById("urls").val;
    instance.addItem(value); 
})