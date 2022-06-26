const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

var listTenDangNhap = new Array("itstudent", "itforstudent", "gtnm");
var listMatKhau = new Array("123", "12345", "1234");
//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
    document.getElementById("matkhau").value = "";
    document.getElementById("rmatkhau").value = "";
    document.getElementById("hoten").value = "";
    document.getElementById("email").value = "";
    $('#ketqua').html("");
});

// jquery js
$(document).ready(function() {
    var ktTen = false;
    var ktEmail = false;
    var ktMatKhau = false;
    var email = "";
    var matkhau = "";
    $('#hoten').blur(function() {
        var hoTen = $('#hoten').val();
        if (hoTen.length < 6) {
            document.getElementById("hoten").value = "";
            $("#hoten").attr("placeholder", "Họ và tên phải >= 6 ký tự");
            ktTen = false;
        } else {
            $("#ihoten").attr("class", "uil uil-user-check");
            ktTen = true;
        }
    });
    $('#email').blur(function() {
        email = $('#email').val();
        if (!email.includes("@")) {
            document.getElementById("email").value = "";
            $("#email").attr("placeholder", "định dạng email không hợp lệ ");
            ktEmail = false;
        } else {
            $("#iemail").attr("class", "uil uil-envelope-check");
            ktEmail = true;
        }
    });
    $('#rmatkhau').blur(function() {
        matkhau = $('#matkhau').val();
        var rmatkhau = $('#rmatkhau').val();
        console.log(matkhau);
        console.log(rmatkhau);
        if (rmatkhau != matkhau) {
            document.getElementById("matkhau").value = "";
            document.getElementById("rmatkhau").value = "";
            $("#rmatkhau").attr("placeholder", "mật khẩu và nhập lại không khớp ");
            $("#matkhau").attr("placeholder", "mật khẩu và nhập lại không khớp ");
            ktMatKhau = false;
        } else {
            $("#irmatkhau").attr("class", "uil uil-shield-check");
            $("#imatkhau").attr("class", "uil uil-shield-check");
            ktMatKhau = true;
        }
    });
    $("#dangky").click(function() {
        if (ktTen == false || ktEmail == false || ktMatKhau == false) {
            alert("Đăng ký thất bại vì một số trường chưa hoàn thành việc điền dữ liệu");
        } else {
            listTenDangNhap.push(email);
            listMatKhau.push(matkhau);
            $('#ketqua').html("Đăng ký thành công vui lòng check email: <b>" + email + "</b> để xác nhận thông tin");
        }
    });
});

$(document).ready(function() {
    var checkU = false;
    var checkP = false;
    var index = -1;

    $('#tendangnhap').blur(function() {
        var tendangnhap = $('#tendangnhap').val();
        for (var i = 0; i < listTenDangNhap.length; i++) {
            if (tendangnhap == listTenDangNhap[i]) {
                checkU = true;
                index = i;
                break;
            } else {
                checkU = false;
            }
        }

        if (index != -1) {
            $('#matkhaulogin').blur(function() {
                var matkhau = $('#matkhaulogin').val();
                if (matkhau == listMatKhau[index]) {
                    checkP = true;
                } else {
                    checkP = false;
                }
            });
        }
        $("#dangnhap").click(function() {
            if (checkU == false) {
                alert("username không tồn tại");
            }
            if (checkU == true && checkP == true) {
                alert("đăng nhập thành công");
            } else {
                alert("sai mật khẩu");
            }
        });
    });
});