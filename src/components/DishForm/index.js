import { useFormik } from "formik";
import { dishValidationSchema } from "./dishValidationSchema";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const DishForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      preparation_time: "",
      type: "",
      no_of_slices: "",
      diameter: "",
      spiciness_scale: "",
      slices_of_bread: "",
    },
    validationSchema: dishValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextInput
          label="Dish name*:"
          name="name"
          type="text"
          formik={formik}
        />
      </div>
      <div>
        <TextInput
          label="Preparation time:*"
          name="preparation_time"
          type="text"
          placeholder="HH:MM:SS"
          formik={formik}
        />
      </div>
      <div>
        <SelectInput
          label="Type of dish:*"
          name="type"
          options={[
            { value: "", text: "" },
            { value: "pizza", text: "Pizza" },
            { value: "soup", text: "Soup" },
            { value: "sandwich", text: "Sandwich" },
          ]}
          formik={formik}
        />
      </div>
      {formik.values.type === "pizza" && (
        <div>
          <TextInput
            label="Number of slices:*"
            name="no_of_slices"
            type="number"
            formik={formik}
          />

          <TextInput
            label="Diameter:*"
            name="diameter"
            type="number"
            step="0.01"
            formik={formik}
          />
        </div>
      )}
      {formik.values.type === "soup" && (
        <div>
          <TextInput
            label="Spiciness scale (1-10):*"
            name="spiciness_scale"
            type="number"
            formik={formik}
          />
        </div>
      )}
      {formik.values.type === "sandwich" && (
        <div>
          <TextInput
            label="Slices of bread:*"
            name="slices_of_bread"
            type="number"
            formik={formik}
          />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DishForm;
