
import "./Cards.module.css";
import Image from 'next/image'
import Link from "next/link";

const Cards = ({ imageUrl, title, body }) => {
  return (
    <div className="card-container">
      <div className="image-container">
      <Image
      src={imageUrl}
      alt=""
      // width={500}
      // height={500}
    />
        
      </div>
      <div className="card-content"></div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button>
          <Link href="/" className="a">View More</Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
