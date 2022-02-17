import api from "../globalapi";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./AddSpaceForm.module.css";

export default function AddSpaceForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const id = uuid();

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      id,
      name,
      image,
      price,
      contact,
      city,
      description,
    };
    console.log(newData);
    setIsLoading(true);

    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.container}>
      <fieldset>
    <form onSubmit={submitHandler} className={styles.form}>
        <legend className={styles.title}><u>Add a new space</u></legend>
      <div className="mb-4">
        <label htmlFor="name">Name &nbsp;</label>
        <input
          type="text"
          placeholder="Add s-pace's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image">Image &nbsp;</label>
        <input
          type="url"
          placeholder="Add a photo url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price">Price &nbsp;</label>
        <input
          type="text"
          placeholder="Taken by"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price">Contact &nbsp;</label>
        <input
          type="text"
          placeholder="Add your contact mail here"
          value={price}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price">City &nbsp;</label>
        <input
          type="text"
          placeholder="What city this is"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="description">Description &nbsp;</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        {!isLoading && <button className="btn btn-primary">Publish your space!</button>}
        {isLoading && <button disabled>Adding...</button>}
      </div>
    </form>
    </fieldset>
    </div>
  );
}