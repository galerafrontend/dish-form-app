const getNotificationData = (status) => {
  switch (status) {
    case "pending":
      return {
        status: "pending",
        title: "Sending...",
        message: "Your dish is being sent now",
      };
    case "success":
      return {
        status: "success",
        title: "Success!",
        message: "Dish sent successfully!",
      };
    case "error":
      return {
        status: "error",
        title: "Error!",
        message: "An error occurred",
      };
    default:
      return null;
  }
};

export default getNotificationData;
