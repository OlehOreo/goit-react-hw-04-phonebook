import { Wrapper, Phone, BtnDelete, ContactInfo } from './ContactsItem.styled';

export const ContactsItem = ({
  contact: { name, number, id },
  deleteContact,
}) => {
  return (
    <Wrapper>
      <ContactInfo>
        {name} : <Phone>{number}</Phone>
      </ContactInfo>
      <BtnDelete type="button" onClick={() => deleteContact(id, name)}>
        Delete
      </BtnDelete>
    </Wrapper>
  );
};
