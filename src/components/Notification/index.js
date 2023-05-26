import { NotificationContainer, Title, Text } from "./styled";

const Notification = ({ title, message, status }) => {
  const styledClasses =  `${status}`;

  return (
    <NotificationContainer className={styledClasses}>
      <Title>{title}</Title>
      <Text>{message}</Text>
    </NotificationContainer>
  );
};

export default Notification;
