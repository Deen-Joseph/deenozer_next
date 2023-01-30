import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styles from "./FaTabs.module.css";
import Image from 'next/image'

const imageMimeType = /image\/(png|jpg|jpeg)/i;


const FaTabs = () => {
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
  //   console.log(watch("exampleRequired"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container1}>
      <p className="text-3xl font-bold italic pb-4">Football Associations</p>
        <ul className={styles.flexOuter}>
          <li>
            <label htmlFor="fa-name">FA Name</label>
            <input
              type="text"
              id="fa-name"
              {...register("fa-name")}
              placeholder="Enter FA name"
            ></input>
          </li>
          <li>
            <label htmlFor="nation">Nation</label>
            <input
              type="text"
              id="nation"
              placeholder="Enter Nation"
              {...register("nation")}
            ></input>
          </li>
          <li>
            <label htmlFor="conf">Confederation</label>
            <select
              id="conf"
              placeholder="Select FA Confederation"
              {...register("conf")}
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
            <label htmlFor="dob">Date of foundation</label>
            <input
              type="date"
              id="dof"
              placeholder="Enter Date of foundation here"
              {...register("dof")}
            ></input>
          </li>
          <li>
            <label htmlFor="about">About</label>
            <textarea
              rows="6"
              id="about"
              placeholder="Enter about FA "
              {...register("about")}
            ></textarea>
          </li>

          <li>
            <label htmlFor="ranking">FIFA Ranking</label>
            <input
              type="number"
              id="ranking"
              placeholder="Enter FIFA Ranking"
              {...register("ranking")}
            ></input>
          </li>
          <li>
            <label htmlFor="logo">FA Logo</label>
           
            <input
              type="file"
              id="logo"
              accept=".png, .jpg, .jpeg"
              {...logoImage}
              onChange={changeHandler}
              placeholder="Upload FA Logo"
              
            ></input>
          </li>
          <li>
            <label htmlFor="preview">Preview</label>
            {fileDataURL ? (
              styles.prev && <Image alt="" id="preview" className={styles.prev} src={fileDataURL}></Image>
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

export default FaTabs;
