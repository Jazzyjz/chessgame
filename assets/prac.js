// Global Variables
var form = document.querySelector('form');
var courses = document.querySelector('#courses');
var addTask = document.querySelector('#addTask');
var subjectForm = document.querySelector('#subjectForm')
var subjectName = document.querySelector('subjectTitle');

// buttons
var addSubject = document.querySelector('#add');
var submitForm = document.querySelector('#submitSubject')

const createSubject = document.createElement('section');
createSubject.classList.add('subject')


// Event Listeners
// addTask.addEventListener('click',newTask)
addSubject.addEventListener('click', newSubject);
submitForm.addEventListener('click',formSubmission);

// function to create New Subject
function newSubject(e) {
    e.preventDefault();
    subjectForm.style.display = 'block';
}
function formSubmission (e){
    e.preventDefault();
    if (subjectName != null){
        console.log(subjectName.value);
    }
    else{
        console.log('fix it');
    }
    
}