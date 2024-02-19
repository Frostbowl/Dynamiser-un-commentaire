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
        form.addEventListener('submit', function(event){
            event.preventDefault()
        })
        
}};


function error(){
    errorMessage.style.display ="block";
    console.log('Nok');

 
};

function createComment(firstName, lastName, message){
    newDiv.innerHTML = `<div class="flex space-x-4 text-sm text-gray-500">
                            <div class="flex-1 py-10 border-t border-gray-200">
                                <h3 class="font-medium text-gray-900">${firstName + " " + lastName}</h3>
                                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                                <p>${message}</p>
                                </div>
                            </div>
                        </div>
    `;
    commentList.appendChild(newDiv);
    console.log (firstName)
}

addContent();





