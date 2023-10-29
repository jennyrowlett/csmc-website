import { useEffect, useState } from "react";

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

export default function Root() {
  const [whichB, setWhichB] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWhichB(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const otherLetters = [
    ["o", "m", "p", "u", "t", "e", "r", " "],
    ["c", "i", "e", "n", "c", "e", " ", " "],
    ["a", "j", "o", "r", "s", " ", " ", " "],
    ["o", "m", "m", "i", "t", "t", "e", "e"],
  ];
  const lines = 4;
  const wordLength = otherLetters[0].length + 1;
  const otherLettersView = otherLetters.flatMap((letters, y) =>
    letters.map((letter, x) => (
      <text
        key={`${x}-${y}`}
        className="other-letter"
        style={{
          "--letter-x": x,
          "--letter-y": y,
          "--word-length": wordLength,
          "--lines": lines,
        }}
      >
        {letter}
      </text>
    ))
  );

  const b = (
    <svg
      viewBox="0 0 100 100"
      className={`${whichB ? "b1" : "b2"}`}
      onClick={() => setWhichB((w) => !w)}
    >
      <text
        className="transform-interpolate csmc-transition"
        style={{ "--frac": 0 / 3 }}
      >
        C
      </text>
      <text
        className="transform-interpolate csmc-transition"
        style={{ "--frac": 1 / 3 }}
      >
        S
      </text>
      <text
        className="transform-interpolate csmc-transition"
        style={{ "--frac": 2 / 3 }}
      >
        M
      </text>
      <text
        className="transform-interpolate csmc-transition"
        style={{ "--frac": 3 / 3 }}
      >
        C
      </text>
      {otherLettersView}
    </svg>
  );

  return (
    <main>
      <div>
        <h1>CSMC</h1>
      </div>
      {b}
    </main>
  );
}