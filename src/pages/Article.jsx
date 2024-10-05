import React, { useEffect, useState } from "react";
import Image from "../components/layout/Image";
import heroSectionImage from "/public/images/hero-section-image.png";
import Box from "../components/layout/Box";
import Typography from "../components/layout/Typography";
import Button from "../components/layout/Button";
import List from "../components/layout/List";
import ListItem from "../components/layout/ListItem";
import ArticleCard from "../components/layout/ArticleCard";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import creatorImage from "../../public/images/blog-creator-image.png";
import eyesImage from "../../public/images/eyes-image.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [article, setArticle] = useState([]);

  let { slug } = useParams();

  useEffect(() => {
    async function blog() {
      let response = await axios.get(`http://localhost:8000/blog/${slug}`);
      setArticle(response.data);
    }
    blog()
  }, []);

  return (
    <section className="pt-[160px] pb-[120px] bg-white">
      <Box>
        <Box className={"container mx-auto"}>
          <Box className={`w-[60%] mx-auto`}>
            <Typography
              variant="h2"
              className={`font-poppins font-bold text-[54px] text-black text-center mb-8`}
            >
              {article[0]?.title}
            </Typography>

            {/* <Typography
              variant="h2"
              className={`w-[592px] mx-auto font-poppins font-normal text-xl text-black text-center pb-12`}
            >
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </Typography> */}
          </Box>
        </Box>

        <Image
          src={`http://localhost:8000${article[0]?.image}`}
          alt={"random-image"}
          className={`w-[1000px] mx-auto mb-10 object-cover`}
        />
      </Box>

      <Box className={`border-b-2 border-black relative w-[800px] mx-auto pb-10`}>
        <div dangerouslySetInnerHTML={{ __html: article[0]?.description }}></div>
      </Box>
      

      <Box className={`mt-20 w-[1000px] mx-auto`}>
        <Typography
          variant="h3"
          className="font-poppins font-bold text-black text-[44px] text-center mb-3"
        >
          What to read next
        </Typography>

        <Box className={`flex justify-center gap-x-7 gap-y-8 flex-wrap`}>
          {/* {article.map((item, index) => (
            <ArticleCard
              image={item.image}
              heading={item.heading}
              className={`w-[31%] cursor-pointer`}
            />
          ))} */}
        </Box>
      </Box>
    </section>
  );
};

export default Blog;
