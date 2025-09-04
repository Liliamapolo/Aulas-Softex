// Matriz 3x3: [aluno][prova]
    let notas = [
      [7.5, 8.0, 9.0],  // aluno 1
      [6.0, 7.5, 8.0],  // aluno 2
      [9.0, 8.5, 10.0]  // aluno 3
    ];

    let tabela = document.getElementById("tabelaNotas");

    // Cabeçalho
    let cabecalho = "<tr><th>Aluno</th><th>Prova 1</th><th>Prova 2</th><th>Prova 3</th><th>Média</th></tr>";
    tabela.innerHTML = cabecalho;

    // Linhas dos alunos
    for (let i = 0; i < notas.length; i++) {
      let soma = 0;
      for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
      }
      let media = (soma / notas[i].length).toFixed(2);

      tabela.innerHTML += `
        <tr>
          <td>Aluno ${i + 1}</td>
          <td>${notas[i][0]}</td>
          <td>${notas[i][1]}</td>
          <td>${notas[i][2]}</td>
          <td><b>${media}</b></td>
        </tr>
      `;
    }
  
