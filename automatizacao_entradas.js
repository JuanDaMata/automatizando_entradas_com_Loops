const listaEntradas = [];

while (true) {
    const entradaUsuario = prompt("Digite uma coisa por vez quantas vezes quiser, quando satisfeito é só digitar sair.");

    if (entradaUsuario.toLowerCase() !== "sair") {
        listaEntradas.push(entradaUsuario);  
    } else {
        break;
    }
};

for (let index = 0; index < listaEntradas.length; index++) {
    const entrada = listaEntradas[index];
    alert(`${index + 1} : ${entrada}`);
};

for (let entrada of listaEntradas) {
    alert(`Bem vindo(a), ${entrada}!`);
};

