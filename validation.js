/* function validate() will validate form data */
function validate() {

    /* these are the variables we're removing.
    var sid = document.getElementById("sid").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var uname = document.getElementById("uname").value;
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    */

    /* These are the new variables, using step 6.1 */
    var sid   = $("#sid").val();
    var pwd1  = $("#pwd1").val();
    var pwd2  = $("#pwd2").val();
    var uname = $("#uname").val();
    var genm  = $("#genm").prop("checked");
    var genf  = $("#genf").prop("checked");


    var errMsg = "";                                /* create variable to store the error message */
    var result = true;                              /* assumes no errors */
    var pattern = /^[a-zA-Z ]+$/;                   /* regular expression for letters and spaces only */

    /* Rule 1, check if all required data are entered */
    if (sid == "") {
        errMsg += "User ID cannot be empty.\n";
    }
    if (pwd1 == "") {
        errMsg += "Password cannot be empty.\n";
    }
    if (pwd2 == "") {
        errMsg += "Retype password cannot be empty.\n";
    }
    if (uname == "") {
        errMsg += "User name cannot be empty.\n";
    }
    /* Replaced the gender if statement */
	if ((!genm) && (!genf)) {
        errMsg += "A gender must be selected.\n";
    }

    /* Rule 2, check if the user ID contains an @ symbol */
    if (sid.indexOf('@') == 0) {
        errMsg += "User ID cannot start with an @ symbol.\n";
    }
    if (sid.indexOf('@') < 0) {
        errMsg += "User ID must contain an @ symbol.\n";
    }

    /* Rule 3, check if password and retype password are the same */
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }

    /* Rule 4, check if user name contains only letters and spaces */
    if (!uname.match(pattern)) {
        errMsg += "User name contains symbols.\n";
    }

    /* Display error message if any error(s) is/are detected */
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }

    return result;
}


/* write the function toggle() that collapse/expand a section */
function toggle() {
    $(this).parent().next().slideToggle();

    /* Update the symbol on the "button" */
    if ($(this).html() == "[-]") {
        $(this).html("[+]");
    } else {
        $(this).html("[-]");
    }
}

/* link HTML elements to corresponding event function */
function init () {
	/*commenting out the original and only leaving the new (red text) part */
    /* assign the <form> element to variable regForm */
    /* var regForm = document.getElementById("regform");

    link function validate() to the onsubmit event of the form
    regForm.onsubmit = validate; */

    $("#regform").submit(validate);
}

/* execute function init() once the window is loaded */
/* window.onload = init; */

$(document).ready(init);

/* execute function init() once the window is loaded */
/* Old function init
window.onload = init;
*/

/* jQuery version */
$(document).ready(init);
