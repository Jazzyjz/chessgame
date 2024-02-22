// Global Variables
var form = document.querySelector('form');
var courses = document.querySelector('#courses');
var newkTaskbtn = document.querySelector('#submitNewTask');
var subjectForm = document.querySelector('#subjectForm')
var subjectName = document.querySelector('#subjectTitle');
var subjectTask = document.querySelector('#subjectTask');
var subjectImportance = document.querySelector('input[name="option"]') ;
var newTaskForm = document.querySelector('#newTaskForm');
var newTaskText = document.querySelector('#newTasktext');

var vImportantIcon = document.querySelector('#vImportantE');
var importanIcon =  document.querySelector('#importantE');
var notImportantIcon = document.querySelector('#notImportantE');

// buttons
var addSubject = document.querySelector('#add');
var submitForm = document.querySelector('#submitSubject')

const createSubject = document.createElement('section');
createSubject.classList.add('subject');


// Event Listeners

addSubject.addEventListener('click', newSubject);
submitForm.addEventListener('click',formSubmission);


subjectForm.style.display = 'none';
newTaskForm.style.display = 'none';

// function to create New Subject
function newSubject(e) {
    e.preventDefault();
    subjectForm.style.display = 'flex';
}
// add subject form
function formSubmission(e) {
    e.preventDefault();
    var subjectEl = document.createElement('section');

    // display task importance 
    var optionValue = document.getElementsByName('option');
    for (i = 0; i < optionValue.length; i++) {
        if (optionValue[i].checked) {
            console.log(optionValue[i].value);
            var subjectImportanceEl = document.createElement('p');
            switch (optionValue[i]) {
                case optionValue[0]:
                    subjectImportanceEl.textContent = '!!!'
                    subjectEl.appendChild(subjectImportanceEl);
                    break;
                case optionValue[1]:
                    subjectImportanceEl.textContent = '!!'

                    subjectEl.appendChild(subjectImportanceEl);
                    break;
                case optionValue[2]:
                    subjectImportanceEl.textContent = '!'

                    subjectEl.appendChild(subjectImportanceEl);
                    break;

                default:
                    console.log('somethign wong');
            }
        }
    }
    // display subject name and task
    var subjectNameEl = document.createElement('h4');
    var subjectTaskEl = document.createElement('p');

    var removetaskbtn = document.createElement('button');
    var addtaskbtn = document.createElement('button');
    removetaskbtn.textContent = '-';
    addtaskbtn.textContent = '+';

    subjectEl.appendChild(removetaskbtn);
    subjectEl.appendChild(addtaskbtn)

    subjectEl.classList.add('subject');

    subjectNameEl.textContent = subjectName.value;
    subjectTaskEl.textContent = subjectTask.value;

    subjectEl.appendChild(subjectNameEl);
    subjectEl.appendChild(subjectTaskEl);

    courses.appendChild(subjectEl);

    subjectTask.value = '';
    subjectName.value = '';

    subjectForm.style.display = 'none';


    addtaskbtn.addEventListener('click', addTask);
    newkTaskbtn.addEventListener('click',submitNewTask)

    function addTask() {
        console.log('prs')
        newTaskForm.style.display = 'block';
    }

    function submitNewTask(e) {
        e.preventDefault();
        console.log('yeo')
        var newTaskEl = document.createElement('p');
        newTaskEl.textContent = newTaskText.value;
        subjectEl.appendChild(newTaskEl);
        newTaskText.value = '';
        newTaskForm.style.display = 'none';
    }

}


function removeTask(subjectEl) {
    subjectEl.parentNode.removeChild(subjectEl)
}

