import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Camera,
  ChevronLeft,
  ChevronRight,
  Church,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Index });
const whatsapp = "5527997461658";

const experiences = [
  [
    Heart,
    "Gestação em detalhes",
    "Gestante",
    "Para registrar o corpo que muda, a expectativa da família e os detalhes que anunciam uma nova chegada.",
    "/images/portfolio/DdHrMtRibTg.jpg",
  ],
  [
    Baby,
    "Primeiros dias",
    "Parto & Newborn",
    "Do encontro no parto à delicadeza do recém-nascido, sem interromper o que está acontecendo.",
    "/images/portfolio/DdMQkopkT1X.jpg",
  ],
  [
    Church,
    "Fé em família",
    "Batizados",
    "A cerimônia, os símbolos e a presença de quem tornou esse dia especial para a família.",
    "/images/portfolio/DdrL0SPEaKt.jpg",
  ],
  [
    Sparkles,
    "Datas que importam",
    "Celebrações",
    "Aniversários, casamentos e conquistas contados por gestos, detalhes e relações reais.",
    "/images/portfolio/DdXMSYciSqK.jpg",
  ],
  [
    UserRound,
    "Imagem profissional",
    "Retratos profissionais",
    "Retratos planejados para profissionais que precisam transmitir autoridade sem perder personalidade.",
    "/images/portfolio/Dde7RIDCfIl.jpg",
  ],
] as const;

const portfolio = [
  ["/images/portfolio/DdHrMtRibTg.jpg", "Gestante", "A doce espera"],
  ["/images/portfolio/DdMQkopkT1X.jpg", "Newborn", "Primeiros detalhes"],
  ["/images/portfolio/DdziQK2CcdQ.jpg", "Newborn", "Um novo capítulo"],
  ["/images/portfolio/Dbvdd0wOMOg.jpg", "Celebrações", "Escolhas para a vida"],
  ["/images/portfolio/DdrL0SPEaKt.jpg", "Batizados", "Laços de fé"],
  ["/images/portfolio/DdSD58viTYu.jpg", "Retratos", "Uma nova fase"],
  ["/images/portfolio/Dde7RIDCfIl.jpg", "Profissional", "Presença e propósito"],
  ["/images/portfolio/DdXMSYciSqK.jpg", "Celebrações", "Memórias que ficam"],
  ["/images/portfolio/DdwC6FpRV9B.jpg", "Gestante", "A espera em cada detalhe"],
  ["/images/portfolio/DdjjJP3Ceho.jpg", "Celebrações", "Detalhes da cerimônia"],
] as const;
const categories = [
  "Todos",
  "Gestante",
  "Newborn",
  "Batizados",
  "Celebrações",
  "Retratos",
  "Profissional",
];
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Index() {
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [service, setService] = useState("Gestante");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Linhares");
  const [details, setDetails] = useState("");
  const filtered = useMemo(
    () => portfolio.filter((p) => category === "Todos" || p[1] === category),
    [category],
  );

  useEffect(() => {
    document.body.style.overflow = menu || lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, lightbox]);

  const choose = (value: string) => {
    setService(value);
    go("orcamento");
  };
  const navigate = (id: string) => {
    setMenu(false);
    window.setTimeout(() => go(id), 100);
  };
  const send = () => {
    const text = [
      `Olá, Geisielly! Meu nome é ${name}. Conheci seu trabalho pelo site e gostaria de saber mais sobre ${service}.`,
      date && `Data ou período: ${date}.`,
      city && `Cidade: ${city}.`,
      details && `Sobre o momento: ${details}`,
    ]
      .filter(Boolean)
      .join("\n\n");
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main>
      <header className="header glass">
        <a className="brand" href="#inicio">
          <span>GS</span>
          <b>
            Geisielly Silva<small>fotografia</small>
          </b>
        </a>
        <nav>
          <a href="#experiencias">Experiências</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Sobre</a>
          <a href="#diferenciais">O olhar</a>
          <button onClick={() => go("orcamento")}>Solicitar orçamento</button>
        </nav>
        <button className="menu-button" onClick={() => setMenu(true)} aria-label="Abrir menu">
          <Menu />
        </button>
      </header>

      {menu && (
        <div className="menu-overlay" role="dialog" aria-modal="true">
          <aside className="mobile-menu glass">
            <button className="close" onClick={() => setMenu(false)}>
              <X />
            </button>
            <div className="brand">
              <span>GS</span>
              <b>
                Geisielly Silva<small>fotografia</small>
              </b>
            </div>
            <nav>
              {[
                ["inicio", "Início"],
                ["experiencias", "Experiências"],
                ["portfolio", "Portfólio"],
                ["sobre", "Sobre"],
                ["diferenciais", "O olhar"],
              ].map(([id, label]) => (
                <button key={id} onClick={() => navigate(id)}>
                  {label}
                  <ArrowRight />
                </button>
              ))}
            </nav>
            <button className="primary" onClick={() => navigate("orcamento")}>
              Solicitar orçamento
            </button>
            <p>Fotografia em Linhares — ES</p>
          </aside>
        </div>
      )}

      <section className="hero editorial-hero" id="inicio">
        <div className="hero-paper" />
        <div className="hero-content">
          <p className="kicker">Geisielly Silva • Fotógrafa em Linhares</p>
          <h1>
            O que passa
            <br />
            <em>vira memória.</em>
          </h1>
          <p>
            Parto, gestação, newborn, batizados, celebrações e retratos profissionais registrados
            com direção delicada e atenção aos detalhes reais.
          </p>
          <div>
            <button className="primary pale" onClick={() => go("experiencias")}>
              Conhecer experiências <ArrowRight />
            </button>
            <button className="ghost dark" onClick={() => go("portfolio")}>
              <Camera /> Ver portfólio
            </button>
          </div>
        </div>
        <div className="hero-gallery" aria-label="Seleção de trabalhos da Geisielly Silva">
          <figure className="hero-main-photo">
            <img src="/images/portfolio/DdMQkopkT1X.jpg" alt="Ensaio newborn por Geisielly Silva" />
            <figcaption>
              Newborn <span>•</span> cuidado em cada detalhe
            </figcaption>
          </figure>
          <figure className="hero-side-photo">
            <img
              src="/images/portfolio/Dde7RIDCfIl.jpg"
              alt="Retrato profissional por Geisielly Silva"
            />
          </figure>
          <div className="hero-stamp glass">
            <strong>GS</strong>
            <small>guardiã de lindas histórias</small>
          </div>
        </div>
      </section>

      <section className="manifesto pad">
        <p className="kicker">Fotografar sem interromper</p>
        <blockquote>
          Não é sobre montar uma cena perfeita. É sobre reconhecer quando algo verdadeiro
          <em> está acontecendo.</em>
        </blockquote>
        <p>
          A mão que procura outra mão, a ansiedade antes da chegada, a família reunida e a expressão
          que dura apenas um segundo. É daí que nasce o trabalho da Geisielly.
        </p>
      </section>

      <section className="pad" id="experiencias">
        <Heading
          kicker="O que ela fotografa"
          title={
            <>
              Um trabalho diferente
              <br />
              para <em>cada tipo de história.</em>
            </>
          }
          text="Nada de encaixar todo mundo no mesmo ensaio. Cada serviço parte do momento, das pessoas e do que precisa ser preservado."
        />
        <div className="experience-grid">
          {experiences.map(([Icon, eyebrow, title, text, image], i) => (
            <article className={i === 0 ? "experience featured" : "experience"} key={title}>
              <img src={image} alt={title} />
              <div className="veil" />
              <div className="experience-copy">
                <Icon />
                <small>{eyebrow}</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={() => choose(title)}>
                  Conhecer essa experiência <ArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey pad">
        <div className="arched">
          <img src="/images/portfolio/DdwC6FpRV9B.jpg" alt="Detalhes da espera por um bebê" />
          <div className="floating glass">
            <small>Uma história inteira</small>
            <strong>
              da espera aos
              <br />
              primeiros capítulos
            </strong>
          </div>
        </div>
        <div>
          <p className="kicker">Jornada da maternidade</p>
          <h2>
            Quatro capítulos.
            <br />
            <em>Uma mesma história.</em>
          </h2>
          <p>
            A proposta é acompanhar a família sem tratar cada fase como um trabalho isolado. O
            resultado é um acervo visual coerente, da gestação aos primeiros capítulos do bebê.
          </p>
          <ol>
            {[
              ["01", "Gestação", "A expectativa e a beleza da espera"],
              ["02", "Parto", "O encontro mais esperado"],
              ["03", "Newborn", "Os detalhes dos primeiros dias"],
              ["04", "Primeiros capítulos", "Uma história que continua crescendo"],
            ].map((x) => (
              <li key={x[0]}>
                <span>{x[0]}</span>
                <div>
                  <b>{x[1]}</b>
                  <small>{x[2]}</small>
                </div>
              </li>
            ))}
          </ol>
          <button className="link" onClick={() => choose("Jornada da maternidade")}>
            Quero registrar essa jornada <ArrowRight />
          </button>
        </div>
      </section>

      <section className="portfolio pad" id="portfolio">
        <div className="portfolio-head">
          <p className="kicker light">Portfólio</p>
          <div className="portfolio-title-row">
            <h2>
              Portfólio <em>sem recortes.</em>
            </h2>
            <p>
              Todas as imagens aparecem na proporção original. Clique para ampliar e observar cada
              detalhe do trabalho.
            </p>
          </div>
          <div className="filters">
            {categories.map((c) => (
              <button
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
                key={c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {filtered.map((item, i) => (
            <button
              className={`photo p${i % 5}`}
              key={item[0]}
              onClick={() => setLightbox(portfolio.indexOf(item))}
            >
              <img src={item[0]} alt={item[2]} loading="lazy" />
              <span>
                <small>{item[1]}</small>
                <b>{item[2]}</b>
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div className="lightbox">
          <button className="close" onClick={() => setLightbox(null)}>
            <X />
          </button>
          <button
            className="prev"
            onClick={() => setLightbox((lightbox - 1 + portfolio.length) % portfolio.length)}
          >
            <ChevronLeft />
          </button>
          <figure>
            <img src={portfolio[lightbox][0]} alt={portfolio[lightbox][2]} />
            <figcaption>
              <small>{portfolio[lightbox][1]}</small>
              {portfolio[lightbox][2]}
            </figcaption>
          </figure>
          <button className="next" onClick={() => setLightbox((lightbox + 1) % portfolio.length)}>
            <ChevronRight />
          </button>
        </div>
      )}

      <section className="process pad">
        <Heading
          centered
          kicker="Do primeiro contato à entrega"
          title={
            <>
              Você sabe o que acontece
              <br />
              antes de <em>marcar a data.</em>
            </>
          }
          text="Um processo simples para tirar dúvidas, alinhar expectativas e permitir que o ensaio aconteça com tranquilidade."
        />
        <div>
          {[
            [
              "01",
              "Você me conta",
              "Você informa o tipo de registro, a data, a cidade e quem participará.",
            ],
            [
              "02",
              "Planejamos juntos",
              "Geisielly orienta local, horário, roupas e os detalhes importantes para aquele serviço.",
            ],
            [
              "03",
              "A fotografia acontece",
              "Com direção quando necessário e espaço para os gestos espontâneos aparecerem.",
            ],
            [
              "04",
              "Sua história chega",
              "As imagens selecionadas recebem tratamento cuidadoso, preservando tons de pele e atmosfera.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about pad" id="sobre">
        <div className="about-images">
          <img
            className="about-main"
            src="/images/portfolio/DdSD58viTYu.jpg"
            alt="Retrato feminino"
          />
          <img
            className="about-small"
            src="/images/portfolio/DdjjJP3Ceho.jpg"
            alt="Detalhes de celebração"
          />
          <span className="seal">
            <Camera />
            <small>olhar • afeto • memória</small>
          </span>
        </div>
        <div>
          <p className="kicker">Por trás das imagens</p>
          <h2>
            Oi, eu sou a<br />
            <em>Geisielly.</em>
          </h2>
          <p>
            Sou fotógrafa em Linhares e guardiã de histórias que merecem permanecer. Encontro beleza
            nos gestos que quase passam despercebidos e acredito que as melhores fotografias nascem
            quando você se sente acolhida para ser quem é.
          </p>
          <p>
            Meu trabalho acompanha famílias, mulheres e profissionais em fases que carregam
            significado — da espera por uma nova vida às conquistas que marcam um novo começo.
          </p>
          <div className="signature">
            Geisielly Silva<small>fotógrafa</small>
          </div>
          <a
            className="link"
            href="https://www.instagram.com/geisiellysilvafotografia/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram /> Acompanhar no Instagram
          </a>
        </div>
      </section>

      <section className="testimonials pad" id="diferenciais">
        <Heading
          kicker="O que sustenta o trabalho"
          title={
            <>
              Técnica para conduzir.
              <br />
              Sensibilidade para <em>não interferir.</em>
            </>
          }
          text="A identidade do portfólio aparece na combinação entre direção, observação e cuidado com aquilo que não pode ser repetido."
        />
        <div className="quotes">
          {[
            [
              "Parto e newborn pedem presença silenciosa. O registro acontece respeitando o ritmo da mãe, do bebê e da família.",
              "Presença discreta",
              "Sem transformar afeto em pose",
            ],
            [
              "Nos ensaios dirigidos, cada orientação existe para deixar a pessoa confortável e fazer a imagem continuar parecendo verdadeira.",
              "Direção cuidadosa",
              "Segurança sem rigidez",
            ],
            [
              "Do branco e preto aos tons quentes, o tratamento preserva a atmosfera, a pele e os pequenos elementos da cena.",
              "Edição coerente",
              "Identidade em cada entrega",
            ],
          ].map(([text, title, detail]) => (
            <article className="glass" key={title}>
              <Quote />
              <p>{text}</p>
              <footer>
                <span>{title[0]}</span>
                <div>
                  <b>{title}</b>
                  <small>{detail}</small>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="budget pad" id="orcamento">
        <div>
          <p className="kicker light">Orçamento direcionado</p>
          <h2>
            Conte o essencial.
            <br />
            Ela continua <em>a conversa.</em>
          </h2>
          <p>
            Escolha o serviço e envie data, cidade e contexto. A mensagem chega organizada no
            WhatsApp para que Geisielly possa responder com as informações certas para o seu caso.
          </p>
          <div className="direct">
            <MessageCircle />
            <span>
              <small>Prefere falar diretamente?</small>
              <b>Atendimento pelo WhatsApp</b>
            </span>
          </div>
        </div>
        <form
          className="glass"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <label>
            Qual experiência você procura?
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {[
                "Gestante",
                "Parto",
                "Newborn",
                "Batizado",
                "Celebração",
                "Ensaio feminino",
                "Retrato profissional",
                "Jornada da maternidade",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <div className="form-row">
            <label>
              Como posso te chamar?
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </label>
            <label>
              Quando será?
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Data ou período"
              />
            </label>
          </div>
          <label>
            Onde será?
            <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
          </label>
          <label>
            Conte um pouco sobre esse momento
            <textarea
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="O que torna essa fase especial?"
            />
          </label>
          <button className="primary pale" type="submit">
            Enviar pedido de orçamento <ArrowRight />
          </button>
          <small>Suas respostas serão enviadas diretamente pelo WhatsApp.</small>
        </form>
      </section>

      <section className="location pad">
        <div>
          <p className="kicker">Onde estamos</p>
          <h2>
            Fotografia em
            <br />
            <em>Linhares — ES.</em>
          </h2>
          <p>
            Atendimento em Linhares e região, com experiências em estúdio e locações externas
            mediante disponibilidade.
          </p>
          <div className="pin">
            <MapPin />
            <span>
              <small>Área de atendimento</small>
              <b>Linhares e região</b>
            </span>
          </div>
          <a
            className="link"
            href="https://www.google.com/maps/search/?api=1&query=Linhares%2C%20ES"
            target="_blank"
            rel="noreferrer"
          >
            Ver região no mapa <ArrowRight />
          </a>
        </div>
        <div className="map">
          <iframe
            title="Mapa de Linhares"
            loading="lazy"
            src="https://www.google.com/maps?q=Linhares%20ES&z=12&output=embed"
          />
        </div>
      </section>

      <section className="final">
        <div />
        <article>
          <p>Algumas fases passam depressa demais.</p>
          <h2>Vamos guardar a sua?</h2>
          <button className="primary pale" onClick={() => go("orcamento")}>
            Quero contar minha história <ArrowRight />
          </button>
        </article>
      </section>
      <footer>
        <div className="brand">
          <span>GS</span>
          <b>
            Geisielly Silva<small>fotografia</small>
          </b>
        </div>
        <p>Fotografia sensível para histórias que merecem permanecer.</p>
        <nav>
          <a href="#experiencias">Experiências</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Sobre</a>
          <a href="#orcamento">Orçamento</a>
        </nav>
        <div>
          <a
            href="https://www.instagram.com/geisiellysilvafotografia/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle />
          </a>
        </div>
        <small>© 2026 Geisielly Silva Fotografia.</small>
      </footer>
      <a
        className="whatsapp"
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá, Geisielly! Conheci seu trabalho pelo site e gostaria de informações.")}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle />
      </a>
    </main>
  );
}

function Heading({
  kicker,
  title,
  text,
  centered = false,
}: {
  kicker: string;
  title: ReactNode;
  text: string;
  centered?: boolean;
}) {
  return (
    <div className={`heading ${centered ? "centered" : ""}`}>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
