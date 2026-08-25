const ACTIVITIES = [
{
  id:1, title:"Estrutura básica da página",
  objective:"Monte o esqueleto de um documento HTML: a declaração de tipo, o idioma, a codificação de caracteres, o título da aba e o conteúdo visível.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
  <p>Esta é minha primeira página HTML.</p>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html {{1}}>
<head>
  <meta {{2}}>
  {{3}}
</head>
<body>
  {{4}}
  {{5}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'lang="pt-br"', hint:'Atributo do &lt;html&gt; que define o idioma principal da página.'},
    {n:2, answer:'charset="UTF-8"', hint:'Atributo do &lt;meta&gt; que define a codificação de caracteres.'},
    {n:3, answer:'<title>Minha Página</title>', hint:'Tag que define o texto exibido na aba do navegador.'},
    {n:4, answer:'<h1>Olá, mundo!</h1>', hint:'Título principal visível no corpo da página.'},
    {n:5, answer:'<p>Esta é minha primeira página HTML.</p>', hint:'Parágrafo de texto.'},
  ]
},
{
  id:2, title:"Títulos e parágrafos",
  objective:"Pratique a hierarquia de títulos (h1, h2), parágrafos e a linha divisória horizontal.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Títulos</title>
</head>
<body>
  <h1>Curso de HTML</h1>
  <h2>Introdução</h2>
  <p>Aprender HTML é importante para criar páginas web.</p>
  <hr>
  <h2>Próximo passo</h2>
  <p>Agora vamos praticar as principais tags.</p>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Títulos</title>
</head>
<body>
  {{1}}
  {{2}}
  {{3}}
  {{4}}
  {{5}}
  <p>Agora vamos praticar as principais tags.</p>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<h1>Curso de HTML</h1>', hint:'Título principal da página.'},
    {n:2, answer:'<h2>Introdução</h2>', hint:'Subtítulo de seção.'},
    {n:3, answer:'<p>Aprender HTML é importante para criar páginas web.</p>', hint:'Parágrafo de texto.'},
    {n:4, answer:'<hr>', hint:'Tag que cria uma linha divisória horizontal (sem fechamento).'},
    {n:5, answer:'<h2>Próximo passo</h2>', hint:'Outro subtítulo de seção.'},
  ]
},
{
  id:3, title:"Links",
  objective:"Crie um link (âncora) que leve o usuário a outro endereço na web.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Links</title>
</head>
<body>
  <h1>Meus links</h1>
  <p>Acesse o site da faculdade:</p>
  <a href="https://www.google.com">Pesquisar na web</a>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Links</title>
</head>
<body>
  <h1>Meus links</h1>
  <p>Acesse o site da faculdade:</p>
  {{1}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'<a href="https://www.google.com">Pesquisar na web</a>', hint:'Tag &lt;a&gt; com o atributo href apontando para o endereço, e um texto visível de link.'},
  ]
},
{
  id:4, title:"Imagens",
  objective:"Insira uma imagem na página usando a tag correta e um texto alternativo.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Galeria</title>
</head>
<body>
  <h1>Minha imagem</h1>
  <img src="https://placehold.co/400x250" alt="Imagem de exemplo">
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Galeria</title>
</head>
<body>
  <h1>Minha imagem</h1>
  {{1}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'<img src="https://placehold.co/400x250" alt="Imagem de exemplo">', hint:'Tag &lt;img&gt; com os atributos src (origem) e alt (texto alternativo).'},
  ]
},
{
  id:5, title:"Listas",
  objective:"Diferencie listas não ordenadas (ul/li) de listas ordenadas (ol/li).",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Listas</title>
</head>
<body>
  <h1>Materiais</h1>
  <ul>
    <li>Caderno</li>
    <li>Caneta</li>
    <li>Notebook</li>
  </ul>
  <h2>Passos</h2>
  <ol>
    <li>Abrir o editor</li>
    <li>Escrever o código</li>
    <li>Salvar o arquivo</li>
  </ol>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Listas</title>
</head>
<body>
  <h1>Materiais</h1>
  {{1}}
    {{2}}
    <li>Caneta</li>
    <li>Notebook</li>
  </ul>
  <h2>Passos</h2>
  {{3}}
    {{4}}
    <li>Escrever o código</li>
    <li>Salvar o arquivo</li>
  </ol>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<ul>', hint:'Abre uma lista não ordenada (marcadores).'},
    {n:2, answer:'<li>Caderno</li>', hint:'Primeiro item da lista.'},
    {n:3, answer:'<ol>', hint:'Abre uma lista ordenada (numerada).'},
    {n:4, answer:'<li>Abrir o editor</li>', hint:'Primeiro item da lista ordenada.'},
  ]
},
{
  id:6, title:"Tabela",
  objective:"Construa uma tabela com cabeçalho (th) e células de dados (td) organizadas em linhas (tr).",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Notas</title>
</head>
<body>
  <h1>Notas da turma</h1>
  <table border="1">
    <tr><th>Aluno</th><th>Nota</th></tr>
    <tr><td>Ana</td><td>9,0</td></tr>
    <tr><td>João</td><td>8,5</td></tr>
  </table>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Notas</title>
</head>
<body>
  <h1>Notas da turma</h1>
  {{1}}
    {{2}}{{3}}<th>Nota</th></tr>
    <tr>{{4}}<td>9,0</td></tr>
    <tr><td>João</td><td>8,5</td></tr>
  </table>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<table border="1">', hint:'Abre a tabela, com borda visível.'},
    {n:2, answer:'<tr>', hint:'Abre a primeira linha da tabela (a de cabeçalho).'},
    {n:3, answer:'<th>Aluno</th>', hint:'Célula de cabeçalho com o texto "Aluno".'},
    {n:4, answer:'<td>Ana</td>', hint:'Célula de dado com o texto "Ana".'},
  ]
},
{
  id:7, title:"Formulário",
  objective:"Construa um formulário com campos de entrada, rótulos (label) e um botão de envio.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastro</title>
</head>
<body>
  <h1>Cadastro</h1>
  <form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastro</title>
</head>
<body>
  <h1>Cadastro</h1>
  {{1}}
    {{2}}
    {{3}}
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    {{4}}
  </form>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<form>', hint:'Abre o formulário, agrupando os campos.'},
    {n:2, answer:'<label for="nome">Nome:</label>', hint:'Rótulo do campo "nome", ligado a ele pelo atributo for.'},
    {n:3, answer:'<input type="text" id="nome" name="nome" required>', hint:'Campo de texto obrigatório com id e name "nome".'},
    {n:4, answer:'<button type="submit">Enviar</button>', hint:'Botão que envia o formulário.'},
  ]
},
{
  id:8, title:"Seleção e área de texto",
  objective:"Use select/option para uma lista suspensa e textarea para um campo de texto multilinha.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Preferências</title></head>
<body>
  <h1>Preferências</h1>
  <label for="curso">Curso:</label>
  <select id="curso" name="curso">
    <option>Computação</option>
    <option>Administração</option>
  </select>
  <br>
  <label for="comentario">Comentário:</label>
  <textarea id="comentario" rows="4" cols="40"></textarea>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Preferências</title></head>
<body>
  <h1>Preferências</h1>
  <label for="curso">Curso:</label>
  {{1}}
    {{2}}
    <option>Administração</option>
  </select>
  <br>
  <label for="comentario">Comentário:</label>
  {{3}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'<select id="curso" name="curso">', hint:'Abre a caixa de seleção com id e name "curso".'},
    {n:2, answer:'<option>Computação</option>', hint:'Primeira opção da lista.'},
    {n:3, answer:'<textarea id="comentario" rows="4" cols="40"></textarea>', hint:'Área de texto multilinha com 4 linhas e 40 colunas.'},
  ]
},
{
  id:9, title:"Div e span",
  objective:"Diferencie a div (bloco genérico) do span (trecho de texto genérico dentro de uma linha).",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Blocos</title></head>
<body>
  <div>
    <h1>Notícia</h1>
    <p>O destaque de hoje é <span>HTML</span>.</p>
  </div>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Blocos</title></head>
<body>
  {{1}}
    {{2}}
    <p>O destaque de hoje é {{3}}.</p>
  </div>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<div>', hint:'Abre um bloco genérico que agrupa conteúdo.'},
    {n:2, answer:'<h1>Notícia</h1>', hint:'Título dentro do bloco.'},
    {n:3, answer:'<span>HTML</span>', hint:'Marca um trecho dentro do parágrafo, sem quebrar a linha.'},
  ]
},
{
  id:10, title:"Estrutura semântica",
  objective:"Organize a página com tags semânticas: header, nav, section, article e footer.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Portal</title></head>
<body>
  <header><h1>Portal de Tecnologia</h1></header>
  <nav><a href="#inicio">Início</a> | <a href="#noticias">Notícias</a></nav>
  <section id="noticias">
    <article><h2>Nova tecnologia</h2><p>Uma nova solução foi apresentada.</p></article>
  </section>
  <footer><p>Site acadêmico</p></footer>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Portal</title></head>
<body>
  {{1}}<h1>Portal de Tecnologia</h1></header>
  {{2}}<a href="#inicio">Início</a> | <a href="#noticias">Notícias</a></nav>
  {{3}}
    {{4}}<h2>Nova tecnologia</h2><p>Uma nova solução foi apresentada.</p></article>
  </section>
  {{5}}<p>Site acadêmico</p></footer>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<header>', hint:'Abre o cabeçalho da página.'},
    {n:2, answer:'<nav>', hint:'Abre a área de navegação.'},
    {n:3, answer:'<section id="noticias">', hint:'Abre uma seção de conteúdo, com id "noticias".'},
    {n:4, answer:'<article>', hint:'Abre um bloco de conteúdo independente (uma notícia).'},
    {n:5, answer:'<footer>', hint:'Abre o rodapé da página.'},
  ]
},
{
  id:11, title:"Figura e legenda",
  objective:"Agrupe uma imagem com sua legenda usando figure e figcaption.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Figura</title></head>
<body>
  <figure>
    <img src="https://placehold.co/500x250" alt="Paisagem">
    <figcaption>Imagem ilustrativa de uma paisagem.</figcaption>
  </figure>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Figura</title></head>
<body>
  {{1}}
    {{2}}
    {{3}}
  </figure>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<figure>', hint:'Abre o agrupamento de figura.'},
    {n:2, answer:'<img src="https://placehold.co/500x250" alt="Paisagem">', hint:'Imagem com src e alt.'},
    {n:3, answer:'<figcaption>Imagem ilustrativa de uma paisagem.</figcaption>', hint:'Legenda da figura.'},
  ]
},
{
  id:12, title:"Formatação semântica",
  objective:"Use strong (ênfase forte), mark (destaque), code (código) e blockquote (citação).",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Texto</title></head>
<body>
  <p><strong>Importante:</strong> estude HTML com prática.</p>
  <p>Este termo está <mark>destacado</mark>.</p>
  <p>Use <code>&lt;h1&gt;</code> para um título principal.</p>
  <blockquote>Aprender fazendo é uma ótima forma de praticar.</blockquote>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Texto</title></head>
<body>
  <p>{{1}} estude HTML com prática.</p>
  <p>Este termo está {{2}}.</p>
  <p>Use {{3}} para um título principal.</p>
  {{4}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'<strong>Importante:</strong>', hint:'Dá forte ênfase ao texto "Importante:".'},
    {n:2, answer:'<mark>destacado</mark>', hint:'Destaca visualmente a palavra "destacado".'},
    {n:3, answer:'<code>&lt;h1&gt;</code>', hint:'Apresenta um trecho de código; use &amp;lt; e &amp;gt; para os sinais de menor/maior.'},
    {n:4, answer:'<blockquote>Aprender fazendo é uma ótima forma de praticar.</blockquote>', hint:'Cria uma citação em bloco.'},
  ]
},
{
  id:13, title:"Detalhes expansíveis",
  objective:"Crie um bloco de conteúdo que pode ser expandido/recolhido usando details e summary.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>FAQ</title></head>
<body>
  <h1>Perguntas frequentes</h1>
  <details>
    <summary>O que é HTML?</summary>
    <p>É uma linguagem de marcação usada para estruturar páginas web.</p>
  </details>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>FAQ</title></head>
<body>
  <h1>Perguntas frequentes</h1>
  {{1}}
    {{2}}
    {{3}}
  </details>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<details>', hint:'Abre o bloco de conteúdo expansível.'},
    {n:2, answer:'<summary>O que é HTML?</summary>', hint:'Título sempre visível, clicável para expandir.'},
    {n:3, answer:'<p>É uma linguagem de marcação usada para estruturar páginas web.</p>', hint:'Conteúdo que aparece ao expandir.'},
  ]
},
{
  id:14, title:"Áudio e vídeo",
  objective:"Incorpore mídia com audio/source e video/source.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Mídia</title></head>
<body>
  <h1>Conteúdo multimídia</h1>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
  </audio>
  <video controls width="400">
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Mídia</title></head>
<body>
  <h1>Conteúdo multimídia</h1>
  {{1}}
    {{2}}
  </audio>
  {{3}}
    {{4}}
  </video>
</body>
</html>`,
  blanks:[
    {n:1, answer:'<audio controls>', hint:'Abre o player de áudio, com controles visíveis.'},
    {n:2, answer:'<source src="audio.mp3" type="audio/mpeg">', hint:'Informa o arquivo de áudio e seu tipo MIME.'},
    {n:3, answer:'<video controls width="400">', hint:'Abre o player de vídeo, com controles e largura 400.'},
    {n:4, answer:'<source src="video.mp4" type="video/mp4">', hint:'Informa o arquivo de vídeo e seu tipo MIME.'},
  ]
},
{
  id:15, title:"Conteúdo incorporado",
  objective:"Incorpore outra página dentro da sua usando um iframe.",
  resolved:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Conteúdo incorporado</title></head>
<body>
  <h1>Site incorporado</h1>
  <iframe src="https://example.com" width="600" height="400" title="Página incorporada"></iframe>
</body>
</html>`,
  template:
`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Conteúdo incorporado</title></head>
<body>
  <h1>Site incorporado</h1>
  {{1}}
</body>
</html>`,
  blanks:[
    {n:1, answer:'<iframe src="https://example.com" width="600" height="400" title="Página incorporada"></iframe>', hint:'Tag iframe com src, largura, altura e title (acessibilidade).'},
  ]
},
];

/* ============================================================
   COMPARAÇÃO TOLERANTE (ignora ordem de atributos, aspas,
   espaços extras e maiúsculas/minúsculas)
   ============================================================ */
function canonicalizeAttrs(str){
  const attrs=[];
  const re=/([a-zA-Z-]+)(=("[^"]*"|'[^']*'|[^\s]+))?/g;
  let m;
  while((m=re.exec(str))!==null){
    const name=m[1].toLowerCase();
    let val=m[3];
    if(val!==undefined) val=val.replace(/^["']|["']$/g,'').toLowerCase().trim();
    attrs.push(val!==undefined ? name+'="'+val+'"' : name);
  }
  attrs.sort();
  return attrs.join(' ');
}
function canonicalizeTag(tag){
  let inner=tag.slice(1,-1).trim();
  if(inner[0]==='/') return '</'+inner.slice(1).trim().toLowerCase()+'>';
  let selfClosing=inner.endsWith('/');
  if(selfClosing) inner=inner.slice(0,-1).trim();
  const match=inner.match(/^([a-zA-Z0-9]+)([\s\S]*)$/);
  if(!match) return '<'+inner.toLowerCase()+'>';
  const name=match[1].toLowerCase();
  const attrsCanon=match[2].trim()?canonicalizeAttrs(match[2]):'';
  return '<'+name+(attrsCanon?' '+attrsCanon:'')+(selfClosing?' /':'')+'>';
}
function canonicalizeMarkup(html){
  let result='';
  const re=/<[^>]+>|[^<]+/g;
  let m;
  while((m=re.exec(html))!==null){
    const token=m[0];
    result+= token[0]==='<' ? canonicalizeTag(token) : token.trim().replace(/\s+/g,' ').toLowerCase();
  }
  return result;
}
function canonicalizeFragment(str){
  str=(str||'').trim();
  if(!str) return '';
  if(!/[<>]/.test(str)){
    if(/^([a-zA-Z-]+(=("[^"]*"|'[^']*'|[^\s]+))?\s*)+$/.test(str)) return canonicalizeAttrs(str);
    return str.replace(/\s+/g,' ').toLowerCase();
  }
  return canonicalizeMarkup(str);
}
function isCorrect(userVal, expected){
  return canonicalizeFragment(userVal)===canonicalizeFragment(expected) && userVal.trim().length>0;
}

/* ============================================================
   PERSISTÊNCIA (localStorage)
   ============================================================ */
const STORAGE_KEY='htmlLabProgress_v1';
function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY))||{}; }catch(e){ return {}; }
}
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function getActivityState(id){
  const p=loadProgress();
  return p[id]||{answers:{}, completed:false};
}
function setActivityState(id, state){
  const p=loadProgress();
  p[id]=state;
  saveProgress(p);
}
function activityStatus(id){
  const st=getActivityState(id);
  if(st.completed) return 'done';
  if(Object.values(st.answers||{}).some(v=>v && v.trim())) return 'progress';
  return 'todo';
}
function overallProgress(){
  const done=ACTIVITIES.filter(a=>activityStatus(a.id)==='done').length;
  return {done, total:ACTIVITIES.length};
}
function updateTopbarProgress(){
  const {done,total}=overallProgress();
  document.getElementById('pillCount').textContent=done+'/'+total;
  document.getElementById('pillFill').style.width=(done/total*100)+'%';
}

/* ============================================================
   ESCAPE HTML
   ============================================================ */
function esc(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ============================================================
   RENDER: CÓDIGO COM NÚMEROS DE LINHA E MARCADORES DE LACUNA
   ============================================================ */
const CIRCLED=['①','②','③','④','⑤','⑥','⑦','⑧'];
function renderCodeBlock(rawTemplate, filledValues){
  // rawTemplate contém {{n}} — vamos escapar o texto ao redor e
  // inserir chips no lugar dos marcadores.
  const lines=rawTemplate.split('\n');
  let html='';
  lines.forEach((line,i)=>{
    let escLine=esc(line);
    escLine=escLine.replace(/\{\{(\d+)\}\}/g,(m,n)=>{
      const filled = filledValues && filledValues[n];
      const cls = filled ? 'blank-chip filled' : 'blank-chip';
      const label = filled ? esc(filled).slice(0,22)+(filled.length>22?'…':'') : (CIRCLED[n-1]||n);
      return '<span class="'+cls+'" title="Lacuna '+n+'">'+label+'</span>';
    });
    html+='<div class="codeline"><span class="ln">'+(i+1)+'</span><span class="lc">'+escLine+'</span></div>';
  });
  return html;
}
function renderPlainCode(raw){
  const lines=raw.split('\n');
  let html='';
  lines.forEach((line,i)=>{
    html+='<div class="codeline"><span class="ln">'+(i+1)+'</span><span class="lc">'+esc(line)+'</span></div>';
  });
  return html;
}

/* ============================================================
   PREVIEW: MONTA O DOCUMENTO FINAL SUBSTITUINDO {{n}}
   ============================================================ */
function assembleDoc(activity, answers){
  let doc=activity.template;
  activity.blanks.forEach(b=>{
    const val=(answers[b.n]||'').trim();
    const placeholder = val || '<!-- lacuna '+b.n+' não preenchida -->';
    doc=doc.split('{{'+b.n+'}}').join(placeholder);
  });
  return doc;
}

/* ============================================================
   ROTEAMENTO
   ============================================================ */
function parseHash(){
  const h=location.hash.replace(/^#\/?/, '');
  if(!h) return {view:'dashboard'};
  const m=h.match(/^activity\/(\d+)/);
  if(m) return {view:'activity', id:parseInt(m[1],10)};
  return {view:'dashboard'};
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

function render(){
  updateTopbarProgress();
  const route=parseHash();
  if(route.view==='activity'){
    const activity=ACTIVITIES.find(a=>a.id===route.id);
    if(activity){ renderActivity(activity); return; }
  }
  renderDashboard();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(){
  const {done,total}=overallProgress();
  const cards=ACTIVITIES.map(a=>{
    const status=activityStatus(a.id);
    const dotClass=status==='done'?'done':status==='progress'?'progress':'todo';
    const statusLabel=status==='done'?'concluída':status==='progress'?'em progresso':'não iniciada';
    return `<div class="card" onclick="location.hash='#/activity/${a.id}'">
      <div class="card-top">
        <span class="num">ATIVIDADE ${String(a.id).padStart(2,'0')}</span>
        <span class="status-dot ${dotClass}" title="${statusLabel}"></span>
      </div>
      <h3>${esc(a.title)}</h3>
      <div class="meta"><span>${a.blanks.length} lacuna${a.blanks.length>1?'s':''} · ${statusLabel}</span><span class="go">abrir →</span></div>
    </div>`;
  }).join('');

  document.getElementById('app').innerHTML=`
    <div class="hero">
      <p class="eyebrow">// sistema de prática — html básico</p>
      <h1>15 atividades para ler, interpretar e completar código HTML</h1>
      <p>Cada atividade traz um objetivo, um exemplo já resolvido como referência e um trecho de código com lacunas para você completar. Verifique suas respostas, veja a pré-visualização real da página e acompanhe seu progresso.</p>
    </div>
    <div class="statusbar">
      <div class="big-progress">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span class="count">progresso geral</span>
          <span class="count"><b>${done}</b> / ${total} concluídas</span>
        </div>
        <div class="big-track"><div class="big-fill" style="width:${(done/total*100)}%"></div></div>
      </div>
      <button class="reset-all" onclick="resetAll()">reiniciar tudo</button>
    </div>
    <div class="grid">${cards}</div>
  `;
}
function resetAll(){
  if(confirm('Isso vai apagar todo o seu progresso nas 15 atividades. Continuar?')){
    localStorage.removeItem(STORAGE_KEY);
    render();
  }
}

/* ============================================================
   ATIVIDADE
   ============================================================ */
function renderActivity(activity){
  const state=getActivityState(activity.id);
  const answers=state.answers||{};
  const idx=ACTIVITIES.findIndex(a=>a.id===activity.id);
  const prev=ACTIVITIES[idx-1];
  const next=ACTIVITIES[idx+1];
  const status=activityStatus(activity.id);

  const badge = status==='done'
    ? '<span class="badge done">✓ concluída</span>'
    : status==='progress'
      ? '<span class="badge progress">em progresso</span>'
      : '<span class="badge">não iniciada</span>';

  const blanksHtml=activity.blanks.map(b=>{
    const val=answers[b.n]||'';
    return `<div class="blank-row" id="row-${b.n}">
      <div class="brow-top">
        <span class="brow-num">${b.n}</span>
        <span class="brow-hint">${b.hint}</span>
      </div>
      <div class="brow-input-wrap">
        <input type="text" class="mono" id="input-${b.n}" placeholder="Digite o código HTML para esta lacuna..." value="${esc(val)}" oninput="onBlankInput(${activity.id},${b.n})">
        <span class="brow-result" id="result-${b.n}"></span>
        <button class="brow-reveal" onclick="toggleReveal(${b.n})">ver resposta</button>
      </div>
      <div class="brow-answer" id="answer-${b.n}"><code>${esc(b.answer)}</code></div>
    </div>`;
  }).join('');

  document.getElementById('app').innerHTML=`
    <a class="back-link" onclick="location.hash='#/'">← voltar para todas as atividades</a>
    <div class="activity-head">
      <div class="num-tag">ATIVIDADE ${String(activity.id).padStart(2,'0')} / 15</div>
      <h1>${esc(activity.title)}</h1>
      ${badge}
    </div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="ref" onclick="switchTab('ref')">📘 referência</button>
      <button class="tab-btn" data-tab="do" onclick="switchTab('do')">✏️ atividade</button>
      <button class="tab-btn" data-tab="preview" onclick="switchTab('preview')">🖥️ pré-visualização</button>
    </div>

    <div class="panel active" id="panel-ref">
      <div class="objective-box"><b>Objetivo:</b> ${esc(activity.objective)}</div>
      <p class="ref-note">Este é um exemplo já resolvido, semelhante ao que você vai completar na aba "atividade". Estude a estrutura antes de tentar.</p>
      <div class="codebox">
        <div class="codebar"><span>exemplo-resolvido.html</span><span>referência</span></div>
        <pre>${renderPlainCode(activity.resolved)}</pre>
      </div>
    </div>

    <div class="panel" id="panel-do">
      <div class="objective-box"><b>Objetivo:</b> ${esc(activity.objective)}</div>
      <div class="codebox">
        <div class="codebar"><span>atividade-${String(activity.id).padStart(2,'0')}.html</span><span id="chipcount-${activity.id}"></span></div>
        <pre id="codepreview-${activity.id}">${renderCodeBlock(activity.template, answers)}</pre>
      </div>
      <div class="blanks-form">${blanksHtml}</div>
      <div class="actions-row">
        <button class="btn btn-primary" onclick="checkActivity(${activity.id})">verificar respostas</button>
        <button class="btn btn-ghost" onclick="resetActivity(${activity.id})">reiniciar esta atividade</button>
      </div>
      <div class="result-banner" id="resultBanner"></div>
    </div>

    <div class="panel" id="panel-preview">
      <div class="preview-bar">
        <span class="hint">assim ficaria a página no navegador, com o que você já preencheu</span>
        <button class="btn btn-ghost" onclick="updatePreview(${activity.id})">atualizar pré-visualização</button>
      </div>
      <iframe class="preview-frame" id="previewFrame"></iframe>
    </div>

    <div class="pager">
      ${prev?`<a onclick="location.hash='#/activity/${prev.id}'">← ${String(prev.id).padStart(2,'0')} ${esc(prev.title)}</a>`:'<span></span>'}
      <span class="spacer"></span>
      ${next?`<a onclick="location.hash='#/activity/${next.id}'">${String(next.id).padStart(2,'0')} ${esc(next.title)} →</a>`:'<span></span>'}
    </div>
  `;
  updateChipCount(activity);
  updatePreview(activity.id);
}

function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('panel-ref').classList.toggle('active', tab==='ref');
  document.getElementById('panel-do').classList.toggle('active', tab==='do');
  document.getElementById('panel-preview').classList.toggle('active', tab==='preview');
  if(tab==='preview'){
    const route=parseHash();
    if(route.view==='activity') updatePreview(route.id);
  }
}

function onBlankInput(activityId, n){
  const state=getActivityState(activityId);
  state.answers=state.answers||{};
  state.answers[n]=document.getElementById('input-'+n).value;
  state.completed=false;
  setActivityState(activityId, state);
  const activity=ACTIVITIES.find(a=>a.id===activityId);
  document.getElementById('codepreview-'+activityId).innerHTML=renderCodeBlock(activity.template, state.answers);
  updateChipCount(activity);
  // limpa marcação visual de certo/errado ao editar
  const row=document.getElementById('row-'+n);
  row.classList.remove('correct','wrong');
  document.getElementById('result-'+n).textContent='';
  updateTopbarProgress();
}

function updateChipCount(activity){
  const state=getActivityState(activity.id);
  const filled=activity.blanks.filter(b=>(state.answers[b.n]||'').trim()).length;
  const el=document.getElementById('chipcount-'+activity.id);
  if(el) el.textContent=filled+'/'+activity.blanks.length+' preenchidas';
}

function toggleReveal(n){
  document.getElementById('answer-'+n).classList.toggle('show');
}

function checkActivity(activityId){
  const activity=ACTIVITIES.find(a=>a.id===activityId);
  const state=getActivityState(activityId);
  state.answers=state.answers||{};
  let correctCount=0;
  activity.blanks.forEach(b=>{
    const input=document.getElementById('input-'+b.n);
    const val=input.value;
    state.answers[b.n]=val;
    const row=document.getElementById('row-'+b.n);
    const resultEl=document.getElementById('result-'+b.n);
    if(isCorrect(val,b.answer)){
      row.classList.remove('wrong'); row.classList.add('correct');
      resultEl.textContent='✅';
      correctCount++;
    }else{
      row.classList.remove('correct'); row.classList.add('wrong');
      resultEl.textContent='❌';
    }
  });
  const allCorrect=correctCount===activity.blanks.length;
  state.completed=allCorrect;
  setActivityState(activityId, state);
  updateTopbarProgress();

  const banner=document.getElementById('resultBanner');
  banner.className='result-banner show '+(allCorrect?'win':'partial');
  banner.innerHTML = allCorrect
    ? '🎉 <span>Muito bem! As '+activity.blanks.length+' lacunas estão corretas. Atividade concluída.</span>'
    : '✏️ <span>'+correctCount+' de '+activity.blanks.length+' corretas até agora. Revise as lacunas marcadas em vermelho e tente novamente.</span>';

  // atualiza o badge no topo
  const badgeContainer=document.querySelector('.activity-head');
  const oldBadge=badgeContainer.querySelector('.badge');
  if(oldBadge){
    oldBadge.className='badge '+(allCorrect?'done':'progress');
    oldBadge.textContent=allCorrect?'✓ concluída':'em progresso';
  }
}

function resetActivity(activityId){
  if(!confirm('Reiniciar esta atividade e apagar suas respostas?')) return;
  setActivityState(activityId, {answers:{}, completed:false});
  renderActivity(ACTIVITIES.find(a=>a.id===activityId));
}

function updatePreview(activityId){
  const activity=ACTIVITIES.find(a=>a.id===activityId);
  const state=getActivityState(activityId);
  const frame=document.getElementById('previewFrame');
  if(!frame) return;
  frame.srcdoc=assembleDoc(activity, state.answers||{});
}