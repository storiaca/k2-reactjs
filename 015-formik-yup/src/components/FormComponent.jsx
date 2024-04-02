import { useFormik } from "formik";
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
    // 3. onSumbit
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  /* Validacija slike */
  // type
  const VALID_TYPE = ["image/png", "image/jpg", "image/jpeg"];

  // size
  const KB = 1024;
  const MB = KB * 1024;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-slate-300 p-5 rounded-lg mt-5 flex flex-col gap-5 w-[500px]"
    >
      {/* firstName */}
      <div className="flex flex-col">
        <label className="text-[14px] text-gray-600" htmlFor="firstName">
          First Name
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="text"
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
        </label>
        <input
          className="outline-none px-4 py-2 rounded-lg"
          type="text"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
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
