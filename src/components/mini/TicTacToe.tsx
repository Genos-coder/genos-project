import { useState } from "react";

function TicTacToe() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);

  const [isX, setX] = useState(false);
  const [winner, setWinner] = useState<string>("");
  const currentStat = history[history.length - 1];
  const jumpTo = (id: number) => {
    setHistory(history.slice(0, id));
  };
  const restart = () => {
    setWinner("");
    setHistory((prev) => {
      return prev.slice(0, 1);
    });
  };
  const handleClick = (id: number) => {
    let newStat = history[history.length - 1].slice(0);
    if (winner || history.length === 10) {
      return;
    }
    if (isX) {
      newStat[id] = "X";
      setX(false);
    } else {
      newStat[id] = "O";
      setX(true);
    }
    const winningPlayer = winningFunction(newStat);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
    console.log(winningPlayer);
    setHistory([...history, newStat]);
  };
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
      <div>
        {winner ? (
          <p className="text-black">Winner is {winner}</p>
        ) : (
          <p className="text-black">no winner now </p>
        )}
      </div>
      <div className="flex gap-4">
        <div className="grid grid-cols-3 gap-2 grid-rows-3">
          {currentStat.map((move, idx) => {
            return (
              <button
                onClick={() => handleClick(idx)}
                className="w-10 h-10 text-black rounded-lg bg-white border border-black"
                key={`${idx}a2`}
              >
                {move}
              </button>
            );
          })}
        </div>
        <div className="h-[150px] gap-3 m-2 overflow-hidden flex flex-col overflow-y-scroll">
          {history.map((item, idx) => {
            return (
              <button
                onClick={() => (idx === 0 ? restart() : jumpTo(idx))}
                className="text-black bg-gradient-to-b from-slate-300 to-gray-500 p-[1px] rounded-lg"
                key={`${idx}a3`}
              >
                {idx === 0 ? "Restart" : `Jump to ${idx}`}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TicTacToe;

const winningFunction = (arr: (string | null)[]) => {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combo of combos) {
    let [a, b, c] = combo;
    if (arr[a] && arr[a] == arr[b] && arr[b] == arr[c]) {
      return arr[a];
    }
  }
};
