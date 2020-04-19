document.querySelectorAll(".botoes a").forEach(function (cada) {
    cada.onclick = function () {
        var classe = this.dataset.classe;
        var aAnimacao = document.querySelector(".mostrarAnimacao h1");

        aAnimacao.removeAttribute("class");

        setTimeout(function () {
            aAnimacao.classList.add(classe);
            document.querySelector(".mostrarClasse strong").innerHTML = classe;
        }, 200)
    }
});

document.querySelector(".funciona a").onclick = function () {
    var comoFunciona = document.querySelectorAll(".funciona");

    comoFunciona.forEach(function (e) {
        if (e.classList.contains("ver-todos")) {
            e.classList.remove("ver-todos");
        } else {
            e.classList.add("ver-todos");
        }
    })
};