"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

const itemsData = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
];

export default function DraggableGrid() {
  const [items, setItems] = useState(itemsData);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="hidden md:grid grid-cols-2 gap-4"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          whileDrag={{ scale: 1.05 }}
          className="
            cursor-grab active:cursor-grabbing
            rounded-xl border border-[color:var(--border)]
            bg-[color:var(--background)]
            p-6 shadow-sm
          "
        >
          {item.title}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
