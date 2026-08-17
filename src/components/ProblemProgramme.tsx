import directionIcon from "../../assets/icons/selected/direction.png";
import studiesIcon from "../../assets/icons/selected/your-studies.png";
import gettingInIcon from "../../assets/icons/selected/getting-in.png";
import milanIcon from "../../assets/icons/selected/life-in-milan.png";
import { cn } from "../lib/cn";

const pathways = [
  {
    title: "direction",
    description:
      "which paths genuinely fit you, including the ones with no map",
    image: directionIcon,
    alt: "A guided line moving forward.",
  },
  {
    title: "your studies",
    description: "how to approach Bocconi, and where your effort is best spent",
    image: studiesIcon,
    alt: "An open book with a highlighted point.",
  },
  {
    title: "getting in",
    description:
      "which associations, spring weeks and internships to aim for, and how",
    image: gettingInIcon,
    alt: "A guided path passing through an arch.",
  },
  {
    title: "life in Milan",
    description:
      "settling in, finding a rhythm, feeling at home in a city that isn't yours yet",
    image: milanIcon,
    alt: "A path settling within a wider circle.",
  },
] as const;

export function Problem() {
  return (
    <section
      className="bg-forest px-[var(--page-pad)] py-[clamp(6.5rem,9vw,9rem)] text-ivory max-[42rem]:py-20"
      id="why-xpeer"
    >
      <div className="mx-auto grid max-w-[91rem] grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] gap-[clamp(4rem,8vw,9rem)] max-[56rem]:grid-cols-1 max-[42rem]:gap-9">
        <h2 className="m-0 max-w-[17ch] [align-self:start] pb-[0.08em] text-[clamp(3.2rem,5.2vw,5.6rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance max-[42rem]:max-w-[16ch] max-[42rem]:text-[clamp(2.65rem,10.5vw,3.5rem)] max-[42rem]:leading-none">
          too much of university depends on who you happen to meet in the first
          weeks.
        </h2>
        <div className="max-w-[40rem] self-center max-[56rem]:ml-0 max-[56rem]:w-[min(100%,42rem)] max-[56rem]:max-w-[46rem]">
          <p className="m-0 text-[clamp(1.25rem,1.8vw,1.65rem)] leading-normal tracking-[-0.015em] text-ivory-muted max-[42rem]:text-[clamp(1.05rem,4.8vw,1.15rem)] max-[42rem]:leading-normal">
            sometimes, it's the person who tells you which exam really matters,
            which association is worth applying to, how spring weeks work, or
            simply that the confusion you feel is normal. meeting them usually
            comes down to luck.
            <strong className="mt-[0.35em] block text-[1.12em] leading-[1.25] font-bold text-lime max-[42rem]:mt-[0.65rem]">
              we built something better.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Programme() {
  return (
    <section
      className="mx-auto max-w-[91rem] px-[var(--page-pad)] pt-[clamp(6.5rem,10vw,10rem)] pb-[clamp(7rem,12vw,12rem)] max-[42rem]:pt-20 max-[42rem]:pb-[5.5rem]"
      id="programme"
    >
      <div className="m-0 max-w-none">
        <div className="min-w-0">
          <h2 className="m-0 pb-[0.08em] font-bold tracking-[-0.04em] text-balance max-w-[10ch] text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] max-[42rem]:text-[clamp(2.75rem,12vw,3.75rem)] max-[42rem]:leading-[0.96]">
            one year ahead
          </h2>
          <div>
            <p className="mt-[clamp(1.4rem,2.2vw,2rem)] mb-0 max-w-[22ch] text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.2] font-normal tracking-[-0.02em] text-forest-muted max-[42rem]:mt-4 max-[42rem]:text-[clamp(1.05rem,4.8vw,1.2rem)] max-[42rem]:leading-[1.35]">
              close enough to remember. far enough ahead to help.
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-[clamp(4.5rem,7vw,7rem)] grid grid-cols-2 max-[42rem]:mt-11 max-[42rem]:grid-cols-1"
        aria-label="Four areas of mentorship"
      >
        {pathways.map((pathway, index) => (
          <article
            className={cn(
              "flex min-h-[27rem] flex-col py-6 pr-[clamp(1rem,4vw,4rem)] pb-[clamp(3rem,5vw,5rem)] pl-0 max-[42rem]:min-h-0 max-[42rem]:px-0 max-[42rem]:py-4 max-[42rem]:pb-10",
              index % 2 === 1 &&
                "border-l pl-[clamp(1.5rem,4vw,4rem)] pr-0! [border-left-color:color-mix(in_srgb,var(--color-forest)_28%,transparent)] max-[42rem]:border-l-0 max-[42rem]:[border-left-color:currentColor] max-[42rem]:px-0",
              index >= 2 &&
                "border-t [border-top-color:color-mix(in_srgb,var(--color-forest)_38%,transparent)]",
              index === 1 &&
                "max-[42rem]:border-t max-[42rem]:[border-top-color:color-mix(in_srgb,var(--color-forest)_38%,transparent)]",
            )}
            key={pathway.title}
          >
            <div className="flex flex-col items-start">
              <div className="relative mt-[clamp(1.3rem,2vw,1.8rem)] h-[clamp(6.75rem,10vw,8.1rem)] w-[clamp(6.75rem,10vw,8.1rem)] overflow-hidden rounded-[1.15rem] max-[42rem]:mt-4 max-[42rem]:h-[5.5rem] max-[42rem]:w-[5.5rem]">
                <img
                  className="h-full w-full object-contain"
                  src={pathway.image}
                  alt={pathway.alt}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-auto pt-16 max-[42rem]:mt-0 max-[42rem]:pt-6">
              <h3 className="m-0 pb-[0.07em] text-[clamp(2.35rem,4.4vw,4.45rem)] leading-[1.02] font-bold tracking-[-0.04em] text-accent-text max-[42rem]:text-[clamp(2.4rem,10.5vw,3rem)]">
                {pathway.title}
              </h3>
              <p className="mt-[1rem] mb-0 max-w-[28rem] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.42] text-forest-muted max-[42rem]:mt-[0.7rem] max-[42rem]:text-base max-[42rem]:leading-[1.45]">
                {pathway.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-[clamp(6rem,10vw,10rem)] flex min-h-[clamp(27rem,38vw,34rem)] items-center justify-center overflow-hidden rounded-[1.25rem] bg-lime p-[clamp(3.5rem,7vw,7rem)] text-notte after:absolute after:top-[-12rem] after:right-[-12rem] after:h-[32rem] after:w-[32rem] after:rounded-[50%] after:border after:border-[color-mix(in_srgb,var(--color-forest)_28%,transparent)] max-[42rem]:min-h-[27rem] max-[42rem]:rounded-2xl max-[42rem]:py-8 max-[42rem]:px-[1.3rem] max-[42rem]:after:top-[-6rem] max-[42rem]:after:right-[-5rem] max-[42rem]:after:h-[20rem] max-[42rem]:after:w-[20rem]">
        <p className="relative z-[1] m-0 max-w-[18ch] pb-[0.1em] text-center text-[clamp(2.7rem,5.7vw,5.7rem)] leading-[1.06] font-light tracking-[-0.04em] text-balance max-[42rem]:text-[clamp(2.45rem,10.8vw,3.25rem)] max-[42rem]:leading-[1.08]">
          give it a year and it stops feeling like a programme
          <strong className="mt-[0.15em] block font-bold">
            and starts feeling like a friendship.
          </strong>
        </p>
      </div>
    </section>
  );
}
