function exemplo1() {
      const numeroSecreto = Math.floor(Math.random() * 10) + 1;
      console.log("Número secreto gerado:", numeroSecreto);
      const chute = parseInt(prompt("Adivinhe o número secreto (1 a 10):"));
      if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou!");
      } else {
        alert("Errou! O número era ${numeroSecreto}");
      }
    }

    function exemplo2() {
      const nome = prompt("Digite seu nome:");
      const nota1 = parseFloat(prompt("Digite a primeira nota:"));
      const nota2 = parseFloat(prompt("Digite a segunda nota:"));
      const media = (nota1 + nota2) / 2;
      const status = media >= 7 ? "Aprovado" : "Reprovado";
      alert(` ${nome}, sua média foi ${media.toFixed(1)}. Situação: ${status}.`);
    }

    function exemplo5() {
      const container = document.getElementById("conteudo");
      container.innerHTML = `
        <h2>💾 Jogo do Salvar Texto</h2>
        <p>Digite seu texto abaixo e salve em um arquivo!</p>
        <textarea id="textoParaSalvar" placeholder="Digite seu texto aqui..." rows="6" cols="50"></textarea>
        <br><br>
        <input type="text" id="nomeArquivo" placeholder="Nome do arquivo (sem extensão)" />
        <br><br>
        <button onclick="salvarTexto()">💾 Salvar Arquivo</button>
        <p id="resultado"></p>
      `;
    }

    function salvarTexto() {
      const texto = document.getElementById("textoParaSalvar").value;
      const nomeArquivo = document.getElementById("nomeArquivo").value;
      const resultado = document.getElementById("resultado");

      if (!texto.trim()) {
        resultado.textContent = "⚠ Digite algum texto para salvar!";
        resultado.style.color = "#d63031";
        return;
      }

      const nomeCompleto = nomeArquivo.trim() || "meu_texto";
      
      const blob = new Blob([texto], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = nomeCompleto + '.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      resultado.textContent = `✅ Arquivo "${nomeCompleto}.txt" salvo com sucesso!`;
      resultado.style.color = "#00b894";
    }