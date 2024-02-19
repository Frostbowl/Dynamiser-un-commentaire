const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    addContent();
    form.reset();
});


function addContent(){

    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (firstName == "" || lastName == "" || message == "") {
        errorMessage.style.display ="block";  
        console.log('Nok');
    } else {
        console.log("log else")
        createComment(firstName, lastName, message);
        console.log('ok');
        console.log('formReset');
        errorMessage.style.display = "none";

}};


function createComment(firstName, lastName, message){

    let commentList = document.getElementById('comment-list');
    let newDiv = document.createElement('div');

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
    console.log ('firstName')
    
};






