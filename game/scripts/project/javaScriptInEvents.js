

const scriptsInEvents = {

	async Ejogo_Event3_Act2(runtime, localVars)
	{
		const mensagens = [
		  "🥺 Oops... vamos tentar de novo juntinhos?",
		  "🧸 Não foi dessa vez, mas eu acredito em você!",
		  "🌸 Quase! Você tá indo super bem!",
		  "🍓 Errar faz parte — bora mais uma?",
		  "✨ Tudo bem cair, o importante é levantar!",
		  "🐾 Ops! Foi só um tropeço fofinho!",
		  "💖 Calma, você consegue sim!",
		  "🌈 Mais uma tentativa! Tô torcendo por você!",
		  "🫶 Ei, não desiste! Eu tô com você!",
		  "🍭 Quase lá! Só mais um pouquinho!"
		];
		
		const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
		
		runtime.globalVars.MensagemMorte = mensagemAleatoria;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
