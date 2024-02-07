import './Form.css';
function Form() {
  return (
    <form className="form">
      <label className="label">
        Name:
        <input type="text" className="input" name="name" />
      </label>
      <label className="label">
        Difficult:
        <input type="text" className="input" name="difficulty" />
      </label>
      <label className="label">
        Category:
        <input type="text" className="input" name="category" />
      </label>
      <label className="label">
        Cuisine:
        <input type="text" className="input" name="cuisine" />
      </label>
      <label className="label">
        Description:
        <input type="text" className="input" name="description" />
      </label>
      <label className="label">
        Notes:
        <input type="text" className="input" name="notes" />
      </label>
      <label className="label">
        URL:
        <input type="text" className="input" name="url" />
      </label>
      <label className="label">
        Image URL:
        <input type="text" className="input" name="imageurl" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
