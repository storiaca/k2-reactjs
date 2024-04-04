import { useFormik } from "formik";
import * as Yup from "yup";

import { FileParser } from "../utils/FileParser";

function FormComponent() {
  const KB = 1024;
  const MB = 1024 * KB;

  const VALID_TYPE = ["image/png", "image/jpg", "image/jpeg"];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      image: "",
      dateBirth: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Field is required"),
      lastName: Yup.string().required("Field is required"),
      email: Yup.string()
        .email("Enter valid e-mail")
        .required("Field is required"),
      password: Yup.string().min(4).required("Field is required"),
      gender: Yup.string().required("Field is required"),
      image: Yup.mixed()
        .required("Image is required under 2MB")
        .test("fileSize", "Wrong file size", (value) => value.size < 2 * MB)
        .test("fileType", "Wrong file type", (value) =>
          VALID_TYPE.includes(value.type)
        ),
      dateBirth: Yup.string().required("Field is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      FileParser(values.image)
        .then((res) => console.log({ ...values, image: res }))
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[500px] mx-auto flex flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="firstName">
          First Name*{" "}
          <span className="text-[12px] text-red-600">
            {showError("firstName")}
          </span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="text"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="lastName">
          Last Name*{" "}
          <span className="text-[12px] text-red-600">
            {showError("lastName")}
          </span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="text"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="email">
          Email*{" "}
          <span className="text-[12px] text-red-600">{showError("email")}</span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="password">
          Password*{" "}
          <span className="text-[12px] text-red-600">
            {showError("password")}
          </span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="gender">
          Gender*{" "}
          <span className="text-[12px] text-red-600">
            {showError("gender")}
          </span>
        </label>
        <select
          className="px-4 py-2 outline-none rounded-lg"
          name="gender"
          id="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="image">
          Image*{" "}
          <span className="text-[12px] text-red-600">{showError("image")}</span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            //console.log(e.target.files);
            return formik.setFieldValue(e.target.name, e.target.files[0]);
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-50" htmlFor="dateBirth">
          Date of Birth*{" "}
          <span className="text-[12px] text-red-600">
            {showError("dateBirth")}
          </span>
        </label>
        <input
          className="px-4 py-2 outline-none rounded-lg"
          type="date"
          id="dateBirth"
          name="dateBirth"
          value={formik.values.dateBirth}
          onChange={formik.handleChange}
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full py-2 bg-orange-500 text-gray-100 border-none rounded-lg"
      >
        Register
      </button>
    </form>
  );
}

export default FormComponent;
