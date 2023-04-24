import React,{ useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddModale({ addmovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newmovie, setnewmovie] = useState({
    name: "",
    image: "",
    year: "",
    rating: 0,
  });

  return (
    <div>
      <div
        onClick={handleShow}
        style={{
          width: "18rem",
          height: "35rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="ff"
      >
        <button>Add Movie</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="name"
            onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}
          />
          
          <input
            placeholder="image"
            onChange={(e) =>
              setnewmovie({ ...newmovie, image: e.target.value })
            }
          />
          <input
            placeholder="description"
            onChange={(e) =>
              setnewmovie({ ...newmovie, description: e.target.value })
            }
          />
          <input
            placeholder="rating"
            onChange={(e) =>
              setnewmovie({ ...newmovie, rating: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              color: "white",
              backgroundColor: "black",
              border: "nane",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addmovie(newmovie);
              handleClose();
            }}
            style={{
              color: "white",
              backgroundColor: "red",
              border: "nane",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModale;
