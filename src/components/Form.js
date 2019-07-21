import React from "react";

function Form(props) {
  return (
    <form className="form" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="add City" /> <br/>
      <input type="text" name="country" placeholder="add Country" /><br/>
      <button>Fetch</button>
    </form>
  );
}

export default Form;
