import logoForest from '../assets/xpeer-logo/lockup/xpeer-lockup-forest.svg'
import logoIvory from '../assets/xpeer-logo/lockup/xpeer-lockup-ivory.svg'
import mentorConversation from '../assets/stock/mentor-conversation.jpg'
import communityPhoto from '../assets/stock/xpeer-community.jpg'
import directionIcon from '../assets/icons/selected/direction.png'
import studiesIcon from '../assets/icons/selected/your-studies.png'
import gettingInIcon from '../assets/icons/selected/getting-in.png'
import milanIcon from '../assets/icons/selected/life-in-milan.png'

const pathways = [
  {
    number: '01',
    title: 'direction',
    description: 'which paths genuinely fit you, including the ones with no map',
    image: directionIcon,
    alt: 'A guided line moving forward.',
  },
  {
    number: '02',
    title: 'your studies',
    description: 'how to approach Bocconi, and where your effort is best spent',
    image: studiesIcon,
    alt: 'An open book with a highlighted point.',
  },
  {
    number: '03',
    title: 'getting in',
    description:
      'which associations, spring weeks and internships to aim at, and how',
    image: gettingInIcon,
    alt: 'A guided path passing through an arch.',
  },
  {
    number: '04',
    title: 'life in Milan',
    description:
      "settling in, finding a rhythm, feeling at home in a city that isn't yours yet",
    image: milanIcon,
    alt: 'A path settling inside a wider circle.',
  },
] as const

function ArrowIcon({ direction = 'down-right' }: { direction?: 'down-right' | 'down' | 'up' }) {
  const path = {
    'down-right': 'M4 4l8 8M6 12h6V6',
    down: 'M8 3v10M4 9l4 4 4-4',
    up: 'M8 13V3M4 7l4-4 4 4',
  }[direction]

  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="X-Peer, back to top">
        <img src={logoForest} alt="X-Peer" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#programme">programme</a>
        <a href="#people">the people</a>
        <a href="#who-its-for">who it's for</a>
      </nav>

      <a className="header-action" href="#applications">
        apply now
        <ArrowIcon />
      </a>
    </header>
  )
}

function HeroVisual() {
  return (
    <figure className="hero-visual">
      <img
        className="hero-visual__photo"
        src={mentorConversation}
        alt="University students talking together between lectures."
        fetchPriority="high"
      />
      <div className="hero-visual__wash" aria-hidden="true" />
      <div className="hero-visual__handoff" aria-hidden="true">
        <span className="year-pin">
          <b>01</b>
          mentee
        </span>
        <svg
          className="hero-visual__bridge"
          viewBox="0 0 100 32"
          preserveAspectRatio="none"
        >
          <path d="M0 16 C 30 -8, 70 -8, 100 16" />
        </svg>
        <span className="year-pin">
          <b>02</b>
          mentor
        </span>
      </div>
      <figcaption>
        <span>one year apart</span>
        <strong>close enough to remember.</strong>
      </figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <h1>
          <span>if you want to go fast, go alone.</span>
          <span>if you want to go far, go together.</span>
        </h1>
        <p className="hero__summary">
          xpeer is a peer mentorship community at Bocconi. one year between
          mentee and mentor, and a circle of people worth knowing.
        </p>
        <div className="hero__actions" aria-label="Application paths">
          <a className="action action--primary" href="#applications">
            <span>apply as a mentee</span>
            <ArrowIcon />
          </a>
          <a className="action action--secondary" href="#applications">
            <span>become a mentor</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      <HeroVisual />

      <a className="hero__scroll" href="#why-xpeer">
        <span>scroll to discover</span>
        <ArrowIcon direction="down" />
      </a>
    </section>
  )
}

function Problem() {
  return (
    <section className="problem" id="why-xpeer">
      <div className="problem__inner">
        <h2 className="problem__statement">
          too much of university depends on who you happen to meet in the first
          weeks.
        </h2>
        <div className="problem__story">
          <p className="problem__support">
            the person who tells you which exam really matters, which association
            is worth applying to, how spring weeks work, or simply that the
            confusion you feel is normal.
          </p>
          <div className="problem__turn">
            <p>meeting them usually comes down to luck.</p>
            <ArrowIcon direction="down" />
            <strong>we built something better.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Programme() {
  return (
    <section className="programme" id="programme">
      <div className="programme__intro">
        <h2>one year ahead</h2>
        <p className="programme__subheading">
          close enough to remember. far enough ahead to help.
        </p>
        <p className="programme__intro-copy">
          xpeer pairs you with someone just one year ahead: near enough to
          understand what the beginning feels like, and experienced enough to
          help you move through it better. not advice from the sidelines, but a
          person who listens closely, notices what you might miss, tells you the
          truth when it matters, and reaches out before you know what to ask.
        </p>
      </div>

      <div className="pathways" aria-label="Four areas of mentorship">
        {pathways.map((pathway) => (
          <article className="pathway" key={pathway.title}>
            <div className="pathway__topline">
              <span>{pathway.number}</span>
              <div className="pathway__image">
                <img src={pathway.image} alt={pathway.alt} loading="lazy" />
              </div>
            </div>
            <div className="pathway__copy">
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="friendship-statement">
        <p>
          give it a year and it stops feeling like a programme
          <strong>and starts feeling like a friendship.</strong>
        </p>
      </div>
    </section>
  )
}

function People() {
  return (
    <section className="people" id="people">
      <div className="people__copy">
        <h2>the people are the opportunity.</h2>
        <p>
          around your mentor stands the rest of it: students who have founded,
          competed, researched, interned, moved countries, failed and figured
          things out the hard way. curious, driven, generous with what they know,
          and impatient to start what no one assigned them.
        </p>
        <p>
          a hackathon, a case team, a conference, an idea from no syllabus: here
          you find the people to do it with.
        </p>
      </div>
      <figure className="people__photo">
        <img
          src={communityPhoto}
          alt="A group of university students talking together in a lecture hall."
          loading="lazy"
        />
        <figcaption>
          <span>the wider circle</span>
          <strong>people to do it with.</strong>
        </figcaption>
      </figure>
    </section>
  )
}

function Audience() {
  return (
    <section className="audience" id="who-its-for">
      <div className="audience__heading">
        <h2>who it's for</h2>
        <p>same community. two ways in.</p>
      </div>
      <div className="audience__split">
        <article className="audience__path audience__path--first">
          <span className="audience__number">01</span>
          <div>
            <p className="audience__label">first years</p>
            <p>
              who want a head start: curious, ambitious, a little impatient, and
              the kind who would rather ask the right question now than wonder, a
              year from now, what they missed.
            </p>
          </div>
          <a href="#applications">
            <span>apply as a mentee</span>
            <ArrowIcon />
          </a>
        </article>
        <article className="audience__path audience__path--second">
          <span className="audience__number">02</span>
          <div>
            <p className="audience__label">second years</p>
            <p>
              who remember their own beginning clearly enough to want to make
              someone else's better.
            </p>
          </div>
          <a href="#applications">
            <span>become a mentor</span>
            <ArrowIcon />
          </a>
        </article>
      </div>
    </section>
  )
}

function Applications() {
  return (
    <section className="applications" id="applications">
      <div className="applications__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="applications__content">
        <div className="applications__intro">
          <h2>applications are open.</h2>
        </div>
        <div className="applications__actions">
          <button className="application-button" type="button">
            <span className="application-button__number">01</span>
            <span className="application-button__label">
              <b>apply as a mentee</b>
            </span>
            <span className="application-button__arrow"><ArrowIcon /></span>
          </button>
          <button className="application-button" type="button">
            <span className="application-button__number">02</span>
            <span className="application-button__label">
              <b>become a mentor</b>
            </span>
            <span className="application-button__arrow"><ArrowIcon /></span>
          </button>
        </div>
        <p className="applications__closing">
          today's mentees become{' '}
          <strong>
            <span className="applications__unbroken">tomorrow's mentors</span>. the
            circle only ever widens.
          </strong>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <a href="#top" aria-label="X-Peer, back to top">
          <img src={logoIvory} alt="X-Peer" />
        </a>
        <p>if you want to go fast, go alone. if you want to go far, go together.</p>
      </div>
      <div className="site-footer__bottom">
        <p>peer mentorship, one year apart.</p>
        <nav aria-label="Footer navigation">
          <a href="#programme">programme</a>
          <a href="#people">people</a>
          <a href="#who-its-for">who it's for</a>
          <a href="#applications">applications</a>
        </nav>
        <a className="site-footer__top" href="#top">
          back to top <ArrowIcon direction="up" />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Programme />
        <People />
        <Audience />
        <Applications />
      </main>
      <Footer />
    </>
  )
}
