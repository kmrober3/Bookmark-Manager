class bookmarkManager { 

    constructor() {
        this.lS = localStorage; 
    }

    addItem(input) { 
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = "";      
        this.lS.setItem(encodeURIComponent(input), input);
        for (let i = 0; i < this.lS.length; i++) {     
            //Creating of html elements 
            let value = document.createElement("li");
            let path = document.createElement("a");   
            let box = document.createElement("input"); 

            // Styling to checkbox element
            box.type = "checkbox"; 
            box.id = this.lS.key(i);   

            console.log(box.id);

            //Adding hyperlink to webpage
            path.href = this.lS.getItem(this.lS.key(i));
            path.textContent = this.lS.getItem(this.lS.key(i)); 
            path.target = "_blank"; // Fix for links, dont know why

            value.append(path); 

            listContent.append(value); 
            listContent.append(box); 
        }
    }  

    loadItems() {
        let listContent = document.getElementById("urlContent");
        listContent.innerHTML = ""; 
        for (let i = 0; i < this.lS.length; i++) {   
            //Creating of html elements 
            let path = document.createElement("a"); 
            let value = document.createElement("li");  
            let box = document.createElement("input");  

            // Styling to checkbox element
            box.type = "checkbox"; 
            box.id = this.lS.key(i);   

            //Adding hyperlink to webpage
            path.href = this.lS.getItem(this.lS.key(i));
            path.textContent = this.lS.getItem(this.lS.key(i)); 
            path.target = "_blank";  

            value.append(path); 

            listContent.append(value); 
            listContent.append(box);  
        }
    } 

    deleteItems() {   
        let body = document.getElementById("urlContent");
        let arr = [];
        for (let i = 0; i < this.lS.length; i++) {
            arr.push(this.lS.getItem(this.lS.key(i)));
        } 
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {  
            console.log("HI");
            let boxVal = document.getElementById(encodeURIComponent(arr[i])); 
            console.log(boxVal);
            if (boxVal && boxVal.checked) {  
                console.log("Please work");
                this.lS.removeItem(encodeURIComponent(arr[i]));
            }
        }   
        //console.log("deleteItems" + this.lS);   
        
        body.innerHTML = ""; 
        for (let i = 0; i < this.lS.length; i++) {     
            //Creating of html elements 
            let value = document.createElement("li");
            let path = document.createElement("a");   
            let box = document.createElement("input"); 

            // Styling to checkbox element
            box.type = "checkbox"; 
            box.id = this.lS.key(i);   

            console.log(box.id);

            //Adding hyperlink to webpage
            path.href = this.lS.getItem(this.lS.key(i));
            path.textContent = this.lS.getItem(this.lS.key(i)); 
            path.target = "_blank"; // Fix for links, dont know why

            value.append(path); 

            listContent.append(value); 
            listContent.append(box); 
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
});

document.getElementById("remove").addEventListener("click", (event) => {
    instance.deleteItems();
}); 

// Clears local storage
/*document.addEventListener("DOMContentLoaded", (event) => {
    instance.clearLS();
});*/
