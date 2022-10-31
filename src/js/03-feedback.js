const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

// refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onTextarealInput);

function onEmailInput(event) {
    const email = event.currentTarget.value;

    // localStorage.setItem("feedback-form-state", email)
};

function onTextarealInput(event) {
    const message = event.currentTarget.value;

    // localStorage.setItem("feedback-form-state", message)
};



const createFeedback = function (event, onEmailInput, onTextarealInput) {
    const feedbackFormState = {
        email: onEmailInput(event),
        message: onTextarealInput(event),
    };

    console.log(feedbackFormState);

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
};

createFeedback();

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log('This is SUBMIT');
//     event.currentTarget.reset()
// }