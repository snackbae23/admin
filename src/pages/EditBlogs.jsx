import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaImage } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import axios from "axios";
import Loader from "../components/Loader";
import {useParams} from 'react-router-dom';
const EditBlogs = () => {
    const { id } = useParams();
    const [pic, setPic] = useState();
    const [blogid,setblogid] = useState();
    const [formData, setFormData] = useState({
        header: "",
        image: "",
        body: "",
        link: "",
    });
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for a smooth scrolling
        });
    };
    useEffect(() => {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getBlogById/${id}`,
          headers: {},
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setblogid(response.data.data._id);
                // setData(response.data.data);
                formData.header = response.data.data.header;
                formData.body = response.data.data.body;
                formData.image = response.data.data.image;
                setPic(response?.data?.data?.image);
                console.log(response.data.data.image);
                // console.log(pic);
                formData.link = response.data.data.link;
                // console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });
        scrollToTop();
        

    },[]);

    

  const [loading, setLoading] = useState(false);
  const [count, setcount] = useState(0);
 
const shiftnext = () => {
  console.log(count);
  if (count == 0) image1();
  if (count == 1) body1();
  if (count == 2) link1();
  if (count == 3) header1();
  // setcount(count + 1);
  // if (count == 3) setcount(0);
};

const header1 = () => {
  setHead(true);
  setImage(false);
  setBody(false);
  setLink(false);
  setcount(0);
};
const image1 = () => {
  setHead(false);
  setImage(true);
  setBody(false);
  setLink(false);
  setcount(1);
};
const body1 = () => {
  setHead(false);
  setImage(false);
  setBody(true);
  setLink(false);
  setcount(2);
};
const link1 = () => {
  setHead(false);
  setImage(false);
  setBody(false);
  setLink(true);
  setcount(3);
};

  const [head, setHead] = useState(true);
  const [image, setImage] = useState(false);
  const [body, setBody] = useState(false);
  const [link, setLink] = useState(false);
  const [Data,setData] = useState();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleImageChange = async (pics) => {
    // setLoading(true);
    console.log(pics);
    const formData = new FormData();
    formData.append("file", pics);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://seashell-app-lgwmg.ondigitalocean.app/api/fileUpload",
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data.url);
        // formData.image = response.data.data.url;
        setPic(response.data.data.url);
        // formData.image = response?.data?.data?.url;
        // console.log(formData.image);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form data submitted:", formData);
    formData.image = pic;
    console.log(pic);
    // setData({...formData,pic});
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://seashell-app-lgwmg.ondigitalocean.app/api/editBlog/${blogid}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : formData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
     
  };

  return (
    <div className="w-full min-h-[100vh] h-fit bg-[rgba(246,248,255,1)] relative ">
      <Navbar />
      {loading ? (
        <div className="w-full h-[60vh] z-[1000] flex flex-col items-center">
          <p className="text-[2.4rem] font-bold mt-[90px]">Image uploading...</p>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="w-full h-fit">
            <div className="w-full flex flex-col items-center">
              <p className="font-bold  text-[2rem] mt-[100px]">Edit Blog</p>
              <div className="flex flex-col mt-9 p-5  w-[80%] h-fit gap-4 bg-white mb-9 ">
                {/* latest Blogs */}
                <div className="w-full flex flex-col gap-3   ml-7 mt-2 mb-36 ">
                  {formData.header && (
                    <p
                      className="font-bold
                "
                    >
                      Latest blogs{" "}
                    </p>
                  )}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg ">
                      <p className="font-bold text-black text-[1.1rem]">H</p>
                      <p className="font-semibold text-[#999999]">Header</p>
                    </div>
                    {formData.header && (
                      <p className="text-black font-bold text-[2rem]">
                        {formData?.header}
                      </p>
                    )}
                  </div>
                  {
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5">
                        <p className="font-bold text-black text-[1.1rem]">B</p>
                        <p className="font-semibold text-[#999999]">Body</p>
                      </div>
                      {formData.body && (
                        <p className="w-[70%]">{formData?.body}</p>
                      )}
                    </div>
                  }
                  {
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5">
                        <p className="font-bold text-black text-[1.1rem]">I</p>
                        <p className="font-semibold text-[#999999]">Image</p>
                      </div>
                      {pic && (
                        <img
                          className="w-[160px] h-[100px]"
                          src={pic}
                          alt="image"
                        />
                      )}
                    </div>
                  }
                  {
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5">
                        <p className="font-bold text-black text-[1.1rem]">L</p>
                        <p className="font-semibold text-[#999999]">Link</p>
                      </div>
                      {formData.link && (
                        <p className="w-[70%]">{formData?.link}</p>
                      )}
                    </div>
                  }
                </div>
               
              </div>
            </div>
          </div>
          <div className="bg-white w-[80%] h-fit fixed bottom-0 left-[50%] translate-x-[-50%] py-2 px-4 ">
            <div className="py-[.5rem] w-fit flex justify-between px-4 border-2 ml-4 ">
              <button
                onClick={header1}
                className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${
                  head ? "bg-[#EEEEEE]" : "bg-none"
                }`}
              >
                H
              </button>
              <button
                onClick={image1}
                className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${
                  image ? "bg-[#EEEEEE]" : "bg-none"
                }`}
              >
                <FaImage />
              </button>
              <button
                onClick={body1}
                className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${
                  body ? "bg-[#EEEEEE]" : "bg-none"
                }`}
              >
                B
              </button>
              <button
                onClick={link1}
                className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${
                  link ? "bg-[#EEEEEE]" : "bg-none"
                }`}
              >
                <FaLink />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full h-fit flex justify-around p-[.5rem] shadow-lg"
            >
              {/* header */}
              {head && (
                <textarea
                  className="w-[90%] bg-[#EEEEEE] h-[90px] py-[.5rem] px-[1rem] rounded-md"
                  placeholder="write head...."
                  id="header"
                  name="header"
                  value={formData.header}
                  onChange={handleChange}
                ></textarea>
              )}
              {/* image */}
              {image && (
                <input
                  className="w-[90%] bg-[#EEEEEE] h-[90px] py-[.5rem] px-[1rem] rounded-md"
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    // e.target.files[0] && setFileName(e.target.files[0].name);
                    if (e.target.files)
                      // setImage(URL.createObjectURL(e.target.files[0]));
                      handleImageChange(e.target.files[0]);
                  }}
                  required
                />
              )}

              {/* body */}
              {body && (
                <textarea
                  className="w-[90%] bg-[#EEEEEE] h-[90px]  py-[.5rem] px-[1rem] rounded-md"
                  placeholder="write body...."
                  id="body"
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                ></textarea>
              )}

              {/* Link */}
              {link && (
                <input
                  className="w-[90%] bg-[#EEEEEE] h-[90px]  py-[.5rem] px-[1rem] rounded-md"
                  placeholder="write link...."
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                ></input>
              )}
              <div className=" flex flex-col gap-[.5rem]">
                <button
                  onClick={shiftnext}
                  className="px-[1rem] py-[.5rem] bg-[#EEEEEE] rounded-md"
                >
                  Next
                </button>
                <button
                  className="px-[1rem] py-[.5rem] bg-[#111111] rounded-md text-[#FFFFFF]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBlogs;
