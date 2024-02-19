let firstName = document.getElementById("first-name").value.trim();
let lastName = document.getElementById("last-name").value.trim();
let message = document.getElementById("message").value.trim();
const form = document.querySelector('form');
let errorMessage = document.getElementById("error-message");
let commentList = document.querySelector('comment-list');
let newDiv = document.createElement('div');


function addContent(){

    if (firstName == "" || lastName == "" || message == "") {
        error();  
        console.log('Nok02');
    } else {
        createComment();
        errorMessage.style.display = "none";
        console.log('ok');
        
}};


function error(){
    errorMessage.style.display ="block";
    console.log('Nok');
    form.addEventListener('submit', function(event){
        event.preventDefault()
    })
 
};

function createComment(){
    newDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
    newDiv.innerHTML = `
                        <div>
                            <h3>${firstName} ${lastName}</h3>
                            <div>
                                <p>${message}</p>
                            </div>
                        </div>
    `;
    commentList.appendChild(newDiv, addContent);
}

addContent();





