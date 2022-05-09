export const validate = (name, email, message) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    if (!name) {
        errors.name = 'This field is required';
    } else if (name.indexOf(" ") >= 0) {
        errors.name = 'This is not a valid name';
    }

    if (!email) {
        errors.email = 'This field is required';
    } else if (!re.test(String(email).toLowerCase())) {
        errors.email = 'This is not a valid email';
    }

    if (!message) {
        errors.message = 'This field is required';
    } else if (message.length < 120) {
        errors.message = 'The message must be at least 120 characters';
    }
    if (!errors.name && !errors.email && !errors.message) {
        errors.ok = true;
    }
    return errors;
}