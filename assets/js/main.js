$(document).ready(function () {
    $("#hide").click(function () {
        $("#toggle").fadeIn();
        $('body').addClass("fixedPosition");
    })
    $("#closebtn").on("click", function () {
        $("#toggle").fadeOut("slow");
        $('body').removeClass("fixedPosition");

    });


});

window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
    var widthScreen = document.documentElement.clientWidth;

    (widthScreen > 920) ? elem = document.getElementById("toggle").style.display = "block"
        : elem = document.getElementById("toggle").style.display = "none";
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




$(document).ready(function () {

    $("#edit-msc").hide();

    $("#switch1").click(function () {

        $("#edit-msc").toggle();
    });

});

$(document).ready(function () {
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if (input.length) {
            input.val(log);
        } else {
            // if( log ) alert(log);
        }

    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
});