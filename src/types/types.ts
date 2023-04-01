export type Field = "" | "circle" | "hiks";

export type FilledField = "circle" | "hiks"

export type WinField = FilledField | null

export type HandleOnBoxClick = (
  index: number
) => React.MouseEventHandler<HTMLDivElement>;

export type BoxProp = {
  boxText: Field;
  handleOnClick: React.MouseEventHandler<HTMLDivElement>;
};