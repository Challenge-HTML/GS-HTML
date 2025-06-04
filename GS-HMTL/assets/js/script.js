const formulario = document.getElementById("frmCadastro");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    console.log("Cadastrou");

});

function mostrarAviso() {
    alert("Enviado"); 
}

formulario.addEventListener("submit", (evento) => {
 
    evento.preventDefault();
 
    const nome = document.getElementById("idNome").value.trim();
    const email = document.getElementById("idEmail").value.trim();
 
    let usuario = {
        nomeObj: nome,
        emailObj: email
    }
 
    try {
 
        const { nomeObj, emailObj } = usuario;
 
        if ((nomeObj.length < 2) || (typeof nomeObj === "undefined") || (nomeObj == "")) {
 
            const erroMsg = document.getElementById("errNome");
            
            erroMsg.style.display = "block";
            erroMsg.classList.toggle('errorMsg');
 
            setTimeout(() => {
                erroMsg.classList.toggle('errorMsg');
                erroMsg.style.display = "none";
            }, 5000);
 
            throw new Error("O campo nome deve ser preenchido corretamente!");
        }
 
        if ((emailObj.length < 2) || (typeof emailObj === "undefined") || (emailObj == "")) {

            const erroMsg = document.getElementById("errEmail");

            erroMsg.style.display = "block";
            erroMsg.classList.toggle('errorMsg');
 
            setTimeout(() => {
                erroMsg.classList.toggle('errorMsg');
                erroMsg.style.display = "none";
            }, 5000);
 
            throw new Error("O campo email deve ser preenchido corretamente!");
        }
 
    } catch (error) {
        alert(error.message);
    }
 
});