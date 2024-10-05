import React, { useEffect, useState } from "react";
import Typography from "../layout/Typography";
import Box from "../layout/Box";
import ArticleCard from "../layout/ArticleCard";
import axios from "axios";

const AllArticle = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    async function allblog() {
      let response = await axios.get("http://localhost:8000/allblog")
      setArticle(response.data);
    }
    allblog()
  } , [])

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
            image={`http://localhost:8000${item.image}`}
            heading={item.title}
            className={`w-[48%] cursor-pointer`}
          />
        ))}
      </Box>
    </section>
  );
};

export default AllArticle;
