$(function valid() {
    $('#js_register_form').validate({
        rules: {
            first_name: {
                required: true
            },
            second_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required:true,
                number: true
            },
            password1: {
                required: true,
                minlength: 6
            },
            password2: {
                required: true,
                minlength: 6,
                equalTo: "#pswd1"
            }
        }
    });
});