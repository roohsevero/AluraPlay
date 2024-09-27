async function listaVideo(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criarVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualização`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possivel enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideo,
    criarVideo,
    buscaVideo
}