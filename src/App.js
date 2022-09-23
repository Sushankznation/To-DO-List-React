import React, { useState } from "react";
import "./styles.css";
import List from "./List";
export default function App() {
  let [inputlist, setInputList] = useState("");
  let [submit, setSubmit] = useState([]);
  //Input change Handler
  const ChangeHandler = (e) => {
    setInputList(e.target.value);
  };

  //Submit Handler
  const submitHandler = () => {
    //here prevData is accessing the previous
    //  data of the 2nd useState
    setSubmit((prevData) => {
      //spread operator helping to include the previous data of
      // 2nd useState & inputList is accesing the new data of user
      return [...prevData, inputlist];
    });
    setInputList("");
  };

  //function for delete List Items
  const deleteItems = (id) => {
    // alert("Hello") //Checking
    setSubmit((preValue) => {
      return preValue.filter((arrElement, index) => {
        //with filter here am checking that the value or key of
        //id and index are not same then return it
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            value={inputlist}
            type="text"
            placeholder="Add Item"
            onChange={ChangeHandler}
            name="inputField"
          />
          <button onClick={submitHandler}> + </button>

          <ol>
            {/* //storing the data in the map and reflecting */}
            {submit.map((itemVal, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
