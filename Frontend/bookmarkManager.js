class bookmarkManager { 

    constructor() {
        this.urls = [];
        this.lS = localStorage;
    }

    addItem(input) { 
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
        this.urls.push(input);  

        this.urls.forEach(url => {
            let value = document.createElement("li");
            value.textContent = url;   
            this.lS.setItem(url, url);
            value.id = url;  
            listContent.append(value); 
        })
    }  

    loadItems() {
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = "";
        this.lS.forEach(k => {
            let value = document.createElement("li");
            value.textContent = k;
            value.id = k;
            listContent.append();
        });
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

