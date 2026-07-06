import { useSonicMood } from '../context/SonicMoodContext';
import { MOOD_OPTIONS } from '../types';

const SonicMoodMatcher = () => {
  const { selectedMood, selectMood, moodTheme } = useSonicMood();

  return (
    <section className="section-padding pb-16 md:pb-20">
      <div className="container-tight">
        <div className="mb-14 max-w-2xl">
          <span className="label-text mb-5 block">Mood Matcher</span>
          <h2 className="heading-section text-3xl md:text-[2.75rem] lg:text-5xl">
            Tune the Atmosphere
          </h2>
          <p className="mt-6 text-body max-w-lg">
            Each mood reshapes the studio&apos;s light, palette, and reel — like selecting
            a register on an instrument.
          </p>
        </div>

        <div className="staff-line mb-10" />

        <div className="glass-panel p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOOD_OPTIONS.map((mood) => {
              const isActive = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => selectMood(mood.id)}
                  className={`mood-selector group ${isActive ? 'mood-selector-active' : ''}`}
                >
                  <span
                    className={`label-text block mb-2 transition-colors duration-700 ease-tuned ${
                      isActive ? 'text-accent' : ''
                    }`}
                  >
                    {mood.index}
                  </span>
                  <span
                    className={`block font-serif text-xl md:text-2xl tracking-editorial transition-colors duration-700 ease-tuned ${
                      isActive ? 'text-white' : 'text-editorial-muted group-hover:text-editorial-body'
                    }`}
                  >
                    {mood.label}
                  </span>
                  <span className="mt-2 block text-sm text-editorial-dim leading-relaxed">
                    {mood.description}
                  </span>
                  {isActive && (
                    <span
                      className="absolute top-5 right-5 w-1 h-1 rounded-full animate-pulse"
                      style={{ backgroundColor: moodTheme.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <p className="mt-10 label-text text-editorial-dim">
            {selectedMood
              ? `${moodTheme.label} — filtering reel & shifting palette`
              : 'No mood engaged — select to calibrate the room'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SonicMoodMatcher;
