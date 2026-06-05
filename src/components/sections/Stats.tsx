import { Container } from "../ui/Container";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <Container className="py-6">
      <div className="grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-8 md:grid-cols-4 md:p-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-3xl font-black text-brand-gradient sm:text-4xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-sm font-semibold text-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
