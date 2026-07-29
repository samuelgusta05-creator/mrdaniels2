import "./styles.css";

const barbers = [
  ["Daniel", "DN", "Cortes clássicos", "clay"],
  ["Tg", "TG", "Degradê · Navalhado", "sage"],
  ["João", "JO", "Barba · Visagismo", "violet"],
  ["Fragoso", "FR", "Cortes modernos", "coral"],
  ["Rodney", "RD", "Clássicos · Acabamento", "blue"],
];

const services = [
  ["Corte", "45 min", "R$ 45"],
  ["Barba", "30 min", "R$ 35"],
  ["Corte + barba", "1h 15 min", "R$ 75"],
  ["Corte infantil", "40 min", "R$ 40"],
];

const times = ["09:00", "10:00", "11:30", "13:30", "15:00", "16:30", "18:00"];

export const metadata = {
  title: "Mr Daniel's | Barbearia & Estilo",
  description: "Agende seu corte na Mr Daniel's Barbearia.",
};

export default function Page() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Mr Daniel's — início">
          <span className="logo"><i>MD</i></span>
          <span><b>MR DANIEL&apos;S</b><small>BARBEARIA &amp; ESTILO</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#agendar">Agendar</a>
          <a href="#servicos">Serviços</a>
          <a href="#equipe">Equipe</a>
        </nav>
        <a className="top-cta" href="#agendar">Reservar horário</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="kicker">MR DANIEL&apos;S · DESDE 2018</p>
            <h1>Seu estilo.<br /><em>Seu horário.</em></h1>
            <p className="intro">Escolha seu barbeiro, o serviço e o melhor momento. Sem espera, sem complicação.</p>
            <div className="actions">
              <a className="button" href="#agendar">Agendar agora <span>→</span></a>
              <p className="proof"><b>+2.400</b><span>clientes bem cuidados</span></p>
            </div>
          </div>
          <div className="art" aria-hidden="true">
            <div className="rings" />
            <div className="cube cube-a" />
            <div className="cube cube-b" />
            <div className="open-card">
              <div className="pole"><i /></div>
              <div><small>ABERTO HOJE</small><b>Até às 20h</b><p>Próximo horário <strong>10:00</strong></p></div>
              <span>✂</span>
            </div>
          </div>
        </section>

        <section className="booking" id="agendar">
          <header className="section-head">
            <div><p className="kicker">RESERVE SEU HORÁRIO</p><h2>Agende em poucos passos</h2></div>
            <div className="steps" aria-label="Três etapas"><span>1</span><span>2</span><span>3</span></div>
          </header>

          <form className="booking-grid" action="mailto:contato@mrdaniels.com.br" method="post" encType="text/plain">
            <div className="stack">
              <fieldset className="panel" id="equipe">
                <legend><i>01</i><span><b>Escolha seu barbeiro</b><small>Cada profissional, um estilo único.</small></span></legend>
                <div className="barbers">
                  {barbers.map(([name, initials, specialty, color], index) => (
                    <label key={name}>
                      <input type="radio" name="barbeiro" value={name} defaultChecked={index === 0} />
                      <span className={`avatar ${color}`}>{initials}</span>
                      <b>{name}</b><small>{specialty}</small>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="panel" id="servicos">
                <legend><i>02</i><span><b>Selecione o serviço</b><small>Preços transparentes, cuidado completo.</small></span></legend>
                <div className="services">
                  {services.map(([name, duration, price], index) => (
                    <label key={name}>
                      <input type="radio" name="servico" value={name} defaultChecked={index === 0} />
                      <span><b>{name}</b><small>{duration}</small></span><strong>{price}</strong>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <aside className="panel schedule">
              <div className="panel-title"><i>03</i><span><b>Data e horário</b><small>Escolha sua preferência</small></span></div>
              <label className="field">Data<input type="date" name="data" required /></label>
              <p className="available"><span /> Horários disponíveis</p>
              <div className="times">
                {times.map((time) => (
                  <label key={time}>
                    <input type="radio" name="horario" value={time} defaultChecked={time === "10:00"} />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
              <label className="field">Seu nome<input type="text" name="nome" placeholder="Como podemos te chamar?" required /></label>
              <label className="field">WhatsApp<input type="tel" name="whatsapp" placeholder="(00) 00000-0000" required /></label>
              <button className="button full" type="submit">Solicitar agendamento <span>→</span></button>
              <p className="note">A confirmação será feita pela equipe.</p>
            </aside>
          </form>
        </section>

        <section className="benefits">
          <article><span>01</span><i className="shape diamond" /><h3>Sem fila</h3><p>Seu horário reservado e confirmado com antecedência.</p></article>
          <article><span>02</span><i className="shape sphere" /><h3>Lembretes</h3><p>Você recebe os detalhes antes do corte.</p></article>
          <article><span>03</span><i className="shape cylinder" /><h3>Seu barbeiro</h3><p>Escolha quem já conhece o seu estilo.</p></article>
        </section>
      </main>

      <footer>
        <span className="logo"><i>MD</i></span>
        <p>© 2026 Mr Daniel&apos;s Barbearia. Feito para cuidar do seu estilo.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
