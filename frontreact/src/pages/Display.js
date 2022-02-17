import React from "react";

export default function Display() {
  return (
    <h1>DISPLAY</h1> /
    (
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

        <div>{!isLoading && <button>rent!</button>}</div>
      </form>
    )
  );
}
