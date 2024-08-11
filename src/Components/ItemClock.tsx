import moment from "moment";
import { useEffect, useState } from "react";

interface propTime {
  item: {
    name: string;
    def: number;
    id: number | undefined;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  onRemove: number;
}

export default function ItemClock({ item, onRemove }: propTime) {
  const [currentTime, setCurrentTime] = useState<string>(
    moment().format("HH:mm:ss")
  );

  const names = item.name;
  const idx = item.id;
  useEffect(() => {
    const def = item.def;
    // Функция обновления времени
    const updateTime = () => {
      setCurrentTime(moment().clone().add(def, "hours").format("HH:mm:ss"));
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="item_clocks">
      <p className="name_city">{names}</p>
      <p className="value_time">{currentTime}</p>
      <button className="clear_item" onClick={() => onRemove(idx)}>
        X
      </button>
    </div>
  );
}
