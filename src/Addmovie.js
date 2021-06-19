import React, { useState } from "react";

import Modal from "react-modal";

const AddMovie = ({ AddNewMovie }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newMovie, setNewMovie] = useState({
      name: "",
      posterURL : "",
    
      description: "",
      rating: "",
    });
  
    const handlChange = (e) => {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
  
    const handlSubmit = () => {
      AddNewMovie(newMovie);
      setNewMovie({ name: "", date: "", rating: "", description: "", image: "" });
    };
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  


function Example() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <div>
        <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              add movies
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>

      

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <label>Movie Name</label>
          <input type="text" name="name" onChange={handlChange} required />
          <label>Movie rate</label>
          <input type="text" name="name" onChange={handlChange} required />
          <label>Movie desription </label>
          <input type="text" name="name" onChange={handlChange} required />
          <label>Movie Image</label>
          <input type="url" name="image" onChange={handlChange} required />
          <textarea
            type="text" 
            name="description"
            onChange={handlChange}
            required
          />



            </Modal.Body>
           
         <button
          className="Modal-btn"
          onClick={() => {
            handlSubmit();
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
        


        </Modal>

       
   
        </div>
    );
  };
};
  
render(<Example />);


  export default Addmovie;

