sessionStorage.setItem("sessionScore", 0);

    document.getElementById('localCount').innerHTML = localStorage.getItem("local");
    document.getElementById('sessionCount').innerHTML = sessionStorage.getItem("sessionScore");


    function localStorageCount() {
        console.log(localStorage.getItem("local"))
        localStorage.setItem("local", Number(localStorage.getItem("local")) + 1);
        document.getElementById('localCount').innerHTML = localStorage.getItem("local");
    }

    function sessionStorageCount() {
        sessionStorage.setItem("session", Number(sessionStorage.getItem("session")) + 1);
        document.getElementById('sessionCount').innerHTML = sessionStorage.getItem("session");

    }