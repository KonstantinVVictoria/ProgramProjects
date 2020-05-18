const button = document.getElementById('submit')
var person = {}
if (button != null) {
    button.onclick = function (){
        storeResumeData()  
    }

    function storeResumeData() {
        console.log('clicked')    
        person = {
            firstName : document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            picture: document.getElementById('profile-picture').value,
            city: document.getElementById('bio-city').value,
            zipCode: document.getElementById('bio-zip-code').value,
            state: document.getElementById('bio-state').value,  
            objective: document.getElementById('objective').value              
        }
        console.log(person)
        setTimeout(() => {window.location.href="resume.html"},500)
        setTimeout(() => {setUpResume(person)},500)

    }
}

function setUpResume(){
    let page = document.getElementById('resume')
    setTimeout(() => {
        console.log(page)
    },0)
}
