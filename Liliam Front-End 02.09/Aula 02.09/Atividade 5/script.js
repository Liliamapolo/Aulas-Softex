 // Criando matriz 4x4
 document.addEventListener("DOMContentLoaded", () => {
    let matriz = [
      [1, 2, 3, 4],
      [2, 4, 6, 8],
      [3, 6, 9, 1],
      [7, 8, 6, 5]
    ];

    // Mostrando matriz
    let matrizTexto = "";
    for (let i = 0; i < matriz.length; i++) {
      matrizTexto += matriz[i].join(" ") + "\n";
    }
    document.getElementById("matriz").textContent = matrizTexto;

    // Pegando a diagonal principal (linha == coluna)
    let diagonal = [];
    for (let i = 0; i < matriz.length; i++) {
      diagonal.push(matriz[i][i]);
    }
    document.getElementById("diagonal").textContent = diagonal.join(" ");
});