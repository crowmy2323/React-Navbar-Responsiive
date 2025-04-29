import React, { useState } from "react";
import './index.css';
import data from "./components/Datatext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);
  const [showmodal, setshowmodal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    let number = data.length;

    if (amount <= 0 || isNaN(amount)) {
      setshowmodal(true);
      return;
    }

    if (amount > number) {
      amount = number;
    }

    settext(data.slice(0, amount));
  };

  return (
    <div className="section-center">
      <h3>لورم ساز</h3>
      <form className="lorem" onSubmit={submitHandler}>
        <label htmlFor="total">تعداد پاراگراف:</label>
        <input
          type="number"
          name="total"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />
        <button type="submit">بساز</button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>

      {/* Modal */}
      <Modal show={showmodal} onHide={() => setshowmodal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ارور!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>عدد صحیح مثبت بنویس</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowmodal(false)}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
