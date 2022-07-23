let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["❌", "⛔", "🚫", "⚠️", "☢️"])
	let emoji = {
    	react: {
    		text: emot,
    		key: m.key
    	}
    }
    conn.sendMessage(m.chat, emoji)
}
handler.customPrefix = /(ajg|anji(r|m|ng)|kntl|kontol|mm(k|q)|meme(k|q)|tolol|babi|monye(t|d)|bgs(t|d)|bngs(t|d)|bangsa(t|d)|bego|bodoh|tai|bngke|bangke|tomlol|bjir|njir|asu|asw|gblk|goblok|aho|baka|kuso|chikuso|anjg|bajingan|pepe(k|q)|meki|titi(t|d)|peler|tetek|toket|ngewe|idiot|(k|ng)ento(t|d)|jembu(t|d)|dajjal|janc(u|o)k|pantek|pukimak|kimak|kampang|lonte|col(i|mek)|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole|fak|fuk|shit|nibba|bullshit|mthrf?|motherfu?|jelek|buruk|payah|burik)/i //maap klo tomxic :v
handler.command = new RegExp

module.exports = handler