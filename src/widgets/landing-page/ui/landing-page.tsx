import { landingPageContentRu } from '@/content/ru';
import type { ReactElement } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

interface TextCardProps {
  title: string;
  description: string;
}

interface PrincipleCardProps extends TextCardProps {
  eyebrow: string;
}

interface ActionCardProps extends TextCardProps {
  points: string[];
}

interface FaqItemProps extends TextCardProps {}

interface ProblemMapItemProps extends TextCardProps {
  step: string;
  isLast: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps): ReactElement {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[rgb(var(--color-ink))] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[rgb(var(--color-muted))] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function TextCard({ title, description }: TextCardProps): ReactElement {
  return (
    <article className="h-full rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-white/82 p-6 shadow-soft backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-[rgb(var(--color-ink))]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[rgb(var(--color-muted))]">
        {description}
      </p>
    </article>
  );
}

function PrincipleCard({
  eyebrow,
  title,
  description,
}: PrincipleCardProps): ReactElement {
  return (
    <article className="h-full rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,248,246,0.95))] p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--color-forest))]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-[rgb(var(--color-ink))]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[rgb(var(--color-muted))]">
        {description}
      </p>
    </article>
  );
}

function ActionCard({ title, description, points }: ActionCardProps): ReactElement {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-white/82 p-6 shadow-soft backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-[rgb(var(--color-ink))]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[rgb(var(--color-muted))]">
        {description}
      </p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[rgb(var(--color-ink))]">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span
              className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgb(var(--color-forest))]"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FaqItem({ title, description }: FaqItemProps): ReactElement {
  return (
    <details className="group rounded-[1.5rem] border border-[rgb(var(--color-line))] bg-white/82 p-5 shadow-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[rgb(var(--color-ink))]">
        <span>{title}</span>
        <span
          className="text-lg text-[rgb(var(--color-forest))] transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-6 text-[rgb(var(--color-muted))]">
        {description}
      </p>
    </details>
  );
}

function ProblemMapItem({
  step,
  title,
  description,
  isLast,
}: ProblemMapItemProps): ReactElement {
  return (
    <li className="space-y-4">
      <article className="rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,248,246,0.96))] p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(38,95,86,0.12)] text-sm font-semibold text-[rgb(var(--color-forest))]">
            {step}
          </span>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[rgb(var(--color-ink))]">
              {title}
            </h3>
            <p className="text-sm leading-6 text-[rgb(var(--color-muted))]">
              {description}
            </p>
          </div>
        </div>
      </article>

      {!isLast ? (
        <div className="flex items-center gap-3 px-4">
          <span className="h-px flex-1 bg-[rgb(var(--color-line))]" aria-hidden="true" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[rgb(var(--color-muted))]">
            ведёт к
          </span>
          <span className="h-px flex-1 bg-[rgb(var(--color-line))]" aria-hidden="true" />
        </div>
      ) : null}
    </li>
  );
}

function HeroSection(): ReactElement {
  const { hero } = landingPageContentRu;

  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-[rgb(var(--color-line))] bg-white/72 p-6 shadow-soft backdrop-blur-xl lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:p-10">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div className="absolute left-[-8%] top-[-12%] h-56 w-56 rounded-full bg-[rgba(38,95,86,0.12)] blur-3xl" />
        <div className="absolute bottom-[-18%] right-[-10%] h-64 w-64 rounded-full bg-[rgba(77,121,121,0.14)] blur-3xl" />
      </div>

      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
          {hero.eyebrow}
        </p>
        <div className="space-y-4">
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-[rgb(var(--color-ink))] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[rgb(var(--color-muted))] sm:text-lg">
            {hero.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#manifesto"
            className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--color-forest))] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            {hero.primaryAction}
          </a>
          <a
            href="#problem"
            className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--color-line))] bg-white/84 px-5 py-3 text-sm font-semibold text-[rgb(var(--color-ink))] transition-colors hover:bg-white"
          >
            {hero.secondaryAction}
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          {hero.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgb(var(--color-line))] bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--color-muted))]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <aside className="mt-8 flex flex-col justify-between rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[linear-gradient(180deg,rgba(244,248,246,0.97),rgba(255,255,255,0.9))] p-6 shadow-soft lg:mt-0">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
            На этой странице
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[rgb(var(--color-ink))]">
            Спокойный язык вместо громких жестов
          </h2>
          <p className="text-sm leading-6 text-[rgb(var(--color-muted))]">
            Новый Мир хочет объяснять сложные вещи без страха, насилия и
            культа личности. Сначала ясность, потом обсуждение, потом
            совместная работа.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm leading-6 text-[rgb(var(--color-ink))]">
          {[
            'Человеческое достоинство важнее границ.',
            'Справедливый труд важнее красивых лозунгов.',
            'Изменения начинаются с ясного и мирного языка.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgb(var(--color-sea))]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

function SafetySection(): ReactElement {
  const { safety } = landingPageContentRu;

  return (
    <section
      id="safety"
      className="mt-20 scroll-mt-28 rounded-[2rem] border border-[rgb(var(--color-line))] bg-white/74 p-6 shadow-soft backdrop-blur-xl lg:p-10"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <SectionHeading
          eyebrow="Безопасность"
          title={safety.title}
          description={safety.description}
        />

        <div className="rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[rgba(38,95,86,0.08)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
            Что это значит
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-[rgb(var(--color-ink))]">
            {safety.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgb(var(--color-forest))]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProblemSection(): ReactElement {
  const { problem } = landingPageContentRu;

  return (
    <section id="problem" className="mt-20 scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow={problem.eyebrow}
        title={problem.title}
        description={problem.description}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {problem.cards.map((card) => (
          <TextCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function ProblemMapSection(): ReactElement {
  const { problemMap } = landingPageContentRu;

  return (
    <section
      id="problem-map"
      className="mt-20 scroll-mt-28 rounded-[2rem] border border-[rgb(var(--color-line))] bg-white/74 p-6 shadow-soft backdrop-blur-xl lg:p-10"
    >
      <div className="space-y-10">
        <SectionHeading
          eyebrow={problemMap.eyebrow}
          title={problemMap.title}
          description={problemMap.description}
        />

        <ol className="grid gap-4">
          {problemMap.nodes.map((node, index) => (
            <ProblemMapItem
              key={node.step}
              step={node.step}
              title={node.title}
              description={node.description}
              isLast={index === problemMap.nodes.length - 1}
            />
          ))}
        </ol>

        <div className="grid gap-4 rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[rgba(38,95,86,0.08)] p-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
            {problemMap.noteTitle}
          </p>
          <p className="text-sm leading-6 text-[rgb(var(--color-muted))] sm:text-base">
            {problemMap.noteDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

function ManifestoPreviewSection(): ReactElement {
  const { manifestoPreview } = landingPageContentRu;

  return (
    <section
      id="manifesto"
      className="mt-20 scroll-mt-28 grid gap-6 rounded-[2rem] border border-[rgb(var(--color-line))] bg-white/74 p-6 shadow-soft backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-10"
    >
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Манифест"
          title={manifestoPreview.title}
          description={manifestoPreview.description}
        />

        <div className="rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[rgba(38,95,86,0.08)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-forest))]">
            {manifestoPreview.noteTitle}
          </p>
          <p className="mt-3 text-sm leading-6 text-[rgb(var(--color-muted))]">
            {manifestoPreview.noteDescription}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[1.75rem] border border-[rgb(var(--color-line))] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,248,246,0.96))] p-6 shadow-soft">
          <div className="space-y-4">
            {manifestoPreview.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-[rgb(var(--color-ink))]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-6 text-[rgb(var(--color-muted))]">
            Манифест здесь нужен не для давления, а для ясности. Он помогает
            увидеть направление и говорить о будущем спокойнее.
          </p>
          <a
            href="#principles"
            className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--color-line))] bg-white/84 px-5 py-3 text-sm font-semibold text-[rgb(var(--color-ink))] transition-colors hover:bg-white"
          >
            {manifestoPreview.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection(): ReactElement {
  const { principles } = landingPageContentRu;

  return (
    <section id="principles" className="mt-20 scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow="Принципы"
        title="Что держит проект в спокойной форме"
        description="Эти принципы задают тон и не дают странице превратиться в лозунг или агрессивный жест."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {principles.map((principle) => (
          <PrincipleCard key={principle.title} {...principle} />
        ))}
      </div>
    </section>
  );
}

function WhatCanIDoSection(): ReactElement {
  const { whatCanIDo } = landingPageContentRu;

  return (
    <section id="what-can-i-do" className="mt-20 scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow={whatCanIDo.eyebrow}
        title={whatCanIDo.title}
        description={whatCanIDo.description}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {whatCanIDo.actions.map((action) => (
          <ActionCard key={action.title} {...action} />
        ))}
      </div>
    </section>
  );
}

function FaqSection(): ReactElement {
  const { faq } = landingPageContentRu;

  return (
    <section id="faq" className="mt-20 scroll-mt-28 space-y-10">
      <SectionHeading
        eyebrow={faq.eyebrow}
        title={faq.title}
        description={faq.description}
      />
      <div className="grid gap-4">
        {faq.items.map((item) => (
          <FaqItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function FooterSection(): ReactElement {
  const { footer } = landingPageContentRu;

  return (
    <footer className="mt-20 border-t border-[rgb(var(--color-line))] pt-8 text-sm leading-6 text-[rgb(var(--color-muted))]">
      <p>{footer.description}</p>
      <p className="mt-3">
        Если хотите спокойный следующий шаг, начните с обсуждения текста,
        правок или идеи для улучшения доступности.
      </p>
    </footer>
  );
}

export function LandingPage(): ReactElement {
  const { projectName, navigation } = landingPageContentRu;

  return (
    <div className="relative overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-[rgb(var(--color-line))] bg-[rgba(250,252,250,0.84)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-[rgb(var(--color-ink))]"
          >
            {projectName}
          </a>
          <nav
            aria-label="Основная навигация"
            className="flex gap-2 overflow-x-auto pb-1 text-sm md:justify-end"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-[rgb(var(--color-line))] bg-white/70 px-4 py-2 text-[rgb(var(--color-muted))] transition-colors hover:bg-white hover:text-[rgb(var(--color-ink))]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <HeroSection />
        <SafetySection />
        <ProblemSection />
        <ProblemMapSection />
        <ManifestoPreviewSection />
        <PrinciplesSection />
        <WhatCanIDoSection />
        <FaqSection />
        <FooterSection />
      </main>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4980a6aef7cb7906bd0d932ff85bb94bb87ee3e5
