
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `🧑🏻‍💻️ Ingresa el título de una canción\n\n👉🏻 Ejemplo ${usedPrefix + command} lejanía ryan castro`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `📵️️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
╭•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ ᵇᵒᵗ❂◄⋆҈͜͡•╮
╽☆TURBO MÚSICA☆
┃🧑🏻‍💻 Título : ${title}
┃📆 Publicado: ${ago}
┃⏱️ Duración: ${timestamp}
┃👀 Vistas: ${views}
╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯`
 await conn.sendButton(m.chat, play, igfg, thumbnail, [
    ['🎧 AUDIO', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 VÍDEO', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
