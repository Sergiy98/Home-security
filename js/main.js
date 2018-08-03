
$(document).ready(function(){
    $('.sl').slick({
        dots: true,
        arrows: false,
        fade: true
});
});

// REGISTRATION
document.getElementById('submit').onclick = function () {
    var first_name = document.getElementById('1').value;
    localStorage.setItem('FirstName', first_name);

    var second_name = document.getElementById('2').value;
    localStorage.setItem('SecondName', second_name);

    var email = document.getElementById('3').value;
    localStorage.setItem('E-mail', email);

    var number = document.getElementById('4').value;
    localStorage.setItem('Number', number);

    var password = document.getElementById('pswd1').value;
    localStorage.setItem('Password', password);

    // window.open("http://home-security.space/log_in_form.html")



// LOGIN

    var l_email;
    var l_pswd;
    var local_email;
    var local_pswd;

    document.getElementById('logIn').onclick = function () {
        l_email = document.getElementById("l_email").value;
        l_pswd = document.getElementById("l_pswd").value;
        local_email = localStorage.getItem("E-mail").value;
        local_pswd = localStorage.getItem("Password").value;
        console.log(local_email);
        if (l_email == local_email && l_pswd == local_pswd) {
            window.open("http://home-security.space/personal_offise.html");
        }
    }

}
stop