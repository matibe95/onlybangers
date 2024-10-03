import { CHAT_ID } from "../constants/credentials";

export const filterAndCleanMessage = (data) => {
  const filteredMessages = data.result.filter(
    update => update.message && update.message.chat.id.toString() === CHAT_ID
  );

  // Crear un nuevo arreglo de objetos donde cada objeto tiene las propiedades deseadas
  const cancionesArray = filteredMessages.map(update => {
    const text = update.message.text;

    // const messageId = update.message.message_id;

    // Regex para extraer los valores entre llaves {}
    const matches = text.match(/{(.*?)}/g);

    if (matches && matches.length >= 4) {
      // Extraer los datos y eliminamos las llaves {}
      const [id, title, author, thumbnail, youtube = '', spotify = ''] = matches.map(match =>
        match.replace(/[{}]/g, '')
      );

      // Retornar un objeto con las propiedades divididas
      return {
        id,
        title,
        author,
        thumbnail,
        youtube,
        spotify
      };
    } else {
      return null; // Si el formato no coincide, retornamos null
    }
  }).filter(cancion => cancion !== null);
  return cancionesArray
}