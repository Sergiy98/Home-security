$(function () {
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
            password: {
                required: true,
                minlength: 6
            }
        }
    });
});