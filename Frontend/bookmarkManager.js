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
            let box = document.createElement("input");
            box.type = "checkbox"; 
            box.id = this.lS.key(i);

            path.href = this.lS.key(i);
            path.textContent = this.lS.key(i); 
            path.target = "_blank"; // Fix for links, dont know why

            //value.id = this.lS.key(i);  
            value.append(path); 

            listContent.append(value); 
            listContent.append(box); 
        }
    }  

    loadItems() {
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
        console.log(this.lS);
        for (let i = 0; i < this.lS.length; i++) {  
            let path = document.createElement("a"); 
            let value = document.createElement("li");  
            let box = document.createElement("input");
            box.type = "checkbox"; 
            box.id = this.lS.key(i);  
            path.appendChild(box); 

            path.href = this.lS.key(i);
            path.textContent = this.lS.key(i); 
            path.target = "_blank"; 

            //value.id = this.lS.key(i); 
            value.append(path); 

            listContent.append(value); 
            listContent.append(box);  

            //console.log(path);
        }
    } 

    deleteItems() {   
        let body = document.getElementById("urlContent");
        body.innerHTML = ""; 
        let arr = [];
        for (let i = 0; i < this.lS.length; i++) {
            arr.push(this.lS.key(i));
        } 
        console.log(arr);
        for (let i = 0; i < arr.length; i++) { 
            let boxVal = document.getElementById(arr[i]);
            if (boxVal && boxVal.checked) { 
                this.lS.removeItem(arr[i]);
            }
        }  
        console.log("deleteItems" + this.lS);
        this.addItem();
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

document.getElementById("remove").addEventListener("click", (event) => {
    this.deleteItems();
});

/*document.addEventListener("DOMContentLoaded", (event) => {
    instance.clearLS();
})*/

