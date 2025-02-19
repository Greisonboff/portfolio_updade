import axios from "axios";

// atualiza dados de projetos e certificados
export async function deletData(key, listType, onSucess) {
  try {
    // Defina as informações do repositório e do arquivo
    const pathToFile = `${listType}.json`; // Substitua pelo caminho para o arquivo JSON
    const token = localStorage.getItem("chave_de_acesso_github"); // Substitua pelo seu token de acesso pessoal

    // Construa a URL da API do GitHub
    const apiUrl = `${import.meta.env.VITE_API_URL_BASE}${pathToFile}`;

    const headers = {
      Authorization: `token ${token}`,
      "Content-Type": "application/json;charset=UTF-8", // Exemplo de cabeçalho de tipo de conteúdo
      // Outros cabeçalhos personalizados, se necessário
    };

    // Objeto de configuração da requisição
    const config = {
      headers: headers,
      // Outras opções de configuração, como method, data, params, etc.
    };

    // Solicitação GET para obter o conteúdo atual
    const response = await axios.get(apiUrl, config);
    const currentContent = JSON.parse(
      decodeURIComponent(escape(atob(response.data.content)))
    );

    const elementEdit = currentContent.filter((element) => element.key !== key);

    // Construa os dados para a atualização
    const newData = {
      message: "update edit",
      content: btoa(unescape(encodeURIComponent(JSON.stringify(elementEdit)))),
      sha: response.data.sha, // Inclua o SHA atual do arquivo
    };

    // Solicitação PUT para atualizar o arquivo
    await axios.put(apiUrl, JSON.stringify(newData), { headers });

    onSucess?.();

    return true;
  } catch (error) {
    console.error("Erro:", error);
    return false;
  }
}
