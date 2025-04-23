import { useState } from "react";
import { IPosts } from "../../types/post.ts";
import {
  ButtonWrapper,
  Modal,
  ModalContainer,
  ModalOverlay,
} from "./AddPostForm.styles.ts";

interface IFormProps {
  handleClose: () => void;
  addPost: (value: IPosts) => void;
  postIdx: number;
}

const AddPostForm = ({ addPost, handleClose, postIdx }: IFormProps) => {
  const [form, setForm] = useState<IPosts>({
    title: "",
    userId: 1,
    body: "",
    id: postIdx + 1,
  });
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowErrors(true);
    const isValid = form.title.length && form.body.length;
    if (!isValid) return;
    addPost(form);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalContainer>
          <label htmlFor="title">Title of post:</label>
          <input
            type="text"
            value={form.title}
            name="title"
            id="title"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {showErrors && !form.title.length && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              Field is required
            </span>
          )}
        </ModalContainer>
        <ModalContainer>
          <label htmlFor="body">Text:</label>
          <textarea
            name="body"
            id="body"
            value={form.body}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {showErrors && !form.body.length && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              Field is required
            </span>
          )}
        </ModalContainer>
        <ButtonWrapper>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={(e) => handleSubmit(e)}>Add</button>
        </ButtonWrapper>
      </Modal>
    </ModalOverlay>
  );
};

export default AddPostForm;
