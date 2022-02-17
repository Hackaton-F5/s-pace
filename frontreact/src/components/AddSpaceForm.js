import api from "../globalapi";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddSpaceForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const unique_id = uuid();

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      unique_id,
      name,
      image,
      price,
      contact,
      city,
      description,
    };

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
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Add s-pace's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          placeholder="Add a photo url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          placeholder="Taken by"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Contact</label>
        <input
          type="text"
          placeholder="Add your contact mail here"
          value={price}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">City</label>
        <input
          type="text"
          placeholder="What city this is"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        {!isLoading && <button>Publish your space!</button>}
        {isLoading && <button disabled>Adding...</button>}
      </div>
    </form>
  );
}
