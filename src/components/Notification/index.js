import { NotificationContainer, Title, Text } from "./styled";

const Notification = ({ title, message, status }) => {
  const styledClasses = `notification ${status}`;

  return (
    <NotificationContainer className={styledClasses}>
      <Title>{title}</Title>
      <Text>{message}</Text>
    </NotificationContainer>
  );
};

export default Notification;
