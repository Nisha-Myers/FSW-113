// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var selectItem =document.querySelector("#system");
var subItem = document.querySelector("#subSystem");
var reportedBy = document.querySelector("#reportedBy");
var bugDesc = document.querySelector("#bugDesc");
var listWrapper = document.querySelector("#listWrapper");
class Bug {
    static bugCount = 1;
    constructor(reportedBy, system, subSystem, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
        this.bugID = ++this.constructor.bugCount;
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let div = document.createElement('div');
        div.setAttribute("class", "reportDiv");
        div.id = `div_${this.bugID}`

        let report = document.createElement('p');
        report.setAttribute("class", "myPara");
        report.textContent = `Reported by: ${this.reportedBy}`;

        let system = document.createElement('p');
        system.setAttribute("class", "myPara");
        system.textContent = `System ${this.system}/${this.subSystem}`;
        
        let desc = document.createElement('p');
        desc.setAttribute("class", "myPara");
        desc.textContent = this.bugDesc;

        let container = document.createElement('div');
        container.setAttribute('class', 'container');

        let check = document.createElement('div');
        check.innerHTML += '&#10004;';
        check.setAttribute('class', 'check');
        check.addEventListener('click', () => {
            this.resolveBug(this.bugID)
        });

        let deleteBtn = document.createElement('div');
        deleteBtn.innerHTML += '&#10006;';
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.addEventListener('click', ()  => {
            this.deleteBug(this.bugID)
        });

        container.append(check, deleteBtn);

        div.append(report, system, desc, container);
        listWrapper.appendChild(div);
    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        document.querySelector(`#div_${id}`).remove()
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        console.log("color change");
        document.querySelector(`#div_${id}`).getElementsByClassName.backgroundColor = "rgb(38, 38, 190)";
    }
}

function reportBug(e) {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    const select = selectItem.options[selectItem.selectedIndex].text;
    const sub = subItem.options[subItem.selectedIndex].text;
    const bug = new Bug(reportedBy.value, select, sub, bugDesc.value);
    bug.addBug();
}