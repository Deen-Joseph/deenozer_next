import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styles from "./FaTabs.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';

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

  const onSubmit = (formData) => { 
    if(formData.attachFile) formData.attachFile=formData.attachFile[0];
    console.log(formData.attachFile)
    axios
      .post("http://localhost:3001/fa", formData, 
      // {
      //   headers: {
      //   "Content-Type": "multipart/form-data",
      // }
      // }
      )
      .then((response) => {
        console.log(response.data)
        toast.success(`Data ${response.statusText} Successfully`, toastConfig);
      })
      .catch((error) => {
        toast.error(error.response.data.message, toastConfig);
      });
      
    reset();
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
    <>
    <div>
      <ToastContainer />
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container1}>
          <p className="text-3xl font-bold italic pb-4">Football Associations</p>
          <ul className={styles.flexOuter}>
            <li>
              <label htmlFor="fa-name">FA Name</label>
              <input
              className="text-black"
                type="text"
                id="fa-name"
                {...register("fa_name")}
                placeholder="Enter FA name"
              ></input>
            </li>
            <li>
              <label htmlFor="nation">Nation</label>
              <input
              className="text-black"
                type="text"
                id="nation"
                placeholder="Enter Nation"
                {...register("nationality")}
              ></input>
            </li>
            <li>
              <label htmlFor="conf">Confederation</label>
              <select
              className="text-black"
                id="conf"
                placeholder="Select FA Confederation"
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
              <label htmlFor="dof">Date of foundation</label>
              <input
              className="text-black"
                type="date"
                id="dof"
                placeholder="Enter Date of foundation here"
                {...register("dof")}
              ></input>
            </li>
            <li>
              <label htmlFor="about">About</label>
              <textarea
              className="text-black"
                rows="6"
                id="about"
                placeholder="Enter about FA "
                {...register("about")}
              ></textarea>
            </li>

            <li>
              <label htmlFor="ranking">FIFA Ranking</label>
              <input
              className="text-black"
                type="number"
                id="ranking"
                placeholder="Enter FIFA Ranking"
                {...register("ranking")}
              ></input>
            </li>
            <li>
              <label htmlFor="logo">FA Logo</label>

              <input
              className="text-black"
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
      </form></>
  );
};

export default FaTabs;
