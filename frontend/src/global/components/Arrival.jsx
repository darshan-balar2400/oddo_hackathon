// eslint-disable-next-line no-undef
import Heading from "./Heading";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/img/JPG/index";

const Arrival = () => {
  const NextArrow = (props) => (
    <div {...props} className="slick-arrow next-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const PrevArrow = (props) => (
    <div {...props} className="slick-arrow prev-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
  const products = [
    {
      id: 1,
      img: images.img1,
      name: "BEDROOM",
      price: "55.00",
    },
    {
      id: 2,
      img: images.img2,
      name: "OFFICE",
      price: "55.00",
    },
    {
      id: 3,
      img: images.img6,
      name: "LIGHTING",
      price: "55.00",
    },
    {
      id: 4,
      img: images.img5,
      name: "LIGHTING",
      price: "55.00",
    },
    {
      id: 5,
      img: images.img7,
      name: "LIGHTING",
      price: "55.00",
    },
    {
      id: 6,
      img: images.img8,
      name: "LIGHTING",
      price: "55.00",
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 overflow-hidden text-center relative bg-gray-50 z-0">
      <Heading
        title="New Arrival"
        description="SHOP THE NEW SELECTION OF NEW ARRIVALS AT OUR STORE. FILL OUT YOUR
          WISHLIST ITEM."
      />
      <Slider {...settings}>
        {products.slice(0, 6).map((item, index) => (
          <div key={index} className="mx-auto max-w-xs relative">
            <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
              <img
                src={item.img}
                title={item.category}
                alt={item.category}
                className="mx-auto"
              />
              <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap flex-col  p-2 mr-1 mt-1">
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon="shopping-cart"
                    // onClick={() => handleAddToCart(item)}
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon="heart"
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon="balance-scale"
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon="eye"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-semibold uppercase">{item.name}</div>
              <div>${item.price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Arrival;
