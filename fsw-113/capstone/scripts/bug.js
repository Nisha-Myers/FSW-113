// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
// const form = document.getElementById('bugForm')
// form.addEventListener('submit', reportBug)

let bugCount = 0
class Bug {
    constructor() {

        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.description = arguments[3]
    }

    addBug() {

        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        bugCount ++
        let newReport = document.createElement('div')
        newReport.classList.add('newBug')
        newReport.id = bugCount
        let whoReported = document.createElement('p')
        whoReported.innerText = 'Reported by: ' + this.reportedBy
        newReport.appendChild(whoReported)
        let whatSystem = document.createElement('p')
        whatSystem.innerText = 'System: ' + this.system + ' / ' + this.subSystem
        newReport.appendChild(whatSystem)
        let reportDescrip = document.createElement('p')
        reportDescrip.innerText = this.description
        newReport.appendChild(reportDescrip)
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteButton', 'button')
        deleteButton.id = bugCount
        deleteButton.innerText = 'X'
        newReport.appendChild(deleteButton)
        let resolveButton = document.createElement('button')
        resolveButton.classList.add('resolveButton', 'button')
        resolveButton.id = bugCount
        resolveButton.innerText = 'resolve'
        newReport.appendChild(resolveButton)
        document.getElementById('listWrapper').appendChild(newReport)

        deleteButton.addEventListener('click', this.deleteBug)
        resolveButton.addEventListener('click', this.resolveBug)
}
        
    deleteBug(bug) {

        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        let bugId = bug.target.id
        document.getElementById(bugId).remove()
        bugCount--
    }
    

    resolveBug(bug) {

        // Create code that changes the appropriate bug report to a darker color
        let bugId = bug.target.id
        document.getElementById(bugId).style.backgroundColor = 'rgb(50, 50, 50)'
    }
}

function reportBug() {

    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let myBug  = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').value,
        document.querySelector('#subSystem').value,
        document.querySelector('#bugDesc').value
    )
    myBug.addBug(myBug)
}