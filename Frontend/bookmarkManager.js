class bookmarkManager { 

    constructor() {
        this.urls = [];
        this.lS = localStorage;
    }

    addItem(input) { 
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
        this.urls.push(input);    

        for (let i = 0; i < this.urls.length; i++) { 
            let value = document.createElement("li");
            value.textContent = this.urls[i];    
            console.log("HI");
            this.lS.setItem(this.urls[i], this.urls[i]);
            value.id = this.urls[i];  
            listContent.append(value);

        }
    }  

    loadItems() {
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
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

