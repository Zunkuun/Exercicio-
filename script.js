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

       document.getElementById("formulario").addEventListener("submit", function (e) {
          e.preventDefault();
      
          const valores = [];
          for (let i = 1; i <= 5; i++) {
            const valor = document.getElementById(`valor${i}`).value.trim();
            if (valor === "") {
              alert(`O campo Valor ${i} está vazio.`);
              return;
            }
            valores.push(valor);
          }
      
          const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");
      
          const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "valores.txt";
          link.click();
        });
}
