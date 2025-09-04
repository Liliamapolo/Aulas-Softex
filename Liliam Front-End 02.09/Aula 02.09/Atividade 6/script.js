 // Matriz 2x3
    let matriz = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    // Mostrar matriz original
    let textoMatriz = "";
    for (let i = 0; i < matriz.length; i++) {
      textoMatriz += matriz[i].join(" ") + "\n";
    }
    document.getElementById("matriz").textContent = textoMatriz;

    // Criar matriz transposta (3x2)
    let transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
      transposta[i] = [];
      for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }

    // Mostrar transposta
    let textoTransposta = "";
    for (let i = 0; i < transposta.length; i++) {
      textoTransposta += transposta[i].join(" ") + "\n";
    }
    document.getElementById("transposta").textContent = textoTransposta;