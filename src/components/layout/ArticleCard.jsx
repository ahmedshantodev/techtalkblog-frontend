import React from "react";
import Image from "../layout/Image";
import Box from "./Box";
import Typography from "./Typography";

const ArticleCard = ({ key, image, heading, className }) => {
  return (
    <Box key={key} className={`group ${className}`}>
      <Box className={`aspect-video overflow-hidden`}>
        <Image
          src={image}
          alt={heading}
          className={`w-full h-full object-cover overflow-hidden mb-5 transition-all duration-200 group-hover:scale-[1.1]`}
        />
      </Box>

      <Typography
        variant={"h3"}
        className={`font-poppins font-medium text-[22px] text-black line-clamp-3`}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default ArticleCard;
