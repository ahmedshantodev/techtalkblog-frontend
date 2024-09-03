import React from "react";
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
import articleImage from "../../public/images/article-image-two.png";
import eyesImage from "../../public/images/eyes-image.png";
import articleImageOne from "/public/images/article-image-one.png";
import articleImageTwo from "/public/images/article-image-two.png";
import articleImageThree from "/public/images/article-image-three.png";
import articleImageFour from "/public/images/article-image-four.png";
import articleImageFive from "/public/images/article-image-five.png";
import articleImageSix from "/public/images/article-image-six.png";

const Blog = () => {
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
    <section className="pt-[160px] pb-[120px] bg-white">
      <Box>
        <Box className={"container mx-auto"}>
          <Box className={`w-[60%] mx-auto`}>
            <Typography
              variant="h2"
              className={`font-poppins font-bold text-[54px] text-black text-center mb-8`}
            >
              A few words about this blog platform, Ghost, and how this site was
              made
            </Typography>

            <Typography
              variant="h2"
              className={`w-[592px] mx-auto font-poppins font-normal text-xl text-black text-center pb-12`}
            >
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </Typography>
          </Box>
        </Box>

        <Image
          src={heroSectionImage}
          alt={"random-image"}
          className={`w-full mb-10`}
        />
      </Box>

      <Box className={`border-b-2 border-black relative`}>
        <Image
          src={eyesImage}
          alt={"eye image"}
          className={`w-[100px] absolute left-2/4 -translate-x-2/4 bottom-0 translate-y-2/4`}
        />

        <Box className={"w-[900px] mx-auto pt-8"}>
          {/* Creator information */}
          <Box className={"w-[700px] mx-auto"}>
            <Box
              className={
                "flex items-center justify-between mb-12 pt-8 relative after:w-[700px] after:h-[3px] after:bg-black after:absolute after:left-2/4 after:-translate-x-2/4 after:top-0 after:rounded-[20px]"
              }
            >
              <Box className={"flex items-center gap-4"}>
                <Box>
                  <Image
                    src={creatorImage}
                    alt={"creator name"}
                    className={`w-[64px] aspect-square rounded-full`}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h3"
                    className="font-poppins font-bold text-lg"
                  >
                    Mika MAtikainen
                  </Typography>
                  <Typography
                    variant="p"
                    className="font-poppins font-normal text-base"
                  >
                    Apr 15, 2020 · 4 min read
                  </Typography>
                </Box>
              </Box>

              <Box className={`border-2 border-[#eaeaea] rounded-[4px]`}>
                <Button className={`py-3 px-6 border-r-2 border-[#eaeaea] group`}>
                  <FaFacebook className="text-xl transition-all duration-200 group-hover:scale-[1.20]" />
                </Button>
                <Button className={`py-3 px-6 group`}>
                  <FaTwitter className="text-xl transition-all duration-200 group-hover:scale-[1.20]" />
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.
          </Typography>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.
          </Typography>

          {/* Heading text */}
          <Typography variant="h3" className={`heading`}>
            Next on the pipeline
          </Typography>

          {/* Pargraph */}
          <Typography className={`paragraph`}>
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </Typography>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla.
          </Typography>

          {/* Image */}
          <Box className={`w-full mb-12`}>
            <Image
              src={articleImage}
              alt={`article-heading`}
              className={`w-full mb-3`}
            />

            <Typography
              className={`w-[530px] mx-auto text-center font-poppins font-medium text-xl`}
            >
              Image caption centered this way and I’ll make this a bit longer to
              indicate the amount of line-height.
            </Typography>
          </Box>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula.
          </Typography>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </Typography>

          {/* List */}
          <Box className={`w-[700px] mx-auto mb-12`}>
            <Typography
              className={`font-poppins font-normal text-black text-xl leading-[170%] mb-4`}
            >
              A list looks like this:
            </Typography>

            <List className={`list-disc ml-5`}>
              <ListItem
                className={` font-poppins font-normal text-black text-xl leading-[150%] mb-3`}
              >
                First item in the list
              </ListItem>

              <ListItem
                className={`font-poppins font-normal text-black text-xl leading-[150%] mb-3`}
              >
                Second item in the list lorem ipsum dolor sit amet nunc felis
                dolor lorem ipsum sit amet
              </ListItem>

              <ListItem
                className={`font-poppins font-normal text-black text-xl leading-[150%] mb-3`}
              >
                Third item in the list
              </ListItem>
            </List>
          </Box>

          {/* Paragraph */}
          <Typography className={`paragraph`}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.
          </Typography>

          {/* Thanks from creator */}
          <Box className={`w-[700px] mx-auto mb-[100px]`}>
            <Typography
              className={`font-poppins font-normal text-black text-xl mb-2`}
            >
              Thanks for reading,
            </Typography>

            <Typography
              className={`font-poppins font-normal text-black text-xl`}
            >
              Mika
            </Typography>
          </Box>

          {/* Tags */}
          <Box
            className={
              "w-[700px] mx-auto border-b border-dotted border-[#404040] pb-7"
            }
          >
            <Typography
              className={`font-poppins font-medium text-black text-xl mb-2`}
            >
              Tags: <span className="underline">product design</span>,{" "}
              <span className="underline">culture</span>
            </Typography>
          </Box>

          {/* Creator information */}
          <Box className={"w-[700px] mx-auto"}>
            <Box className={"mt-9 mb-[120px] flex items-center gap-4"}>
              <Box className={`w-[10%]`}>
                <Image
                  src={creatorImage}
                  alt={"creator name"}
                  className={`w-[80px] aspect-square rounded-full`}
                />
              </Box>

              <Box className={`w-[90%]`}>
                <Typography
                  variant="h3"
                  className="font-poppins font-normal text-black text-xl leading-[160%]"
                >
                  <span className="font-bold">Mika MAtikainen</span> is a Design
                  Founder & Advisor, Berlin School of Creative Leadership
                  Executive MBA participant, Zippie advisor, Wolt co-founder,
                  and Nordic Rose stakeholder.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={`mt-20 w-[1000px] mx-auto`}>
        <Typography
          variant="h3"
          className="font-poppins font-bold text-black text-[44px] text-center mb-3"
        >
          What to read next
        </Typography>

        <Box className={`flex justify-center gap-x-7 gap-y-8 flex-wrap`}>
          {article.map((item, index) => (
            <ArticleCard
              image={item.image}
              heading={item.heading}
              className={`w-[31%] cursor-pointer`}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Blog;
