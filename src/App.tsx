import { useState } from "react";
import "./App.css";
import ItemClock from "./Components/ItemClock";

function App() {
  const [valName, setValName] = useState<string>("");
  const [valDef, setValDef] = useState<string>("");
  const [clocks, setClocks] = useState<object[]>([]);

  const handlerSub = () => {
    if (valName === "" || valDef === "") return;
    setClocks([...clocks, { name: valName, def: valDef, id: Math.random() }]);
    setValName("");
    setValDef("");
  };

  const clear = (id) =>
    setClocks((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="box">
      <h2 className="main_title">World Clock</h2>
      <div className="input_box">
        <form className="form_input">
          <div className="input_block">
            <label htmlFor="name">Название</label>
            <input
              type="text"
              name="name"
              value={valName}
              onChange={(e) => setValName(e.target.value)}
              className="input_block_in"
              placeholder="name city..."
            />
          </div>
          <div className="input_block">
            <label htmlFor="difference">Временная зона</label>
            <input
              type="number"
              name="def"
              onChange={(e) => setValDef(e.target.value)}
              value={valDef}
              className="input_block_in"
              placeholder="0"
            />
          </div>
          <button className="input_btn" type="button" onClick={handlerSub}>
            Добавить
          </button>
        </form>
      </div>
      <div className="block_clocks">
        {clocks.map((item) => (
          <ItemClock key={item.id} item={item} onRemove={clear} />
        ))}
      </div>
    </div>
  );
}

export default App;
