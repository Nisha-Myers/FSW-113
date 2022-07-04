// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var subItem = document.querySelector("#subSystem");
var reportedBy = document.querySelector("#reportedBy");
var selectItem = document.querySelector("#system");
var bugDesc = document.querySelector("#bugDesc");
var listWrapper = document.querySelector("#listWrapper");

class Bug {
    static bugCount = 1;
    constructor(subSystem, reportedBy, system, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.subSystem = subSystem;
        this.reportedBy = reportedBy;
        this.system = system;
        this.bugDesc = bugDesc;
        this.bugID = ++this.comstructor.bugCount;
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let div = document.createElement("div");
        div.setAttribute("class", "reportDiv");
        div.id = `div_${this.bugID}`

        let report = document.createElement("p");
        report.setAttribute("class", "myPara");
        report.textContent = `Reported by: $(this.reportBy)`;

        let system = document.createElement("p");
        system.setAttribute("class", "myPara");
        system.textContent = `System ${this.system}/${this.subSystem}`;

        let desc = document.createElement("p");
        desc.setAttribute("class", "myPara");
        desc.textContent = this.bugDesc;

        let container = document.createElement("div");
        check.innerHTML += "&#10004;";
        chech.setAttribute("class", "check");
        check.addEventListener("click", () => {
            this.resolveBug(this.buID)
        });

    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
}
