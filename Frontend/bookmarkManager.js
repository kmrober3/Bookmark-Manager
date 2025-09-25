class bookmarkManager { 

    constructor() {
        this.lS = localStorage;
    }

    addItem(input) { 
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = "";      
        this.lS.setItem(input, input);
        for (let i = 0; i < this.lS.length; i++) {    
            let path = document.createElement("a"); 
            let value = document.createElement("li");  

            path.href = this.lS.key(i);
            path.textContent = this.lS.key(i); 
            path.target = "_blank"; // Fix for links, dont know why

            value.id = this.lS.key(i);  
            value.appendChild(path); 

            listContent.append(value);
        }
    }  

    loadItems() {
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
        console.log(this.lS);
        for (let i = 0; i < this.lS.length; i++) { 
            let value = document.createElement("li");
            value.textContent = this.lS.key(i);
            value.id = this.lS.key(i);
            listContent.append(value);
        }
    }

    clearLS() {
        this.lS.clear();
    }
    
}  

let instance = new bookmarkManager();

document.getElementById("add").addEventListener("click", (event) => { 
    let value = document.getElementById("userInput").value; 
    console.log(value);
    instance.addItem(value); 
}); 

document.addEventListener("DOMContentLoaded", (event) => { 
    instance.loadItems();
})

/*document.addEventListener("DOMContentLoaded", (event) => {
    instance.clearLS();
})*/

