import { firebaseDatabase } from "./firebase";

class ContactRepository {
  saveContact(name, info) {
    firebaseDatabase.ref(`${name}/contact/${info.id}`).set(info);
  }
}

export default ContactRepository;
