import { useState } from "react";
import INITIAL_FORM_STATES from "../utils/states";
import { registerOrder } from "../utils/api";

function InputComponent() {
  const [formStates, setFormStates] = useState(INITIAL_FORM_STATES);

  async function handleRegisterClickBtn() {
    const { name, person, price, quantity } = formStates;
    console.log(formStates)
    console.log({ name, person, price, quantity })
    const registerObj = {
      name,
      person,
      price: Number(price),
      quantity: Number(quantity),
    };
    const register = await registerOrder(registerObj);
    console.log(register)
  };
  
  function handleStates(e) {
    const { target: { name, value } } = e;
    setFormStates((prev) => ({
        ...prev,
        [name]: value,
    }));
  }

  return (
    <div className="formScreen">
        <div className="a">
            <div className="formDiv">
                <input
                  className="inputPForm"
                  type="text"
                  placeholder="Nome do produto"
                  onChange={(e) => handleStates(e)}
                  name="name"
                  value={formStates.name}
                />
                <input
                  className="inputPForm"
                  type="text" 
                  placeholder="Trabalhador que pediu"
                  onChange={(e) => handleStates(e)}
                  name="person"
                  value={formStates.person}
                />
                <input
                  className="inputPForm"
                  type="number"
                  placeholder="Preço do produto"
                  onChange={(e) => handleStates(e)}
                  name="price"
                  value={formStates.price}
                />
                <input
                  className="inputPForm"
                  type="number"
                  placeholder="Quantidade do produto"
                  onChange={(e) => handleStates(e)}
                  name="quantity"
                  value={formStates.quantity}
                />
                <button
                  onClick={handleRegisterClickBtn}
                >
                    Registrar
                </button>
            </div>
        </div>
    </div>
  );
}

export default InputComponent;