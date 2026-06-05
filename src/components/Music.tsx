"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const BASE_VOLUME = 0.4;
const FADE_MS = 800;

type MusicCtx = { enabled: boolean; toggle: () => void };
const Ctx = createContext<MusicCtx>({ enabled: false, toggle: () => {} });

export const useMusic = () => useContext(Ctx);

/**
 * Moteur audio (home). Autoplay muet, dé-mute au 1er geste, et fondu lié à la
 * visibilité de la section `watchId` (le son s'arrête en douceur quand on la quitte).
 */
export function MusicProvider({
  src,
  watchId,
  children,
}: {
  src: string;
  watchId: string;
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const enabledRef = useRef(false);
  const visibleRef = useRef(true);
  const [enabled, setEnabled] = useState(false);

  function fade(to: number, onDone?: () => void) {
    const audio = audioRef.current;
    if (!audio) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = audio.volume;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / FADE_MS, 1);
      audio.volume = from + (to - from) * p;
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else onDone?.();
    };
    rafRef.current = requestAnimationFrame(tick);
  }

  function update() {
    const audio = audioRef.current;
    if (!audio) return;
    if (enabledRef.current && visibleRef.current) {
      audio.muted = false;
      if (audio.ended) return;
      if (audio.paused) audio.play().catch(() => {});
      fade(BASE_VOLUME);
    } else {
      fade(0, () => {
        if (!(enabledRef.current && visibleRef.current) && !audio.paused) audio.pause();
      });
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.muted = true;
    audio.play().catch(() => {});

    const events = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"];
    let busy = false;
    const enable = () => {
      if (enabledRef.current || busy) return;
      busy = true;
      const a = audioRef.current!;
      a.muted = false;
      a.play()
        .then(() => {
          enabledRef.current = true;
          setEnabled(true);
          update();
          events.forEach((e) => window.removeEventListener(e, enable));
        })
        .catch(() => {
          a.muted = true;
          a.play().catch(() => {});
          setTimeout(() => (busy = false), 400);
        });
    };
    events.forEach((e) => window.addEventListener(e, enable, { passive: true }));

    const targetEl = document.getElementById(watchId);
    let io: IntersectionObserver | undefined;
    if (targetEl) {
      io = new IntersectionObserver(
        ([entry]) => {
          visibleRef.current = entry.isIntersecting;
          update();
        },
        { threshold: 0 },
      );
      io.observe(targetEl);
    }

    const onEnded = () => setEnabled((v) => v); // garde l'état, le son est fini
    audio.addEventListener("ended", onEnded);

    return () => {
      events.forEach((e) => window.removeEventListener(e, enable));
      io?.disconnect();
      audio.removeEventListener("ended", onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [watchId]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    if (next) {
      if (audio.ended) audio.currentTime = 0;
      audio.muted = false;
    }
    update();
  }

  return (
    <Ctx.Provider value={{ enabled, toggle }}>
      <audio ref={audioRef} src={src} preload="auto" />
      {children}
    </Ctx.Provider>
  );
}

/** Bouton musique (icône note + play / barres) — à placer sous le logo. */
export function MusicButton({ className = "" }: { className?: string }) {
  const { enabled, toggle } = useMusic();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? "Couper la musique" : "Écouter la musique"}
      className={`inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-white backdrop-blur transition-colors hover:bg-white/20 ${className}`}
    >
      {/* note de musique */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9 17.5a2.5 2.5 0 1 1-2.5-2.5c.4 0 .77.09 1.1.25V5l10-2v9.5a2.5 2.5 0 1 1-2.5-2.5c.4 0 .77.09 1.1.25V5.3L9 6.8z" />
      </svg>
      {enabled ? (
        <span className="flex h-3.5 items-end gap-[2px]" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[3px] origin-bottom rounded-full bg-white animate-[eq_0.9s_ease-in-out_infinite]"
              style={{ height: "100%", animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 5v14l11-7z" />
        </svg>
      )}
      <span className="text-xs font-semibold uppercase tracking-wide">
        {enabled ? "Musique" : "Écouter"}
      </span>
    </button>
  );
}
