function checkEmail(ele){
    var email = ele.value;
    var el = document.getElementById("el");
    var elOk = document.getElementById("elOk");
    var elSpace = document.getElementById("elSpace");
    var emailError = document.getElementById("emailError");
    var emailReg = "^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.com$";  //验证邮箱格式(1~多个字符@1~多个字符.com)
    if(el.value == ""){
        emailError.style.display = "none";
        elOk.style.display = "none";
        el.setAttribute("class","");
        elSpace.setAttribute("style","margin-left:25px");
        return ;
    }
    if(!email.match(emailReg)){
        emailError.style.display = "inline";
        elOk.style.display = "none";
        el.setAttribute("class","");
        elSpace.setAttribute("style","margin-left:25px");
    }
    else{
        emailError.style.display = "none";
        elOk.style.display = "inline";
        el.setAttribute("class","ok");
        elSpace.setAttribute("style","margin-left:0px");
    }
}
// 密码长度（9~15 位）、密码复杂度（不能有重复的字符，数字要求在[2,8]之间，
// 可以包含任意大小写字母，必须有三个大写字母，必须包含{#,&,*,?}四个特殊字符中的一个）
function checkPassword(ele){
    var password = ele.value;
    var pw = document.getElementById("pw");
    var pwOk = document.getElementById("pwOk");
    var pwSpace = document.getElementById("pwSpace");
    var pwError = document.getElementById("pwError");
    var RepeatReg = /.*(.).*\1.*/g;     //判断字符串有重复字符
    var pwReg1 = /^[2-8a-zA-Z#&*?]{9,15}$/g;
    var pwReg2 = /.*([A-Z]{1}).*([A-Z]{1}).*([A-Z]{1}).*/g;  //“.*”表示匹配0到n个任意字符
    var pwReg3 = /[#&*?]{1}/g;
    if(pw.value == ""){
        pwError.style.display = "none";
        pwOk.style.display = "none";
        pw.setAttribute("class","");
        pwSpace.setAttribute("style","margin-left:25px");
        return ;
    }
    if(RepeatReg.test(password)||(!pwReg1.test(password))||(!pwReg2.test(password))||(!pwReg3.test(password))){
        pwError.style.display = "inline";
        pwOk.style.display = "none";
        pw.setAttribute("class","");
        pwSpace.setAttribute("style","margin-left:25px");
    }
    else{
        pwError.style.display = "none";
        pwOk.style.display = "inline";
        pw.setAttribute("class","ok");
        pwSpace.setAttribute("style","margin-left:0px");
    }
}
function checkRePw(ele){
    var rePassword = ele.value;
    var pw = document.getElementById("pw");
    var rePw = document.getElementById("rePw");
    var rePwOk = document.getElementById("rePwOk");
    var rePwSpace = document.getElementById("rePwSpace");
    var rePwError = document.getElementById("rePwError");
    if(rePw.value == ""){
        rePwError.style.display = "none";
        rePwOk.style.display = "none";
        rePw.setAttribute("class","");
        rePwSpace.setAttribute("style","margin-left:25px");
        return ;
    }
    if(pw.className == "ok"){
        if(pw.value == rePassword){
            rePwError.style.display = "none";
            rePwOk.style.display = "inline";
            rePw.setAttribute("class","ok");
            rePwSpace.setAttribute("style","margin-left:0px");
        }
        else{
            rePwError.style.display = "inline";
            rePwOk.style.display = "none";
            rePw.setAttribute("class","");
            rePwSpace.setAttribute("style","margin-left:25px");
        }
    }
}
function register(){
    var el = document.getElementById("el");
    var pw = document.getElementById("pw");
    var rePw = document.getElementById("rePw");
    if(el.className == "ok" && pw.className == "ok" && rePw.className == "ok"){
        alert("注册成功！");
        location.reload();
    }
    else{
        alert("注册失败！");
        location.reload();
    }
}
