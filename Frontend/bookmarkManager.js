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
            listContent.append(value); 
        })

    }
    
}  

let instance = new bookmarkManager();

document.getElementById("add").addEventListener("click", (event) => { 
    let value = document.getElementById("userInput").value; 
    console.log(value);
    instance.addItem(value); 
})