import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/informationUser/userSlice";

const MySwal = withReactContent(Swal);

const initialValues = {
  name: "",
  family: "",
  email: "",
};

const saveinitialValues = {
  name: "",
  family: "",
  email: "",
};

function EditUserPage() {
  const [formValue, setFormValue] = useState(saveinitialValues);
  const userData = useSelector((state) => state.user.information);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    setFormValue(userData);
  }, [userData, formValue]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    dispatch(setUserData(values));

    MySwal.fire({
      icon: "success",
      title: <p>Edit user was Successfuly</p>,
    }).then(() => {
      setTimeout(() => {
        navigate("/");
      }, 100);
    });
  };

  const validationSchema = () =>
    Yup.object({
      name: Yup.string().required("Name is required"),
      family: Yup.string().required("Family is required"),
      email: Yup.string().email().required("Email is required"),
    });

  const formik = useFormik({
    initialValues: formValue || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-6 pt-[80px] bg-slate-700">
      <h1 className="text-citrine text-4xl font-normal">Edit User Info</h1>

      <form
        onSubmit={formik.handleSubmit}
        className="w-auto h-auto bgMovieData px-6 py-4 rounded-lg flex justify-center items-center flex-col gap-6"
      >
        <div className="flex flex-col gap-2 items-start justify-start">
          <input
            type="text"
            className={`w-[320px] h-[50px] px-4 py-4 text-[16px] text-rich-black-fogra-39 bg-white rounded outline-none ${
              formik.errors.name &&
              formik.touched.name &&
              "ring-2 ring-red-500 ring-offset-1"
            }`}
            placeholder="Enter your name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-[15px] text-red-500">{formik.errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 items-start justify-start">
          <input
            type="text"
            className={`w-[320px] h-[50px] px-4 py-4 text-[16px] text-rich-black-fogra-39 bg-white rounded ${
              formik.errors.family &&
              formik.touched.family &&
              "ring-2 ring-red-500 ring-offset-1"
            }`}
            placeholder="Enter your family"
            name="family"
            onChange={formik.handleChange}
            value={formik.values.family}
            onBlur={formik.handleBlur}
          />
          {formik.errors.family && formik.touched.family && (
            <p className="text-[15px] text-red-500">{formik.errors.family}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 items-start justify-start">
          <input
            type="text"
            className={`w-[320px] h-[50px] px-4 py-4 text-[16px] text-rich-black-fogra-39 bg-white rounded ${
              formik.errors.email &&
              formik.touched.email &&
              "ring-2 ring-red-500 ring-offset-1"
            }`}
            placeholder="Enter your email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-[15px] text-red-500">{formik.errors.email}</p>
          )}
        </div>

        <button
          disabled={!formik.isValid}
          className={`w-[150px] h-[48px] font-bold uppercase bg-rich-black-fogra-39 text-citrine  rounded transition-all duration-150 hover:bg-citrine hover:text-rich-black-fogra-39 border-2 border-transparent hover:border-rich-black-fogra-39 focus:bg-citrine focus:text-rich-black-fogra-39 focus:border-rich-black-fogra-39 ${
            !formik.isValid &&
            "opacity-50 hover:bg-rich-black-fogra-39 hover:text-citrine cursor-not-allowed"
          }`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default EditUserPage;
