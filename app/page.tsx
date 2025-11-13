import Image from "next/image";

const atmosphere = [
  "Cinematic lighting softly hugging the scene.",
  "Gentle breeze weaving through emerald leaves.",
  "Birdsong carried on the warm summer air.",
  "Sunbeams painting golden highlights across smiling faces."
];

export default function Home() {
  return (
    <main className="scene">
      <div className="sun" aria-hidden />
      <div className="birds" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="content">
        <h1>Sunlit Stroll</h1>
        <p>
          Harm turns to Ahad with a bright grin. “Wow, Ahad! The weather feels so
          nice today.” Ahad laughs, nodding toward the tree-lined path. “Yeah,
          it&apos;s perfect for a walk.”
        </p>
        <p className="subtitle">
          They stroll beneath swaying branches, sunlight glowing softly as the
          camera glides upward into the boundless blue.
        </p>
        <ul aria-label="Atmospheric details">
          {atmosphere.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <figure className="signature">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
            alt="Sunlit trees with a path"
            width={800}
            height={500}
            priority
          />
          <figcaption>
            Natural hues, serene motion, and a peaceful mood captured in a single
            frame.
          </figcaption>
        </figure>
      </div>
      <div className="foreground" aria-hidden />
    </main>
  );
}
