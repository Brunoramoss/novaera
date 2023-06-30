function toggleMode() 
{
    let img = document.getElementById('profile-img');
    const html = document.documentElement
    html.classList.toggle('light');
    img.setAttribute("src", html.classList.contains("light") ? "./imagem/bruno-light.jpeg" : "./imagem/bruno ramos.jpg");
    /*if(html.classList.contains('light'))
    {
        html.classList.remove('light')
    }
    else
    {
        html.classList.add('light')
    }*/

     /*eu vou pegar a tag image e substituir a imagem
     porem vai ter uma condição
     quando tiver light mode, adicionar a imagem light
     se tiver sem light mode, manter a imagem normal*/
}

