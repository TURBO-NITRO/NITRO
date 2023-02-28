
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `🧑🏻‍💻 Ingresa el título de una canción\n\n👉🏻 Ejemplo\n${usedPrefix + command} lejanía ryan castro `
    m.react('😻')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎧 AUDIO', `${usedPrefix}fgmp3 ${v.url}`, `᳆͜͡➣ ⌚ Duración: ${v.timestamp}\n᳆͜͡➣ 👀 Vistas: ${v.views}\n᳆͜͡➣ 👉🏻 Título : ${v.title}\n᳆͜͡➣ 📆 Publicado: ${v.ago}\n`],
          ['🎥 VÍDEO', `${usedPrefix}fgmp4 ${v.url}`, `᳆͜͡➣ ⌚ Duración: ${v.timestamp}\n᳆͜͡➣ 👀 Vistas: ${v.views}\n᳆͜͡➣ 📌 Título : ${v.title}\n᳆͜͡➣ 📆 Publicado: ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, ' ☆TURBO MÚSICA☆', `\n 📋 Aqui una lista de resultados de :\n ${text}`, igfg, `Click Aquí `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
