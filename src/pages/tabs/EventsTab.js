
import { useForm } from "react-hook-form";
import styles from "./EventsTab.module.css";

const EventsTab = () => {
  let confederation = [
    {
      name: "UEFA",
      continent: "Europe",
    },
    {
      name: "CAF",
      continent: "Africa",
    },
    {
      name: "AFC",
      continent: "ASIA",
    },
    {
      name: "CONMEBOL",
      continent: "South America",
    },
    {
      name: "OFC",
      continent: "Oceania",
    },
    {
      name: "CONCACAF",
      continent: " North, Central America and Caribbean",
    },
  ];

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(watch("example"));
  //   console.log(watch("exampleRequired"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container1}>
        <h1>Events</h1>
        <ul className={styles.flexOuter}>
          <li>
            <label htmlFor="event-name">Event Name</label>
            <input
              type="text"
              id="event-name"
              {...register("event-name")}
              placeholder="Enter name Event"
            ></input>
          </li>

          <li>
            <label htmlFor="host">Event Host Nation</label>
            <input
              type="text"
              id="host"
              placeholder="Enter Host nation"
              {...register("host")}
            ></input>
          </li>

          <li>
            <label htmlFor="conf">Confederation</label>
            <select
              id="conf"
              placeholder="Select Confederation"
              {...register("confederation")}
            >
              {confederation.map((item, index) => {
                return (
                  <option key={index} value={confederation.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </li>

          <li>
            <label htmlFor="comp-level">Competition Level</label>
            <select
              id="comp-level"
              placeholder="Select Level"
              {...register("comp-level")}
            >
              <option value="FA">FA</option>
              <option value="Clubs">Clubs</option>
            </select>
          </li>

          <li>
            <label htmlFor="sDate">Start Date</label>
            <input
              type="date"
              id="sDate"
              placeholder="Enter Start Date of Event"
              {...register("startDate")}
            ></input>
          </li>

          <li>
            <label htmlFor="eDate">End Date</label>
            <input
              type="date"
              id="eDate"
              placeholder="Enter End Date of Event"
              {...register("endDate")}
            ></input>
          </li>
          <li>
            <label htmlFor="about">About</label>
            <textarea
              rows="6"
              id="about"
              placeholder="Enter Enter about Player"
              {...register("about")}
            ></textarea>
          </li>

          <li>
            <button className={styles.formSubmit} type="submit">
              Submit
            </button>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default EventsTab;
