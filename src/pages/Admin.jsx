import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scrolling
    });
  };

  const [bdata, setbdata] = useState([]);
  const [demo, setdemo] = useState();
  const demorequest = async(req,res)=>{
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://52.66.249.180:4000/api/becomepartner",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setdemo(response.data.partners);
        console.log(demo)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const getAllBlogs = async (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://52.66.249.180:4000/api/getBlogs",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setbdata(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllBlogs();
    demorequest();
  }, []);

  const deleteBlog = async (blogId) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://52.66.249.180:4000/api/deleteBlog/${blogId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        getAllBlogs();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data1 = [
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "₹23423.00",
      Discount: "₹234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "₹23423.00",
      Discount: "₹234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "₹23423.00",
      Discount: "₹234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "₹3423.00",
      Discount: "₹234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "₹23423.00",
      Discount: "₹234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "complete",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "Cancelled",
      Mode: "Upi",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Debit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
    {
      Customer: "Nitish",
      Id: "#Id238975",
      Date: "Apr 23,2021",
      Amount: "23423.00",
      Discount: "234",
      Status: "In Progress",
      Mode: "Credit Cart",
      Merchant: "Foodoos",
      Id1: "1234565",
    },
  ];

  // <demo Request array
  const data = [
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
    {
      BrandName: "Foodoos ",
      Email: "iamnitishsah@gmail.com",
      ContectNumber: "+91 9660066979",
      DateRequested: "06/04/2024",
    },
  ];

  // All Merchants data

  const data2 = [
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "new",
    },
    {
      "Merchant Name": "Reunion Cafe",
      ida: "#id234",
      "Authorised Mail": "iamnitishsah@gmail.com",
      "Created Day": "19/08/2024",
      Plans: "paid",
    },
  ];

  const [itemsPerPage, setpage] = useState(6);
  const pageupdate = (e) => {
    setpage(e.target.value);
  };
  useEffect(() => {
    if (itemsPerPage === undefined) {
      // Check if initial value
      pageupdate();
    }
  }, [itemsPerPage]);

  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [slicedData, setslicedData] = useState(data2.slice(0, itemsPerPage)); // Sliced data for current page

  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setslicedData(data2.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(data2.length / itemsPerPage);

  //   Payouts data

  //Latest Payout Request
  const ldata = [
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Payment: "₹3067",
      payapprove: "Approve",
    },
  ];

  const ldata1 = [
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      date: "19/08/2024",
      Payment: "₹3067",
    },
  ];

  {
    /* Paid Plan Merchant */
  }

  const pdata = [
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
    {
      "res name": "Foodos",
      resid: "12345622",
      Start: "19/08/2024",
      End: "19/08/2025",
    },
  ];

  // All Users

  const udata = [
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
    {
      Username: "Nitish Kumar",
      uid: "#ID342573",
      Mobile: "+91 9660066924",
      uGender: "Male",
      "Total Spend": "₹3199.00",
    },
  ];

  const Pagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentPageData() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return data.slice(startIndex, startIndex + itemsPerPage);
    }

    function goToPage(pageNumber) {
      setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
      const pageNumbers = [];
      let itemsToShow = 3; // Number of pages to show before and after the current page
      let start = Math.max(currentPage - itemsToShow, 1);
      let end = Math.min(currentPage + itemsToShow, maxPage);

      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) {
          pageNumbers.push("...");
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < maxPage) {
        if (end < maxPage - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(maxPage);
      }

      return pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="page-item dots">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(number)}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        )
      );
    };

    return (
      <div>
        {/* Render the current page's data */}
        {currentPageData().map((item, index) => (
          <div
            key={index}
            className=" flex justify-between items-center px-16 my-2 font-semibold"
          >
            {/* Render your data here */}
            <Link to="/userprofile" onClick={scrollToTop}>
              <div>
                <div>{item.Username}</div>
                <div> {item.uid}</div>
              </div>
            </Link>

            <div>{item.Mobile}</div>
            <div>{item.uGender}</div>
            <div>{item["Total Spend"]}</div>
          </div>
        ))}
        <div className="flex justify-evenly  mt-4">
          {/* Pagination controls */}
          {/* Dropdown for items per page */}
          <div className="items-per-page">
            <label htmlFor="items-per-page">Items per page:</label>
            <select
              className="border-2 mx-2 rounded-md"
              id="items-per-page"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex gap-5">
            <button
              className="page-item"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>
            <div className="flex gap-3">{renderPageNumbers()}</div>
            <button
              className="page-item"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === maxPage}
            >
              <MdNavigateNext />
            </button>
          </div>

          <div className="current-page">
            Page {currentPage} of {maxPage}
          </div>
        </div>
      </div>
    );
  };

  // Blogs

  // const bdata = [{
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // }, {
  //     "Blog heading": "Best Foodspots in Kolkata",
  //     "Create Date": "2021-11-03  22:00"
  // },]

  1;
  return (
    <div className="w-full h-fit bg-[rgba(246,248,255,1)]">
      <Navbar />
      {/* main pages */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold  text-[2rem] mt-[100px]">Admin Dashboard</h1>
        <div className="flex flex-col mt-9 px-1  w-[80%] h-[200px] gap-4">
          <div className="flex h-[45%] w-full gap-3 justify-evenly">
            <div className="bg-white  w-[20%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Total Merchant Count
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">150</p>
            </div>
            <div className="bg-white  w-[20%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Paid Merchant Count
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">110</p>
            </div>
            <div className="bg-white  w-[20%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Free Merchant
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">50</p>
            </div>
            <div className="bg-white  w-[20%] h-full flex flex-col rounded-lg">
              <div className="flex p-2  font-medium text-[.9rem] justify-between">
                <p className="">Demo Request</p>
                <p className="text-slate-400">Last 30 Days</p>
              </div>

              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">14</p>
            </div>
            <div className="bg-white  w-[20%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Total User Count
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">1500</p>
            </div>
          </div>
          <div className="flex h-[45%] w-full gap-3 justify-evenly">
            <div className="bg-white  w-[24%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Today transaction count
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">1500</p>
            </div>
            <div className="bg-white  w-[24%] h-full flex flex-col rounded-lg">
              <div className="flex p-2  font-medium text-[.9rem] justify-between">
                <p className="">Total Gateway fee </p>
                <p className="text-slate-400">Last 30 Days</p>
              </div>

              <p className="ml-2 mt-4 text-[1.3rem] font-bold ">₹234567</p>
            </div>
            <div className="bg-white  w-[24%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Today transaction Volume{" "}
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">₹1456000.00</p>
            </div>
            <div className="bg-white  w-[24%] h-full flex flex-col rounded-lg">
              <p className="mt-2 ml-2  font-medium text-[.9rem]">
                Total Due Payout Balance
              </p>
              <p className="ml-2 mt-5 text-[1.3rem] font-bold ">₹150000.00</p>
            </div>
          </div>
        </div>

        {/* Latest transaction */}
        <div className="flex justify-between w-[80%] mt-9 font-bold text-[1.3rem]">
          <div>
            <p>Latest Transaction</p>
            <p className="font-medium text-[.9rem] text-slate-400">
              This is a list of latest transactions
            </p>
          </div>
          <Link to="/alltnx" onClick={scrollToTop}>
            <button>View all</button>
          </Link>
        </div>

        <div className="w-[80%] h-[415px] overflow-hidden p-6 bg-white mt-9 rounded-md  shadow-md ">
          <div className="text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-bold">
            <div className="w-[29%] mb-4">
              <div className="flex text-center items-center">
                Customer Name TRx ID{" "}
              </div>
            </div>
            <div className="grid grid-cols-6 w-[80%] justify-between">
              <div className="mr-">DATE & TIME</div>
              <div className="ml-4">AMOUNT</div>
              <div className="">DISCOUNT</div>
              <div className="ml-7">STATUS</div>
              <div className="ml-9">MODE</div>
              <div className="ml-9">Merchant</div>
            </div>
          </div>

          <div className="w-full h-fit ">
            {data1.map((item, index) => (
              <div key={index} className="w-full flex my-2">
                <div className="w-[25%] flex flex-col justify-center">
                  <p className="text-black font-bold text-[1.1rem]">
                    {" "}
                    {item.Customer}
                  </p>
                  <p className="text-[#718096] text-[.9rem] font-semibold">
                    {item.Id}
                  </p>
                </div>

                <div className="grid grid-cols-6 w-[80%]  ml-12 gap-  ">
                  <p className="text-[#6B7280] flex items-center ">
                    {item.Date}
                  </p>
                  <p className="text-[black] font-bold text-[1.1rem ] flex items-center">
                    {item.Amount}
                  </p>
                  <p className="text-[#004AAD] font-bold text-[1.1rem] text-center flex items-center  ">
                    {item.Discount}
                  </p>
                  <p
                    className={`rounded-3xl  w-full h-[70%]  text-center mt-2 flex items-center justify-center 
                                            ${
                                              item.Status === "complete"
                                                ? "bg-[#DEF7EC] text-green-700 "
                                                : item.Status === "In Progress"
                                                ? "bg-[#E1EFFE] text-[#7157f1]"
                                                : item.Status === "Cancelled"
                                                ? "bg-[#FBD5D5] text-red-800"
                                                : ""
                                            }`}
                  >
                    {item.Status}
                  </p>
                  <p
                    className={`rounded-3xl   text-center flex mt-2 h-[70%] items-center justify-center  ml-6
                                            ${
                                              item.Mode === "Upi"
                                                ? "bg-[#DEF7EC] text-green-700"
                                                : item.Mode === "Debit Cart"
                                                ? "bg-[#fbd9de] text-[#FD4A65]"
                                                : item.Mode === "Credit Cart"
                                                ? "bg-[#E1EFFE] text-[#7157f1]"
                                                : ""
                                            }`}
                  >
                    {item.Mode}
                  </p>
                  <Link
                    to="/merchant"
                    onClick={scrollToTop}
                    className=" flex flex-col items-center ml-7 "
                  >
                    <p className="text-black font-bold text-[1.1rem] ">
                      {item.Merchant}
                    </p>
                    <p className="text-[#718096] text-[.9rem] font-semibold">
                      {item.Id1}
                    </p>
                  </Link>
                </div>

                {/* Display other item properties */}
              </div>
            ))}
          </div>
        </div>

        {/* demo request  */}

        <div className="flex flex-col w-[80%] h-[500px]  mt-9 ">
          <p className="font-bold text-[1.3rem]">Demo Request</p>
          <div className="w-full px-20 bg-white mt-6   py-4 text-[1.1rem] flex justify-between font-semibold">
            <p className="">Brand Name</p>

            <p className="">Customer Number</p>
            <p className="mr-24">Email</p>
          </div>

          <div className="w-full h-[450px] bg-white p-4   rounded-xl overflow-y-scroll ">
            {demo && demo.map((reservation, index) => (
              <div
                className="w-full px-16 py-2 text-[1rem] flex justify-between items-center border-b-2"
                key={index}
              >
                <p className=" ">{reservation && reservation.brandName}</p>

                <p className="ml-16">{reservation && reservation.contactNumber}</p>
                <p className="">{reservation.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Merchant */}

        <div className="flex flex-col w-[80%] h-fit  mt-9 ">
          <div className="mb-6">
            <p className="font-bold text-[1.3rem]">All Merchants</p>
            <div className="flex gap-3 ">
              <p>Merchant Count: </p>
              <p className="text-[#004AAD]">{data2.length} Merchant</p>
            </div>
            <div className="relative flex items-center mt-4">
              <CiSearch className="absolute text-[1.3rem] font-semibold ml-2" />
              <input
                className="w-[40%] py-2 px-8 rounded-lg"
                type="text"
                placeholder="Search by Id,restaurant name"
              />
            </div>
          </div>
          <input type="text" />

          <div className="bg-white w-full h-fit p-4  mb-9 rounded-lg">
            <div className="flex justify-between text-[1.1rem] text-[#718096] px-14 border-b-2 pb-4">
              <p>Merchant Name</p>
              <p>Authrised Mail</p>
              <p className="ml-4">Created Day</p>
              <p>Plans</p>
            </div>
            <div className="w-full h-fit ">
              {slicedData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-[1.1rem] text-[#111827] px-14 border-b-2 pb-2 items-center"
                >
                  <Link
                    to="/merchant"
                    onClick={scrollToTop}
                    className=" flex flex-col justify-center"
                  >
                    <p className="text-black font-semibold text-[1.1rem]">
                      {" "}
                      {item["Merchant Name"]}
                    </p>
                    <p className="text-[#718096] text-[.9rem] font-semibold">
                      {item.ida}
                    </p>
                  </Link>

                  <p>{item["Authorised Mail"]}</p>
                  <p className="mr-4">{item["Created Day"]}</p>
                  <p
                    className={`rounded-md py-1   px-2  text-center mt-2 flex items-center justify-center 
                                            ${
                                              item.Plans === "paid"
                                                ? "bg-[#DEF7EC] text-[#0CAF60] "
                                                : item.Plans === "pai"
                                                ? "bg-[#E1EFFE] text-[#7157f1]"
                                                : item.Plans === "new"
                                                ? "bg-[#FBD5D5] text-red-800"
                                                : ""
                                            }`}
                  >
                    {item.Plans}
                  </p>
                  {/* <p>{item.Plans}</p> */}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-9 w-full">
              <div className="w-[50%]">
                Showing {slicedData.length} out of {data2.length} results.
              </div>
              <div>
                <label>Show result:</label>
                <select
                  className="ml-2"
                  value={itemsPerPage}
                  onChange={pageupdate}
                >
                  {/* <option value={6}>6</option> */}
                  <option value={6}>6</option>
                  <option value={10}>10</option>
                  <option value={12}>12</option>
                </select>
              </div>
              <div className="flex gap-5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <GrFormPrevious />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <MdNavigateNext />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payouts */}

        <div className="flex flex-col w-[80%] h-fit  m-7 ">
          <p className="font-bold text-[1.3rem] mb-4">Payouts</p>
          <div className="flex w-full h-[400px] gap-4">
            {/* left */}
            <div className="w-[50%] bg-white p-4 h-full rounded-xl overflow-y-scroll">
              <p className="font-bold text-[1.2rem] ml-4 mb-3 ">
                Latest Payout Request
              </p>
              <div className="w-full h-full  ">
                {ldata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[1.1rem] text-[#111827] px-14 font-semibold border-b-2 pb-2 items-center"
                  >
                    <div className=" flex flex-col justify-center">
                      <p className="text-black font-semibold text-[1.1rem]">
                        {" "}
                        {item["res name"]}
                      </p>
                      <p className="text-[#718096] text-[.9rem] font-semibold">
                        {item.resid}
                      </p>
                    </div>
                    <div className="flex gap-9">
                      <p>{item.Payment}</p>
                      <p className="text-[#004AAD]">{item.payapprove}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* right */}
            <div className="w-[50%] bg-white p-4 h-full rounded-xl overflow-y-scroll">
              <div className="flex justify-between">
                <p className="font-bold text-[1.2rem] ml-4 mb-3 ">
                  Latest Payouts{" "}
                </p>
                <div className="flex font-semibold gap-14">
                  <p>Date</p>
                  <p>Payout Amount</p>
                </div>
              </div>

              <div className="w-full h-full  ">
                {ldata1.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-[1.1rem] text-[#111827] px-14 font-semibold border-b-2 pb-2 items-center"
                  >
                    <div className=" flex flex-col justify-center">
                      <p className="text-black font-semibold text-[1.1rem]">
                        {" "}
                        {item["res name"]}
                      </p>
                      <p className="text-[#718096] text-[.9rem] font-semibold">
                        {item.resid}
                      </p>
                    </div>
                    <div className="flex gap-9">
                      <p>{item.date}</p>
                      <p className="text-[#004AAD]">{item.Payment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Paid Plan Merchant */}

        <div className="flex flex-col w-[80%] h-fit  mb-7 ">
          <p className="font-bold text-[1.3rem] mb-">Payouts</p>
          <p className="text-[#004AAD] underline mb-5">
            {pdata.length} Paid Merchant
          </p>
          <div className="relative flex items-center">
            <CiSearch className="absolute text-[1.3rem] font-semibold ml-2" />
            <input
              className="w-[40%] py-2 px-8 rounded-lg"
              type="text"
              placeholder="Search by Id,restaurant name"
            />
          </div>

          <div className="w-full h-[400px] bg-white p-6 mt-5 rounded-lg ">
            <div className="flex justify-between font-semibold px-9">
              <p className="text-[1.2rem] ">Merchants</p>
              <div className="flex w-[25%]  justify-between">
                <p className="">Start</p>
                <p className="mr-12">End</p>
              </div>
            </div>

            <div className="w-full h-[90%] overflow-y-scroll mt-2  ">
              {pdata.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-[1.1rem] text-[#111827] px-14 font-semibold border-b-2 pb-2 items-center"
                >
                  <div className=" flex flex-col justify-center">
                    <p className="text-black font-semibold text-[1.1rem]">
                      {" "}
                      {item["res name"]}
                    </p>
                    <p className="text-[#718096] text-[.9rem] font-semibold">
                      {item.resid}
                    </p>
                  </div>
                  <div className="flex w-[25%]  justify-between gap-9">
                    <p className="">{item.Start}</p>
                    <p className="mr-12">{item.End}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Users */}

        <div className="flex flex-col w-[80%] h-fit  mt-9 ">
          <div className="mb-6">
            <p className="font-bold text-[1.3rem]">All Users</p>
            <div className="flex gap-3">
              <p>User Count: </p>
              <p className="text-[#004AAD]">{udata.length} Merchant</p>
            </div>

            <div className="relative flex items-center mt-4">
              <CiSearch className="absolute text-[1.3rem] font-semibold ml-2" />
              <input
                className="w-[40%] py-2 px-8 rounded-lg"
                type="text"
                placeholder="Search by Id,restaurant name"
              />
            </div>
          </div>
          <input type="text" />

          <div className="bg-white w-full h-fit p-4  mb-9 rounded-lg">
            <div className="flex justify-between text-[1.1rem] text-[#718096] px-14 border-b-2 pb-4">
              <p>User Name & ID</p>
              <p>Mobile Number</p>
              <p className="">Gender</p>
              <p>Total Spend</p>
            </div>
            <div className="w-full h-fit ">
              <Pagination data={udata} />
              {/* {slicedData1.map((item,index) => (
                                <div key={index} className='flex justify-between text-[1.1rem] text-[#111827] px-14 border-b-2 pb-2 items-center'>
                                    <Link to='/userprofile' onClick={scrollToTop}>
                                    <div className=' flex flex-col justify-center'>
                                        <p className='text-black font-semibold text-[1.1rem]'> {item.Username}</p>
                                        <p className='text-[#718096] text-[.9rem] font-semibold'>{item.uid}</p>
                                    </div>
                                    </Link>
                                    

                                    <p>{item.Mobile}</p>
                                    <p className=''>{item.uGender}</p>
                                    <p className=''>{item['Total Spend']}</p>


                                </div>
                            ))} */}
            </div>
          </div>
        </div>

        {/* Blogs */}

        <div className="flex flex-col w-[80%] h-[450px]  mt-9 bg-white rounded-lg p-6 mb-7">
          <div className="flex justify-between border-b-2 p-3">
            <p className="font-bold text-[1.3rem]">Blogs</p>
            <Link to="/blogs" onClick={scrollToTop}>
              <button className="text-white bg-yellow-400 px-6 py-2 rounded-md">
                Add Blog
              </button>
            </Link>
          </div>

          <div className="w-full flex justify-between px-16 text-[#718096] font-semibold mt-5">
            <p className="w-[40%]">Blog heading</p>
            <p className="">Created Data</p>
            <div className="flex gap-16 px-">
              <p>Edit</p>
              <p className="ml-2">Delete</p>
            </div>
          </div>

          <div className="w-full h-[90%] overflow-y-scroll mt-2  ">
            {bdata &&
              bdata.map((item, index) => {
                const createdAtDate = new Date(item.createdAt);
                const formattedCreatedAt = createdAtDate
                  .toISOString()
                  .split("T")[0];
                // const lastFourCharacters = item._id.slice(-4);
                return (
                  <div
                    key={index}
                    className="w-full flex justify-between px-16 text-[#3A3A49]  mt-5"
                  >
                    <Link className="w-[40%]" to={`/editBlog/${item._id}`}>
                      <p onClick={() => openBlog(item._id)}>{item.header}</p>
                    </Link>
                    <p>{formattedCreatedAt}</p>
                    <div className="flex gap-12">
                      <Link to={`/editBlog/${item._id}`} onClick={scrollToTop}>
                        <img
                          onClick={() => openBlog(item._id)}
                          className="size-12"
                          src="\edit.png"
                          alt=""
                        />
                      </Link>

                      <div
                        className="cursor-pointer"
                        onClick={() => deleteBlog(item._id)}
                      >
                        <img
                          className="size-12"
                          src="/Group 1171277986.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
