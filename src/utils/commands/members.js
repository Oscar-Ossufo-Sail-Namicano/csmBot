const {greetings, respostasSaudacao, aboutCMDS, botVersion} = require('../config')
const { delay } = require('../general')


const hello  =  {
    cmd: greetings,
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender)
        await delay(2000)
        await sock.sendMessage(sender, {text: respostasSaudacao[text]});
        sock.sendPresenceUpdate('composing', sender)
        await delay(2000)
        await sock.sendMessage(sender, {text: 'Escreva     *`ajuda`*     para ver como posso lhe ajudar hoje!'});
    }
}

const aboutStore = {
    cmd: aboutCMDS,
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender)
        await delay(4000)
        await sock.sendMessage(sender, {text: `
👋 Olá! Bem-vindo(a) ao *Super Compras*!

Somos o primeiro marketplace de Lichinga e de todo o Niassa, trazendo a tecnologia para perto de você. Estamos sempre evoluindo para oferecer a melhor experiência de compra e venda!

---

*🛍️ Vantagens para Quem Compra:*

* **Entrega Super Rápida:** Receba seus produtos em menos de *24 horas*. A comodidade que você merece, direto na sua porta!
* **Compra Segura:** Nosso processo é simples, rápido e totalmente seguro para você.
* **Variedade de Produtos:** Encontre tudo o que precisa sem sair de casa.

---

*💼 Vantagens para Quem Vende:*

* **Alcance seu Público:** Expanda seu negócio para toda a região de Niassa.
* **Vendas 24/7:** Sua loja fica online o tempo todo, gerando vendas mesmo enquanto você descansa.
* **Gestão Fácil:** Cadastre sua loja e gerencie seus produtos e pedidos de forma simples.

---

Junte-se a nós e faça parte da nova era do comércio em Niassa!
`
        })
    }
}

const howToBeCostumer = {
    cmd: ['1', '1-', '1 - ', '1-', '1.', '1 . ', '1 .','como fazer compras?', 'como ser cliente?', 'como fazer compras', 'como comprar', 'como-comprar'],
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender);
        await delay(4000);
        await sock.sendMessage(sender, {text: `*Como Comprar no _Super Compras_:*
Comprar é muito fácil e não é preciso ter uma conta, mas recomendamos que crie para facilitar futuras compras..

* *1.: Acesse o site supercompras.onrender.com.*

* *2.: Escolha os produtos que deseja clicando no botão _leva_*.

* *3.: Clique no ícone do carrinho e siga as instruções para finalizar seu pedido.*

* *4.: No momento da compra, preencha corretamente o endereço de entrega, incluindo o bairro, para garantir que seu pedido chegue no local certo.*

Após o pagamento, o vendedor prepara seu pedido para a entrega.

Simples assim! Seu produto será entregue com rapidez (dentro de 30 minutos) e segurança no endereço que você informou.

*Nota:* Ao finalizar a compra no site, o sistema vai levar-te de volta para este chat, onde eu vou te orientar sobre como realizar o pagamento.

Em breve, todo o processo de pagamento será feito diretamente no site, sem necessidade da minha assistência.

Por enquanto, não se preocupe — estou disponível 24 horas por dia para te atender sempre que precisar (EU NAO APANHO SONO)!
`})
    }
}

const howToBeSeller = {
    cmd: ['2', '2.', '2 .', '2 . ', '2. ', '2-', '2 -', '2 - ', '2- ', 'Como vender no Super Compras?', 'como-vender', 'como vender no super compras?'],
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender)
        await delay(4000);
        await sock.sendMessage(sender, {text: `*Como vender no Super compras:*

Se você deseja vender seus produtos na nossa plataforma, é necessário realizar um cadastro simples com os seguintes dados:

- Nome completo (user_name)

- Número de M-Pesa e/ou e-Mola (onde você receberá os pagamentos das suas vendas)

- Nome da sua loja

Após o cadastro, você terá acesso à sua página exclusiva de vendedor, onde poderá:

📦 Adicionar, atualizar ou remover produtos

📋 Visualizar pedidos feitos pelos clientes

📊 Acompanhar relatórios de vendas

🛠️ Gerenciar solicitações de reclamações e reembolsos

Os pedidos dos clientes podem ser acompanhados diretamente pelo site, e você também pode optar por receber notificações via WhatsApp para maior agilidade no atendimento.`})
    }

}

const aboutAssistant = {
    cmd: ['3', '3.', '3 .', '3 . ', '3-', '3 -', '3 - ', 'Sobre o assistente (eu)', 'sobre-o-assistente ', 'sobre o assistente', 'sobre-assistente'],
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender)
        await delay(4000)
        await sock.sendMessage(sender, {text: `*Sobre MIM:*

Eu sou o assistente virtual do Super Compras — criado para facilitar a tua experiência na nossa plataforma!

Estou aqui para te ajudar com tudo: desde tirar dúvidas sobre como comprar, acompanhar pedidos, entender os métodos de pagamento, até orientar vendedores sobre como cadastrar suas lojas e gerenciar seus produtos.

Disponível 24 horas por dia, 7 dias por semana, estou sempre pronto para te atender com rapidez, clareza e simpatia.

Se tiver alguma dúvida, é só me chamar com: *Oi!* ou *kmk*, ou pelo meu nome: *CSM BOT*, . Tamos juntos!

*Importante saber que ainda não sei muita coisa, mas, a cada dia esforços estão sendo feitos de modo que eu fique mais inteligente.*
`})    }

}

const menuCMD = {
    cmd: ['menu', 'ajuda', 'help', 'comandos', 'apoio', 'Ajuda-me', 'ajude-me', 'conversar', 'Conversa'],
    handler: async (sock, sender, text) => {
        sock.sendPresenceUpdate('composing', sender)
        await delay(3000)
        const date = new Date();
        await sock.sendMessage(sender, {
            text: `
 ╭━━⪩ BEM VINDO/A ⪨━━
▢
▢ • CSM & SUPER COMPRAS IA
▢ • Data: ${date.toLocaleDateString("pt-pt")}
▢ • Hora: ${date.toLocaleTimeString("pt-pt")}
▢ • Versão: ${botVersion}
▢
╰━━─「🪐」─━━

╭━━⪩ DIGITE: ⪨━━
▢
▢ • *info* ou *1* => O QUE É SUPER COMPRAS
▢ • *como-comprar* ou *2*
▢ • *como-vender* ou *3*
▢ • *sobre-assistente* ou *4*
▢ • *ajuda* ou *5*
▢
╰━━─「🌌」─━━
  
💬 Você também pode iniciar a conversa com: *Oi!*, *kmk* ou me chamando de *CSM BOT*, *CSM*.
`
        })
    }
}


module.exports = {
    hello,
    aboutStore,
    aboutAssistant,
    howToBeCostumer,
    howToBeSeller,
    menuCMD
}
