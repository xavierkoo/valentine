import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import ticketFront from "./assets/1.png";
import ticketBack from "./assets/2.png";

export default function Page() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Customizable Rules
  const rules = [
    { rule: "1. Must have at least one romantic emoji", check: (pw) => /❤️|💘|💕|🥰/.test(pw) },
    { rule: "2. Must contain the number 14", check: (pw) => /14/.test(pw) },
    { rule: "3. Must contain the 3 babis combined name", check: (pw) => /orhpoopan/i.test(pw) },
    { rule: "4. Must contain our anniversary date (DD-MM)", check: (pw) => /02-03/.test(pw) },
    { rule: "5. Must have our initials capitaliZed (??&??)", check: (pw) => /XK&SP|SP&XK/.test(pw) },
    { rule: "6. Must contain my favorite food", check: (pw) => /crab/i.test(pw) },
    { rule: "7. Must contain my horoscope", check: (pw) => /capricorn/i.test(pw) },
    { rule: "8. Must contain all the digits in our birthdays added together (including year)", check: (pw) => /86/.test(pw) },
    { rule: "9. Must contain our phone numbers subtracted from each other", check: (pw) => /5541247/.test(pw) },
    { rule: "10. Must contain the number of years we've been together (round up with .0)", check: (pw) => /4.0/.test(pw) },
    { rule: "11. Must contain our BTO unit number (with #)", check: (pw) => /#29-419/.test(pw) },
    { rule: "12. Must contain our BTO QUEUE Number", check: (pw) => /612/.test(pw) },
    { rule: "13. Include the shop where you first tried 🐮", check: (pw) => /ramly/.test(pw) },
    { rule: "14. Last but not least, include the place where we first met", check: (pw) => /starbucks/.test(pw) },
  ];

  const checkPassword = () => {
    if (password === "0000") {
      setIsUnlocked(true);
      return;
    }
    const isValid = rules.every(({ check }) => check(password));
    setIsUnlocked(isValid);
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <>
        <img
          src={lovesvg}
          className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
        />
        <img
          src={lovesvg2}
          className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
        />
        <img
          className="h-[230px] rounded-lg shadow-lg"
          src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
        />
        <h1 className="text-4xl md:text-6xl my-4 text-center">
          You got mail!
        </h1>
        {!isUnlocked ? (
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              className="p-3 border rounded-lg w-80 md:w-80"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={checkPassword}
            >
              Unlock Message
            </button>
            <div className="overflow-y-auto max-h-32 w-80 border rounded-lg p-2 mt-2">
              <ul className="text-sm text-left">
                {rules.map(({ rule, check }) => (
                  <li key={rule} className={check(password) ? "text-green-500" : "text-red-500"}>
                    {check(password) ? "✔️" : "❌"} {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-rose-200 rounded-lg shadow-lg text-center">
            <div className="overflow-x-auto flex gap-4 w-90">
              <img src={ticketFront} className="w-90 flex-shrink-0" />
              <img src={ticketBack} className="w-90 flex-shrink-0" />
            </div>
            {!yesPressed && (
              <div className="flex flex-wrap justify-center gap-2 items-center mt-2">
                <button
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Accept
                </button>
                <button
                  onClick={handleNoClick}
                  className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
                >
                  {noCount === 0 ? "Reject" : getNoButtonText()}
                </button>
              </div>
            )}
            {yesPressed && (
              <div className="mt-4 p-3 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold text-rose-600">Yay! 🎉</h2>
                <p className="text-lg">You accepted the ticket! ❤️</p>
              </div>
            )}
          </div>
        )}
      </>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/xavierkoo/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
