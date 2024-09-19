import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [openModal, setOpenModal] = useState(true);
  const [blankInput, setBlankInput] = useState(false);

  const HandleSearch = ()=>{
    console.log(searchInput)
  }

  return (
    <>
      <Modal show={openModal} size="5xl" onClose={() => setOpenModal(false)} popup>   
        <Modal.Header />
        <Modal.Body>
          <div className="text-center flex ">
            <input type="search" name="search" id="searchInput" maxLength={25} onChange={(e)=>{setSearchInput(e.target.value)}} className="text-2xl w-full"/>
            
            <div className="flex justify-center gap-4">
              <Button className="bg-yellow-300 text-black justify-center items-center" onClick={HandleSearch}>
                Search
              </Button>
              <Button color="gray" onClick={() => setBlankInput(true)}>
                Reset
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Search