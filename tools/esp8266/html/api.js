function toggle(name, hide) {
    var elm = document.getElementsByName(name)[0];
    if(hide) {
        if(!elm.classList.contains("hide"))
            elm.classList.add("hide");
    }
    else
        elm.classList.remove('hide');
}

function getAjax(url, ptr, method="GET", json=null) {
    var xhr = new XMLHttpRequest();
    if(xhr != null) {
       xhr.open(method, url, true);
       xhr.onreadystatechange = p;
       if("POST" == method)
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
       xhr.send(json);
    }
    function p() {
        if(xhr.readyState == 4) {
            if(null != xhr.responseText)
                ptr(JSON.parse(xhr.responseText));
        }
    }
}

function des(val) {
    e = document.createElement('p');
    e.classList.add("subdes");
    e.innerHTML = val;
    return e;
}

function lbl(id, val) {
    e = document.createElement('label');
    e.htmlFor = id;
    e.innerHTML = val;
    return e;
}

function inp(name, val, max=32, cl=["text"]) {
    e = document.createElement('input');
    e.classList.add(...cl);
    e.name = name;
    e.value = val;
    e.maxLength = max;
    return e;
}

function sel(name, opt, selId) {
    e = document.createElement('select');
    e.name = name;
    for(it of opt) {
        o = document.createElement('option');
        o.value = it[0];
        o.innerHTML = it[1];
        if(it[0] == selId)
            o.selected = true;
        e.appendChild(o);
    }
    return e;
}

function div(cl) {
    e = document.createElement('div');
    e.classList.add(...cl);
    return e;
}

function span(val, cl) {
    e = document.createElement('span');
    e.innerHTML = val;
    e.classList.add(...cl);
    return e;
}
