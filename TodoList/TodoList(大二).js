function add0(data) {
    if (data>= 0 && data <= 9)
         data = "0" + data;
    return data;
}
function flesh() {
    var d = new Date();
    var weekArr = ['星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ];
    var week = weekArr[d.getDay()];
    var time = d.getFullYear() + "-" + add0(d.getMonth()+1) + "-" + add0(d.getDate()) + " " + week + " " +
    add0(d.getHours()) + ":" + add0(d.getMinutes()) + ":" + add0(d.getSeconds());
    document.getElementById('time').innerHTML=time;
}
var timeCycle = setInterval(flesh, 10);

window.onload = function()
{
    var list = localStorage.getItem("todoList");
    var lists = JSON.parse(list);
    var data = [];
    data = (lists!=null) ? lists : [];
    showItems(data);
}

function check(ele){
    var list = localStorage.getItem("todoList");
    var data = JSON.parse(list);
    if(data[ele.index].isDone == false){
        data[ele.index].isDone = true;
        ele.nextSibling.style.textDecoration = "line-through";
        localStorage.setItem("todoList",JSON.stringify(data));
    }
    else{
        data[ele.index].isDone = false;
        ele.nextSibling.style.textDecoration = "";
        localStorage.setItem("todoList",JSON.stringify(data));
    }
}

function addItem(){
    var item= document.getElementById("item");
    var list = localStorage.getItem("todoList");
    var lists = JSON.parse(list);
    var data = [];
    if(item.value == ""){
        alert("内容不能为空!");
    }
    else{
        val = item.value;
        data = (lists!=null) ? lists : [];
        var todo = {
            // "index": data.length,
            "item": val,
            "isDone": false
        };
        data.push(todo);
        localStorage.setItem("todoList",JSON.stringify(data));
        showItems(data);
        item.value = "";
    }
    var ol = document.getElementById("lists");
    ol.scrollTop = ol.scrollHeight;     //让滚动条自动滚动到最底部
}

function showItems(data){
    var ol = document.getElementById("lists");
    ol.innerHTML = "";
    // while(ol.hasChildNodes()) ol.removeChild(ol.firstChild);
    for(var i=0;i<data.length;i++){
        var li = document.createElement("li");
        var input = document.createElement("input");
        var span = document.createElement("span");
        var a = document.createElement("a");
        span.index = i;
        a.index = i;
        input.index = i;
        input.setAttribute("type","checkbox");
        input.setAttribute("class","check");
        input.setAttribute("onclick","check(this)");
        span.setAttribute("onclick","edit(this)");
        a.setAttribute("href","#");
        a.setAttribute("onclick","deleteItem(this)");
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(a);
        ol.appendChild(li);
        span.innerHTML = data[i].item;
        a.innerHTML = "delete";
        if(data[i].isDone == true){
            span.style.textDecoration = "line-through";
            input.checked = true;
        }
    }
}

function deleteItem(ele){
    var list = localStorage.getItem("todoList");
    var data = JSON.parse(list);
    ele.parentElement.style.display = "none";
    data.splice(ele.index,1);
    showItems(data);
    localStorage.setItem("todoList",JSON.stringify(data));
}

function edit(ele){
    var text = ele.innerText;
    var input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    input.className = "editor";
    ele.innerText = "";
    input.setAttribute("maxlength","19");
    ele.parentNode.insertBefore(input,ele.nextSibling); //追加在某元素后面
    ele.setAttribute("style","margin-left:0px");
    input.focus();
    input.onblur = function(){
        ele.innerText = (this.value!="") ? this.value : text;
        var list = localStorage.getItem("todoList");
        var data = JSON.parse(list);
        data[ele.index].item = ele.innerText;
        localStorage.setItem("todoList",JSON.stringify(data));
        ele.parentNode.removeChild(ele.nextSibling);
        ele.setAttribute("style","margin-left:10px");
    }
    // ele.parentNode.removeChild(ele); //删除自身
}

function clear() {
    localStorage.clear();
    location.reload();
}
