import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const NewCampground = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_CAMPGROUND_ROUTE}`,
        data
      );
      console.log(res);
    } catch (e) {
      console.log(process.env.REACT_APP_CAMPGROUND_ROUTE);
      console.log(e);
    }
  };

  return (
    <main className="main new-campground">
      <section className="container">
        <div className="row row1">
          <h1>New Campground</h1>
        </div>
        <div className="row row2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label>title</label>
              <input
                name="title"
                ref={register({ required: true })}
                type="text"
              ></input>
            </div>
            <div className="input-group">
              <label>location</label>
              <input
                name="location"
                ref={register({ required: true })}
                type="text"
              ></input>
            </div>
            <div className="input-group">
              <label>image url</label>
              <input
                name="image"
                ref={register({ required: true })}
                type="text"
              ></input>
            </div>
            <div className="input-group">
              <label>campground price</label>
              <input
                name="price"
                ref={register({ required: true })}
                type="number"
              ></input>
            </div>
            <div className="input-group">
              <label>description</label>
              <textarea
                name="description"
                ref={register({ required: true })}
              ></textarea>
            </div>
            <div className="input-group">
              <button>add campground</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default NewCampground;
