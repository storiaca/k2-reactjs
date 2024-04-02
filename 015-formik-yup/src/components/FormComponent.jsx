import { useFormik } from "formik";
import * as Yup from "yup";
import { FileParser } from "../utils/FileParser";

function FormComponent() {
  const formik = useFormik({
    // 1. initialValues
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      image: "",
      birthDate: "",
    },
    // 2. validacija
    validationSchema: Yup.object({
      firstName: Yup.string().required("Field is required!"),
      lastName: Yup.string().required("Field is required!"),
      email: Yup.string()
        .email("Enter valid email")
        .required("Field is required!"),
      password: Yup.string().min(4).required("Field is required!"),
      gender: Yup.string().required("Field is required!"),
      birthDate: Yup.string().required("Field is required!"),
      image: Yup.mixed()
        .required("Image is required under 2MB")
        .test("fileSize", "Wrong file size", (value) => value.size < 2 * MB)
        .test("fileType", "Wrong file type", (value) =>
          VALID_TYPE.includes(value.type)
        ),
    }),
    // 3. onSumbit
    onSubmit: (values) => {
      console.log(values);
      FileParser(values.image)
        .then((res) => {
          // posalji mi obejct sa image: string
          console.log({ ...values, image: res });

          // UserLogin.addUser({ ...values, image: res })
          //   .then((res) => {
          //     console.log(res);
          //     navigate("/");
          //   })
          //   .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  /* Validacija slike */
  // type
  const VALID_TYPE = ["image/png", "image/jpg", "image/jpeg"];

  // size
  const KB = 1024;
  const MB = KB * 1024;

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-slate-300 p-5 rounded-lg mt-5 flex flex-col gap-5 w-[500px]"
    >
      {/* firstName */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="firstName">
          First Name
          <span className="ml-3 text-[12px] text-red-500">
            {showError("firstName")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="text"
          placeholder="Insert First Name"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      {/* lastName */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="lastName">
          Last Name
          <span className="ml-3 text-[12px] text-red-500">
            {showError("lastName")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="text"
          placeholder="Insert Last Name"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>

      {/* email */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="email">
          Email
          <span className="ml-3 text-[12px] text-red-500">
            {showError("email")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="email"
          placeholder="Insert email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>

      {/* password */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="password">
          Password
          <span className="ml-3 text-[12px] text-red-500">
            {showError("password")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="password"
          placeholder="Insert password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      {/* gender */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="gender">
          Gender
          <span className="ml-3 text-[12px] text-red-500">
            {showError("gender")}
          </span>
        </label>
        <select
          className="outline-none px-4 py-2 rounded-lg"
          name="gender"
          id="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <option value="" defaultChecked>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* image */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="image">
          Image
          <span className="ml-3 text-[12px] text-red-500">
            {showError("image")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="file"
          id="image"
          name="image"
          onChange={(e) => {
            //console.log(e.target.files);
            return formik.setFieldValue(e.target.name, e.target.files[0]);
          }}
        />
      </div>

      {/* birthDate */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="birthDate">
          Birth Date
          <span className="ml-3 text-[12px] text-red-500">
            {showError("birthDate")}
          </span>
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="date"
          placeholder="Select birth date"
          id="birthDate"
          name="birthDate"
          value={formik.values.birthDate}
          onChange={formik.handleChange}
        />
      </div>

      <button
        className="bg-green-400 text-black px-4 py-2 rounded-lg mt-5"
        type="submit"
      >
        Register Me
      </button>
    </form>
  );
}

export default FormComponent;
