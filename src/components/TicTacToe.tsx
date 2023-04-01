import React, { useState } from "react";
import { Field, FilledField, WinField, HandleOnBoxClick } from "../types/types";
import Box from "./Box";

const initialFieldsState: Array<Field> = ["", "", "", "", "", "", "", "", ""];

const initialFillField: FilledField = "circle";

const winCases: Array<Array<number>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe: React.FC = () => {
  const [fields, setFields] = useState(initialFieldsState);
  const [fillWith, setFillWith] = useState<FilledField>(initialFillField);
  const [wins, setWins] = useState<WinField>(null);

  const switchFillWith = () => {
    if (fillWith === "circle") {
      setFillWith("hiks");
    } else {
      setFillWith("circle");
    }
  };

  const checkWinning = (
    newFields: Array<Field>,
    currentFillWith: FilledField
  ) => {
    const indeces: Array<number> = newFields.reduce(
      (acc: Array<number>, f: Field, index: number) => {
        if (f === currentFillWith) {
          return [...acc, index];
        } else {
          return acc;
        }
      },
      []
    );

    winCases.forEach((winCase: number[]) => {
      if (winCase.every((num) => indeces.includes(num))) {
        setWins(currentFillWith);
      }
    });
  };

  const handleOnClick: HandleOnBoxClick = (index: number) => (event) => {
    if (fields[index] === "circle" || fields[index] === "hiks") return;
    const newFieldsState = [
      ...fields.slice(0, index),
      fillWith,
      ...fields.slice(index + 1),
    ];
    setFields(newFieldsState);
    checkWinning(newFieldsState, fillWith);
    switchFillWith();
  };

  return (
    <div>
      <h3>Tic Tac Toe</h3>
      {wins && <h1 className="red-text">The {wins} wins!</h1>}
      <section className="tictactoe">
        {fields.map((f, i) => (
          <Box key={i} boxText={f} handleOnClick={handleOnClick(i)} />
        ))}
      </section>
    </div>
  );
};

export default TicTacToe;
