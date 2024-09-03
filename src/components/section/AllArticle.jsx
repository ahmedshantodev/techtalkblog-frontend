import React from "react";
import Typography from "../layout/Typography";
import Box from "../layout/Box";
import ArticleCard from "../layout/ArticleCard";
import articleImageOne from "/public/images/article-image-one.png";
import articleImageTwo from "/public/images/article-image-two.png";
import articleImageThree from "/public/images/article-image-three.png";
import articleImageFour from "/public/images/article-image-four.png";
import articleImageFive from "/public/images/article-image-five.png";
import articleImageSix from "/public/images/article-image-six.png";

const AllArticle = () => {
  let article = [
    {
      image: articleImageOne,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageTwo,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageThree,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageFour,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageFive,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageSix,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageOne,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageTwo,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageThree,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageFour,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageFive,
      heading: "Here are some things you should know regarding how we work",
    },
    {
      image: articleImageSix,
      heading: "Here are some things you should know regarding how we work",
    },
  ];

  return (
    <section className="container mx-auto bg-white pt-14 pb-[100px]">
      <Typography
        variant="h2"
        className="font-poppins font-bold text-[44px] text-black mb-7 text-center"
      >
        All Articles
      </Typography>

      <Box className={`w-[700px] mx-auto flex justify-center gap-y-10 gap-x-7 flex-wrap`}>
        {article.map((item, index) => (
          <ArticleCard
            image={item.image}
            heading={item.heading}
            className={`w-[48%] cursor-pointer`}
          />
        ))}
      </Box>
    </section>
  );
};

export default AllArticle;
