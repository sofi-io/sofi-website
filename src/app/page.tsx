'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, ChevronDown, FileText, FileUp, Menu, ScanText, ShieldCheck, X } from 'lucide-react';

const sample = {
  document_type: 'match_financial',
  match: 'Atlético Exemplo x União FC',
  date: '2026-11-10',
  attendance_paid: 12000,
  currency: 'BRL',
  gross_revenue: 480000.00,
  expenses: 120000.00,
  net_revenue: 360000.00,
  source: { file: 'boletim_partida.pdf', page: 1 }
};

const money = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function Home() {
  const [view, setView] = useState<'fields' | 'json'>('fields');
  const [activeField, setActiveField] = useState('gross_revenue');
  const [mobileMenu, setMobileMenu] = useState(false);
  const fields = [
    { key: 'attendance_paid', label: 'Público pagante', value: '12.000', source: 'PÚBLICO PAGANTE · página 1' },
    { key: 'gross_revenue', label: 'Renda bruta', value: money(sample.gross_revenue), source: 'RENDA BRUTA · página 1' },
    { key: 'expenses', label: 'Despesas', value: money(sample.expenses), source: 'DESPESAS · página 1' },
    { key: 'net_revenue', label: 'Renda líquida', value: money(sample.net_revenue), source: 'RENDA LÍQUIDA · página 1' },
  ];
  const current = fields.find((f) => f.key === activeField) ?? fields[1];

  return <main>
    <header className="site-header"><nav className="nav container">
      <a href="#top" className="brand"><img src="/brand/sofi-wordmark-dark.svg" alt="sofi" /></a>
      <div className="nav-links"><a href="#extract">Produto <span>01</span></a><a href="#workflow">Como funciona</a><a href="#football">Futebol</a><a href="#developers">Desenvolvedores</a></div>
      <a className="nav-cta" href="mailto:hello@sofi.tech">Contato <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Abrir menu">{mobileMenu ? <X/> : <Menu/>}</button>
    </nav>{mobileMenu && <div className="mobile-menu"><a href="#extract" onClick={()=>setMobileMenu(false)}>Produto</a><a href="#workflow" onClick={()=>setMobileMenu(false)}>Como funciona</a><a href="#football" onClick={()=>setMobileMenu(false)}>Futebol</a><a href="#developers" onClick={()=>setMobileMenu(false)}>Desenvolvedores</a></div>}</header>

    <section className="hero container" id="top">
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="hero-copy">
        <div className="hero-text">
          <div className="eyebrow"><span/> SOFI / DOCUMENT INTELLIGENCE</div>
          <h1>O financeiro<br/>do jogo. <em>Pronto<br className="hero-break"/> para análise.</em></h1>
          <p>Dos boletins financeiros aos dados da partida. Transforme público, arrecadação e despesas em dados estruturados.</p>
          <div className="hero-actions"><a className="button primary" href="#extract">Conheça o Sofi Extract <ArrowUpRight size={16}/></a><a className="button secondary" href="mailto:hello@sofi.tech">Falar com o time</a></div>
          <div className="tagline">From documents to data.</div>
        </div>
        <div className="hero-art" aria-label="Ilustração do fluxo de documentos para dados">
          <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
          <div className="hero-float-label label-document"><span className="hero-mini-icon pdf-icon"><FileText size={18}/></span><span><b>Documento</b><small>Boletim financeiro</small></span><span className="tiny-dot"></span></div>
          <div className="hero-main-card">
            <div className="hero-card-top"><span>SOFI EXTRACT</span><span className="hero-live"><i/> STRUCTURED DATA</span></div>
            <div className="hero-card-symbol"><div className="symbol-file"><FileText size={31}/></div><div className="symbol-arrow"><ArrowRight size={20}/></div><div className="symbol-code"><Braces size={31}/></div></div>
            <div className="hero-card-lines"><span></span><span></span><span></span></div>
            <div className="hero-card-bottom"><span>FROM DOCUMENTS</span><ArrowUpRight size={15}/><span>TO DATA</span></div>
          </div>
          <div className="hero-float-label label-data"><span className="hero-mini-icon data-icon"><Braces size={18}/></span><span><b>Dados estruturados</b><small>Prontos para integração</small></span><Check size={16} className="data-check"/></div>
          <div className="hero-chip chip-one">Público</div><div className="hero-chip chip-two">Arrecadação</div><div className="hero-chip chip-three">Despesas</div>
          <div className="hero-spark spark-one">✳</div><div className="hero-spark spark-two">✳</div>
        </div>
      </motion.div>
    </section>

    <section className="workspace container" id="extract">
      <div className="app-frame">
        <aside className="sidebar"><div className="side-brand"><img src="/brand/sofi-wordmark-light.svg" alt="sofi"/><span>/ Extract</span></div><div className="side-label">WORKSPACE</div><a className="side-item selected"><FileText size={15}/> Boletins</a><a className="side-item"><ScanText size={15}/> Extrações</a><a className="side-item"><Braces size={15}/> Integrações</a><div className="side-bottom">AMBIENTE DE EXEMPLO</div></aside>
        <div className="document-pane"><div className="pane-heading"><span>DOCUMENTO ORIGINAL</span><span>01 / 01</span></div><div className="paper">
          <div className="paper-kicker">BOLETIM FINANCEIRO DA PARTIDA</div><h3>ATLÉTICO EXEMPLO × UNIÃO FC</h3><div className="paper-meta">Partida demonstrativa · 10/11/2026<br/>Estádio Exemplo · Campeonato demonstrativo</div><div className="paper-rule"/><div className="paper-small">PÚBLICO PAGANTE</div><div className="paper-value">12.000</div><div className="paper-small">RESUMO FINANCEIRO · VALORES EM REAIS (R$)</div>
          {fields.slice(1).map((f) => <button key={f.key} onClick={() => {setActiveField(f.key);setView('fields')}} className={`paper-row ${activeField===f.key?'active':''}`}><span>{f.label.toUpperCase()}</span><strong>{f.value}</strong></button>)}
          <div className="paper-foot">Documento fictício para demonstração · Página 1</div>
        </div></div>
        <div className="data-pane"><div className="pane-heading"><span>DADOS ESTRUTURADOS</span><span className="complete"><Check size={13}/> Extração concluída</span></div><div className="data-tabs"><button className={view==='fields'?'active':''} onClick={()=>setView('fields')}>CAMPOS</button><button className={view==='json'?'active':''} onClick={()=>setView('json')}>{} JSON</button></div>
          {view==='fields' ? <div className="field-list">{fields.map(f=><button key={f.key} onClick={()=>setActiveField(f.key)} className={`field-row ${activeField===f.key?'active':''}`}><span>{f.label}<small>{f.key}</small></span><strong>{f.value}</strong></button>)}<div className="source-note"><ShieldCheck size={15}/><span><b>Campo vinculado à origem</b><small>{current.source}</small></span></div></div> : <pre className="json"><code>{JSON.stringify(sample,null,2)}</code></pre>}
          <div className="demo-note">Partida e valores fictícios para demonstração</div>
        </div>
      </div>
      <p className="workspace-caption">Uma demonstração do fluxo de extração e estruturação de dados.</p>
    </section>

    <section className="section container" id="workflow"><div className="section-label">01 / COMO FUNCIONA</div><h2>Do boletim à inteligência do jogo.</h2><p className="section-intro">Um fluxo para estruturar os números de cada partida<br className="desktop-only"/> e levar os dados para a sua análise.</p>
      <div className="steps">{[{n:'01',title:'Envie o boletim',desc:'Comece pelo boletim financeiro da partida. A informação que você precisa já está ali.',foot:'ENTRADA / BOLETIM FINANCEIRO',icon:<FileUp/>},{n:'02',title:'Transforme em estrutura',desc:'O Sofi Extract organiza público, arrecadação, despesas e resultado em campos prontos para uso.',foot:'PROCESSAMENTO / SOFI EXTRACT',icon:<ScanText/>},{n:'03',title:'Conecte à sua operação',desc:'Leve os números da partida aos seus sistemas via API, com a referência do boletim original.',foot:'SAÍDA / DADOS UTILIZÁVEIS',icon:<Braces/>}].map(s=><div className="step" key={s.n}><div className="step-top"><span>{s.n}</span>{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p><small>{s.foot}</small></div>)}</div>
    </section>

    <section className="trace-section"><div className="container trace-grid"><div><div className="section-label">02 / INTELIGÊNCIA DOCUMENTAL</div><h2>Os números do jogo,<br/>com contexto.</h2><p>Cada dado tem uma origem. Da renda extraída ao valor no boletim financeiro. Saiba de onde veio cada informação.</p></div><div className="trace-card"><div className="trace-source"><span>boletim_partida.pdf / pág. 1</span><div className="trace-paper"><small>RESUMO FINANCEIRO DA PARTIDA</small><button onClick={()=>{setActiveField('gross_revenue');setView('fields')}} className={activeField==='gross_revenue'?'highlight':''}>RENDA BRUTA <b>R$ 480.000,00</b></button><button onClick={()=>{setActiveField('expenses');setView('fields')}} className={activeField==='expenses'?'highlight':''}>DESPESAS <b>R$ 120.000,00</b></button></div></div><ArrowRight className="trace-arrow"/><div className="trace-output"><span>DADOS ESTRUTURADOS</span>{fields.slice(1).map(f=><div key={f.key}><small>{f.key}</small><b>{f.key==='gross_revenue'?'480000.00':f.key==='expenses'?'120000.00':'360000.00'}</b></div>)}</div></div></div></section>

    <section className="section container dev-section" id="developers"><div className="dev-copy"><div className="section-label">03 / PARA QUEM CONSTRÓI</div><h2>Os dados da partida.<br/>Dentro do seu sistema.</h2><p>O Sofi Extract conecta boletins financeiros ao seu produto. Receba dados estruturados para alimentar bases, painéis e análises.</p><ol><li>Envie o boletim financeiro</li><li>Receba os dados da partida</li><li>Integre à sua operação</li></ol><a className="text-link" href="mailto:hello@sofi.tech">Converse sobre a API <ArrowUpRight size={16}/></a></div><div className="code-card"><div className="code-head"><span>REQUISIÇÃO</span><span>EXEMPLO CONCEITUAL</span></div><pre><code>{`// Extraia os dados do boletim
const result = await sofi.extract({
  file: "boletim_partida.pdf"
});

// DADOS DE EXEMPLO
{
  "attendance_paid": 12000,
  "gross_revenue": 480000.00,
  "expenses": 120000.00,
  "net_revenue": 360000.00,
  "currency": "BRL"
}`}</code></pre><div className="code-foot">Ilustração do fluxo, não uma especificação técnica.</div></div></section>

    <section className="football-section" id="football"><div className="container football-grid"><div><div className="section-label">04 / INTELIGÊNCIA PARA O FUTEBOL</div><h2>O jogo termina.<br/>A análise começa.</h2><p>Organize os dados financeiros das partidas para analisar público, bilheteria e resultado. Um ponto de partida para clubes, ligas e analistas.</p><a className="text-link" href="mailto:hello@sofi.tech">Vamos falar sobre seus boletins <ArrowUpRight size={16}/></a></div><div className="insights"><div className="insight"><span>01</span><div><b>Público pagante</b><small>A presença nas arquibancadas, em dados.</small></div></div><div className="insight"><span>02</span><div><b>Arrecadação</b><small>A receita da partida em uma base estruturada.</small></div></div><div className="insight"><span>03</span><div><b>Resultado financeiro</b><small>Receitas e despesas para a sua análise.</small></div></div></div></div></section>

    <section className="faq-section container"><div><div className="section-label">05 / PERGUNTAS FREQUENTES</div><h2>Direto ao ponto.</h2><p>Ainda tem alguma dúvida?<br/>Vamos conversar sobre o seu caso.</p></div><div className="faq-list">{[{q:'O que a sofi faz no futebol?',a:'Transformamos boletins financeiros de partidas em dados estruturados e rastreáveis, prontos para alimentar sistemas e análises.'},{q:'Quais informações entram na extração?',a:'O foco está em público pagante, arrecadação, despesas e renda líquida. Os campos dependem das informações presentes em cada boletim.'},{q:'Como os dados chegam ao meu sistema?',a:'O Sofi Extract conecta a extração dos boletins à sua operação via API. O contrato técnico será documentado separadamente.'},{q:'Como posso conhecer o Sofi Extract?',a:'A demonstração desta página utiliza dados fictícios. Entre em contato para discutir um piloto com documentos reais.'}].map((f,i)=><details key={i}><summary>{f.q}<ChevronDown size={16}/></summary><p>{f.a}</p></details>)}</div></section>

    <footer className="footer container"><div className="footer-cta"><div><h2>Seu próximo jogo<br/>pode começar nos dados.</h2><p>Transforme boletins financeiros em informação para a sua operação.</p></div><a className="button primary" href="mailto:hello@sofi.tech">Vamos conversar <ArrowUpRight size={16}/></a></div><div className="footer-main"><div><img src="/brand/sofi-wordmark-dark.svg" alt="sofi"/><p>DOCUMENT INTELLIGENCE<br/>From documents to data.</p></div><div><b>Explore</b><a href="#extract">Sofi Extract</a><a href="#workflow">Como funciona</a><a href="#developers">Para desenvolvedores</a></div><div><b>Sobre</b><a href="#football">Futebol</a><a href="mailto:hello@sofi.tech">Fale com o time</a></div></div><div className="copyright"><span>© 2026 sofi. Todos os direitos reservados.</span><span>Tecnologia para transformar informação.</span></div></footer>
  </main>;
}
