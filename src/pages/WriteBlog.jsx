import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const WriteBlog = () => {
  const [image, setImage] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [postInformation, setPostInformation] = useState({
    title: "",
    tags: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(image);

  const handlePublish = async () => {
    console.log("hi");

    const response = await axios.post(
      "http://localhost:8000/createblog",
      {
        title: postInformation.title,
        description: postInformation.description,
        tags: postInformation.tags,
        image: image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "p?L2ge>:0Gth",
        },
      }
    );
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);

    let rawData = convertToRaw(editorState.getCurrentContent());
    let htmlData = draftToHtml(rawData);

    setPostInformation((prev) => ({
      ...prev,
      description: htmlData,
    }));
  };

  return (
    <section class="bg-gray-50 pt-[120px] px-6 pb-8 mx-auto">
      <div class="w-[850px] mx-auto bg-white rounded-lg shadow p-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Write Blog
        </h1>
        <div class="space-y-4 md:space-y-6">
          <div>
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title :
            </label>

            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 focus:outline-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="enter your blog title"
              required="true"
            />
          </div>

          <div>
            <label
              for="tags"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Blog Tags :
            </label>

            <input
              type="text"
              name="tags"
              id="tags"
              onChange={handleChange}
              placeholder="Blog tegs"
              class="bg-gray-50 border border-gray-300 focus:outline-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required="true"
            />
          </div>

          <div>
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Blog thumbnail :
            </label>

            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              class="bg-gray-50 border border-gray-300 focus:outline-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required="true"
            />
          </div>

          <div>
            <label
              for="blog-tags"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description :
            </label>

            <Editor
              toolbarClassName="toolbarClassName border border-[#d1d5db] rounded-[6px]"
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor border border-[#d1d5db] rounded-[6px] min-h-[300px]"
              onEditorStateChange={handleEditorStateChange}
            />
          </div>

          <button
            onClick={handlePublish}
            class="w-full bg-[#2563eb] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Publish
          </button>
        </div>
      </div>
    </section>
  );
};

export default WriteBlog;
