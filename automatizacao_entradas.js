const listaNomes = [];

while (true) {
    const entradaUsuario = prompt("Digite um nome por vez quantas vezes quiser, quando satisfeito é só digitar sair.");

    if (entradaUsuario.toLowerCase() !== "sair") {
        listaNomes.push(entradaUsuario);  
    } else {
        break;
    }
};

for (let indice = 0; indice < listaNomes.length; indice++) {
    const nome = listaNomes[indice];
    alert(`${indice + 1} : ${nome}`);
};

for (let nome of listaNomes) {
    alert(`Bem-vindo(a), ${nome}!`);
};

