# Dish-Form-app

## Demo

https://galerafrontend.github.io/dish-form-app/

## Project Setup

This project contains a form for adding a dish. It utilizes the Formik library for form management and validation.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies using npm:

```
npm inastall
```

## Configuration

1. Open the `DishForm.js` file located in the `src/components` directory.
2. Inside the `DishForm` component, you can customize the form fields according to your requirements. Currently, it supports fields such as dish name, preparation time, type of dish, number of slices, diameter, spiciness scale, and slices of bread.
3. You can modify the validation rules for the form fields by editing the `dishValidationSchema.js` file located in the same directory. Update the validation rules using the Yup validation library.
4. If needed, you can customize the form's submit logic inside the onSubmit function of the `formik` configuration object. This function is called when the form is submitted.

## Usage

1. Start the development server `npm start` or use Demo
2. Fill in the form fields and submit the form to add a new dish. Validation errors will be displayed if any of the fields are invalid.
3. Upon successful submission, the form will be reset, and a success notification will be shown.

## Additional Information

- The `useStatus` and `getNotificationData` custom hooks are used to handle the status and display notifications based on the form submission result. You can modify the notification messages and styles in the `Notification` component.
- The form makes use of custom `TextInput` and `SelectInput` components to render the input fields. You can customize these components or replace them with your own components as needed.
- The form submission sends a POST request to an API endpoint using the `postDish` function from the `apiUtil.js` file. You can update this function to communicate with your own API or backend.

## Technologies Used

- React,
- Formik,
- Yup,
- styled components,
- React hooks,
- custom hooks,
- styled normalize
