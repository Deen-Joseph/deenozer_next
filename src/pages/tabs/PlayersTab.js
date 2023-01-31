import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./PlayersTab.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image'

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const PlayersTab = () => {
  let clubs = [
    {
      name: "Manchester United",
      league: "English Premier League",
      country: "England",
    },
    {
      name: "Manchester City",
      league: "English Premier League",
      country: "England",
    },
    {
      name: "Newcastle United",
      league: "English Premier League",
      country: "England",
    },
    {
      name: "Arsenal",
      league: "English Premier League",
      country: "England",
    },
    {
      name: "Chelsea",
      league: "English Premier League",
      country: "England",
    },
  ];

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => { 
    if(formData.attachFile) formData.attachFile=formData.attachFile[0];
    console.log(formData.attachFile)
    axios
      .post("http://localhost:3001/players", formData, 
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
  const playerImage = register("attachFile");

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
        <p className="text-3xl font-bold italic pb-4">Players</p>
          <ul className={styles.flexOuter}>
            <li>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                {...register("first_name")}
                placeholder="Enter your first name here"
              ></input>
            </li>
            <li>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                {...register("last_name")}
                placeholder="Enter your last name here"
              ></input>
              {errors.exampleRequired && <span>This field is required</span>}
            </li>
            <li>
              <label htmlFor="nation">Nationality</label>
              <input
                type="text"
                id="nation"
                placeholder="Enter Nationality here"
                {...register("nationality")}
              ></input>
            </li>
            <li>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                placeholder="Select Gender"
                {...register("gender")}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </li>
            <li></li>
            <li>
              <label htmlFor="club">Club</label>
              <select id="club" placeholder="Select club" {...register("club")}>
                {clubs.map((item, index) => {
                  return (
                   <>
                   <option value="">Select club</option><option key={index} value={clubs.name}>
                      {item.name}
                    </option>
                    </>
                  );
                })}
              </select>
            </li>
            <li>
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                id="dob"
                placeholder="Enter Date of Birth here"
                {...register("dob")}
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
              <label htmlFor="position">Position</label>
              <select
                id="position"
                placeholder="Select Position"
                {...register("position")}
              >
                <option value="">Select Position</option>
                <option value="Forward">Forward</option>
                <option value="Striker">Striker</option>
                <option value="Secondary_Striker">Secondary Striker</option>
                <option value="Left_Wing">Left-Wing</option>
                <option value="Right_Wing">Right Wing</option>
                <option value="Left_Midfield<">Left-Midfield</option>
                <option value="Right_Midfield">Right-Midfield</option>
                <option value="Centre_Attacking_Midfield">
                  Centre Attacking-Midfield
                </option>
                <option value="Centre_Midfield">Centre Midfield</option>
                <option value="Defensive_Midfield">Defensive Midfield</option>
                <option value="Left_back">Left-back</option>
                <option value="Right_back">Right-back</option>
                <option value="Left_Wing_Back">Left Wing-Back</option>
                <option value="Right_Wing_Back">Right Wing-Back</option>
                <option value="Centre_Back">Centre Back</option>
                <option value="Goal_Keeper">Goal Keeper</option>
              </select>
            </li>
          
            <li>
              <label htmlFor="attachFile">Player Image</label>

              <input
                type="file"
                id="attachFile"
                accept=".png, .jpg, .jpeg"
                {...playerImage}
                onChange={changeHandler}
                placeholder="Upload Player Image"
              ></input>
            </li>
            <li>
              <label htmlFor="preview">Preview</label>
              {fileDataURL ? (
                <Image
                  alt=""
                  id="preview"
                  className={styles.prev}
                  src={fileDataURL}
                ></Image>
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
    </>
  );
};

export default PlayersTab;
