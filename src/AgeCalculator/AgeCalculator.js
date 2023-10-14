import styles from "./AgeCalculator.module.css";
import { useState } from "react";
import { differenceInYears } from "date-fns";

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState();

  const onChangeHandler = (e) => {
    e.preventDefault();
    setDateOfBirth(e.target.value);
  };

  const submitHandler = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let d = differenceInYears(today, birthDate);
    setAge(d);
  };

  return (
    <div className={styles.wrap}>
      <span className={styles.title}>Age Calculator</span>
      <span className={styles.sub_heading}>Enter Your Date Of Birth</span>
      <input type="date" value={dateOfBirth} onChange={onChangeHandler} className={styles.date_of_birth}></input>
      <button type="submit" onClick={submitHandler} className={styles.calculate}>
        Calculate Age
      </button>
      {age && <span className={styles.age}>You are {age} years old</span>}
    </div>
  );
};

export default AgeCalculator;
