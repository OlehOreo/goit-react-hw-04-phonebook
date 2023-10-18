import { Heading, ContactSearch } from './Message.styled';

export const Message = ({ info, contact }) => {
  return (
    <>
      <Heading>
        <ContactSearch>{contact}</ContactSearch>
        {info}
      </Heading>
    </>
  );
};
