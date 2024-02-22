// Global Variables
var addSubject = document.querySelector('#add');
var form = document.querySelector('form');
var courses = document.querySelector('#courses');
var addTask = document.querySelector('#addTask');
var subjectForm = document.querySelector('#subjectForm')

const createSubject = document.createElement('section');
createSubject.classList.add('subject')

// Event Listeners
addTask.addEventListener('click',newTask)
addSubject.addEventListener('click', newSubject);

// function to create New Subject
function newSubject(e) {
    e.preventDefault();


    let answer = prompt('whats the subject?');
    console.log(answer);
    if (prompt != '') {
        //create item for course subject

        //added heading
        let newCourse = document.createElement('h4');
        newCourse.textContent = answer;
        createSubject.appendChild(newCourse);
        courses.appendChild(createSubject);
    }
    else {
        console.log('must add subject');
    }
    //task details
    let answerTask = prompt('Any task ?');
    if (prompt != '') {
        const createTask = document.createElement('p');
        createTask.textContent = answerTask;
        createSubject.appendChild(createTask);
    }
    else {
        console.log('must add task!');

    }
    let importance = prompt('How important is this task ?');

};

function newTask (){
//    let task = prompt('whats the task?');
//    var taskObject = document.createElement('ul');
//    var taskItem = document.createElement('li');
//    taskItem.textContent = taskObject ;
//    taskObject.appendChild(taskItem);

//    createSubject.appendChild(taskObject);
}