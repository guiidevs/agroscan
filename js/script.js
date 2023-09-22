//PERFIL

const perfil = document.getElementById("perfil")
const nav_perfil = document.getElementById("nav_perfil")

perfil.addEventListener("click", (e) => {
    if(nav_perfil.style.display == "flex"){
        nav_perfil.style.display = "none"

        perfil.style.left = "300px"
        perfil.style.position = "";
        perfil.style.color = "white";
    }else{
        nav_perfil.style.display = "flex"

        perfil.style.left = "300px"
        perfil.style.position = "fixed";
        perfil.style.color = "maroon";
    }
})
//HAMBURGUER

const hamburguer = document.getElementById("hamb")
const bar1 = document.querySelector("#bar1")
const bar2 = document.querySelector("#bar2")
const nav = document.getElementById("nav")

hamburguer.addEventListener("click", (e) => {
    hamburguer.classList.toggle("active")
    if(nav.style.display == "flex"){
        nav.style.display = "none"
        hamburguer.style.right = "300px"
        hamburguer.style.position = "";
        bar1.style.background = "white";
        bar2.style.background = "white";
    }else{
        nav.style.display = "flex"
        hamburguer.style.right = "300px"
        hamburguer.style.position = "fixed";
        bar1.style.background = "maroon";
        bar2.style.background = "maroon";
    }
})

//INPUTS RANGE

const ph = document.getElementById("ph")
const umidade = document.getElementById("umidade")
const nutrientes = document.getElementById("nutrientes")
const pesticidas = document.getElementById("pesticidas")
const carbono = document.getElementById("carbono")
const nitroso = document.getElementById("nitroso")
const poluentes = document.getElementById("poluentes")

//INPUTS

const int_ph = document.getElementById("int_ph")
const int_umidade = document.getElementById("int_umidade")
const int_nutrientes = document.getElementById("int_nutrientes")
const int_pesticidas = document.getElementById("int_pesticidas")
const int_carbono = document.getElementById("int_carbono")
const int_nitroso = document.getElementById("int_nitroso")
const int_poluentes = document.getElementById("int_poluentes")

//INICIALIZAÇÃO

int_ph.value = ph.value 
int_umidade.value = umidade.value 
int_nutrientes.value = nutrientes.value 
int_pesticidas.value = pesticidas.value 
int_carbono.value = carbono.value 
int_nitroso.value = nitroso.value 
int_poluentes.value = poluentes.value 

//SISTEMA DE IGUALDADE

mudarPorcentagem(ph, int_ph);
mudarPorcentagem(umidade, int_umidade);
mudarPorcentagem(nutrientes, int_nutrientes);
mudarPorcentagem(pesticidas, int_pesticidas);
mudarPorcentagem(carbono, int_carbono);
mudarPorcentagem(nitroso, int_nitroso);
mudarPorcentagem(poluentes, int_poluentes);

function mudarPorcentagem(element, element2){

    element.addEventListener("input", (event) => {
        element2.value = element.value
    })

}