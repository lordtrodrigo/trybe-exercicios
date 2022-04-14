
        // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        // - document.getElementById()
        // - document.getElementsByClassName()
        // - document.getElementsByTagName()
        // - document.querySelector()
        // - document.querySelectorAll()

        // 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

        function changeText(newText) {
            document.querySelector('p').innerText = newText;
        }

        changeText('Em dois anos me vejo atuando no mercado como desenvolvedor pleno.');


        // 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109).

        function changeBackground1(color) {
            document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
        }

        changeBackground1('rgb(76,164,109)');


        // 3. Crie uma função que mude a cor do quadrado vermelho para branco.

        function changeBackground2(color) {
            document.querySelectorAll('section','.center-content')[0].style.backgroundColor = color;
        }

        changeBackground2('white');


        // 4. Crie uma função que corrija o texto da tag <h1>.

        function correctText(newText) {
            document.getElementsByTagName('h1')[0].innerText = newText;
        }
        correctText('Exercício 5.1 - JavaScript');


        // 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        
        function upperCase() {
            // let text = '';
            for (let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
                document.getElementsByTagName('p')[index].innerText = document.getElementsByTagName('p')[index].innerText.toUpperCase();
                
            }
            // let text = document.getElementsByTagName('p')[0].innerText;
            // text = text.toUpperCase();

            // document.getElementsByTagName('p')[0].innerText = document.getElementsByTagName('p')[0].innerText.toUpperCase();
        }
        upperCase();
        // let text = document.getElementsByTagName('p')[0].innerText;

        
        // 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

        function pTags() {
            document.getElementsByTagName('p').length
            for (index = 0; index < document.getElementsByTagName('p').length; index += 1) {
                console.log(document.getElementsByTagName('p')[index].innerText);
            }
        }

        pTags();



