import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./ClubsTab.module.css";
import Image from 'next/image'


const imageMimeType = /image\/(png|jpg|jpeg)/i;

const ClubTab = () => {
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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const logoImage = register('logo')

  const changeHandler = (e) => {
   
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  //   console.log(watch("example"));
  // console.log(watch("logo"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container1}>
        <h1>Clubs</h1>
        <ul className={styles.flexOuter}>
          <li>
            <label htmlFor="club-name">Club Name</label>
            <input
              type="text"
              id="club-name"
              {...register("club-name")}
              placeholder="Enter Club name"
            ></input>
          </li>
          <li>
            <label htmlFor="nation">Nation</label>
            <input
              type="text"
              id="nation"
              placeholder="Enter Club Nationality"
              {...register("nation")}
            ></input>
          </li>
          <li>
            <label htmlFor="league-name">League Name</label>
            <input
              type="text"
              id="league-name"
              {...register("league-name")}
              // , { required: true }
              placeholder="Enter League name here"
            ></input>
            {errors.exampleRequired && <span>This field is required</span>}
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
            <label htmlFor="dof">Date of founding</label>
            <input
              type="date"
              id="dof"
              placeholder="Enter Date of founding"
              {...register("dof")}
            ></input>
          </li>
          <li>
            <label htmlFor="about">About</label>
            <textarea
              rows="6"
              id="about"
              placeholder="Enter about Club"
              {...register("about-club")}
            ></textarea>
          </li>

          <li>
            <label htmlFor="ranking">Ranking</label>
            <input
              type="number"
              id="ranking"
              placeholder="Enter Club Ranking"
              {...register("ranking")}
            ></input>
          </li>
          <li>
            <label htmlFor="logo">Club Logo</label>
           
            <input
              type="file"
              id="logo"
              accept=".png, .jpg, .jpeg"
              {...logoImage}
              onChange={changeHandler}
              placeholder="Upload Club Logo"
              
            ></input>
          </li>
          <li>
            <label htmlFor="preview">Preview</label>
            {fileDataURL ? (
              styles.prev && <Image alt="" id="preview" className={styles.prev} src={fileDataURL} width="1" height="1" ></Image>
            ) : null}
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

export default ClubTab;
