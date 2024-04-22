import "./App.css";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import logo from "./images/card-logo.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Completed } from "./Completed";

function App() {
  const [number, setNumber] = useState("1234 5678 9101 0000");
  const [name, setName] = useState("Nash");
  const [expiry, setExpiry] = useState("03/28");
  const [cvv, setCvv] = useState("503");
  const [validate, setValidate] = useState(false);

  const schema = yup.object().shape({
    cardholderName: yup.string().required("Cardholder name is required"),
    cardNumber: yup
      .string()
      .required("Card number is required")
      .matches(/^\d{16}$/, "Invalid card number"),
    expiryMonth: yup
      .string()
      .required("Expiry month is required")
      .matches(/^\d{2}$/, "Invalid expiry month"),
    expiryYear: yup
      .string()
      .required("Expiry year is required")
      .matches(/^\d{2}$/, "Invalid expiry year"),
    cvv: yup
      .string()
      .required("CVC is required")
      .matches(/^\d{3}$/, "Invalid CVC"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    setValidate(true);
  };

  if (validate === false) {
    return (
      <div className="App">
        <img id="logo" src={logo} alt="Logo" />
        <p className="text-entered" id="card-num">
          {number}
        </p>
        <div className="text-entered" id="card-name">
          {name}
        </div>
        <div className="text-entered" id="card-exp">
          {expiry}
        </div>
        <div className="text-entered" id="card-cvv">
          {cvv}
        </div>

        <div className="container-for-images">
          <img id="card-front" src={cardFront} alt="Card Front" />
          <img id="card-back" src={cardBack} alt="Card Back" />
        </div>

        <div id="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
            <input
              {...register("cardholderName")}
              placeholder="e.g Anthony Gonsalves"
              id="cardholder-name"
              type="text"
              onChange={(e) => {
                setName(e.target.value.toUpperCase());
                setValue("cardholderName", e.target.value.toUpperCase());
              }}
            />
            {errors.cardholderName && (
              <p className="error">{errors.cardholderName.message}</p>
            )}

            <label htmlFor="card-number">CARD NUMBER</label>
            <input
              {...register("cardNumber")}
              placeholder="1234 4565 3323 3455"
              id="card-number"
              type="text"
              onChange={(e) => {
                setNumber(e.target.value);
                setValue("cardNumber", e.target.value);
              }}
            />
            {errors.cardNumber && (
              <p className="error">{errors.cardNumber.message}</p>
            )}

            <div className="flex-horizontal">
              <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
              <label htmlFor="cvc-number">CVC</label>
            </div>
            <div className="flex-horizontal">
              <div>
                <input
                  {...register("expiryMonth")}
                  placeholder="MM"
                  id="expiry-date"
                  type="number"
                  onChange={(e) => {
                    setExpiry(e.target.value + "/" + expiry.split("/")[1]);
                    setValue("expiryMonth", e.target.value);
                  }}
                />
                <input
                  {...register("expiryYear")}
                  placeholder="YY"
                  id="expiry-date"
                  type="number"
                  onChange={(e) => {
                    setExpiry(expiry.split("/")[0] + "/" + e.target.value);
                    setValue("expiryYear", e.target.value);
                  }}
                />
              </div>
              <input
                {...register("cvv")}
                placeholder="e.g 123"
                id="cvc-number"
                type="number"
                onChange={(e) => {
                  setCvv(e.target.value);
                  setValue("cvv", e.target.value);
                }}
              />
            </div>
            {errors.expiryMonth && (
              <p className="error">{errors.expiryMonth.message}</p>
            )}
            {errors.expiryYear && (
              <p className="error">{errors.expiryYear.message}</p>
            )}
            {errors.cvv && <p className="error">{errors.cvv.message}</p>}

            <button type="submit" className="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <img id="logo" src={logo} alt="Logo" />
        <p className="text-entered" id="card-num">
          {number}
        </p>
        <div className="text-entered" id="card-name">
          {name}
        </div>
        <div className="text-entered" id="card-exp">
          {expiry}
        </div>
        <div className="text-entered" id="card-cvv">
          {cvv}
        </div>

        <div className="container-for-images">
          <img id="card-front" src={cardFront} alt="Card Front" />
          <img id="card-back" src={cardBack} alt="Card Back" />
        </div>

        <div id="form-container-confirmed">
          <Completed />
        </div>
      </div>
    );
  }
}

export default App;
