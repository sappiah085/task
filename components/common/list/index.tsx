import React, { ReactNode } from "react";
type propType<T> = {
  renderMethod: (item: T) => ReactNode;
  items: T[];
  direction?: "row" | "column";
  gap: string;
};
const ListItem = <T,>({
  renderMethod,
  items,
  gap,
  direction = "row",
}: propType<T>) => {
  const classname = `flex   items-center justify-center ${gap} ${
    direction === "row" ? "flex-row" : "flex-col"
  } `;
  return (
    <ul className={classname}>
      {items.map((i, k) => (
        <li key={k}>{renderMethod(i)}</li>
      ))}
    </ul>
  );
};

export default ListItem;
