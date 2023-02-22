import React , {useState} from 'react'
import { Button, TextField } from '@mui/material';
import {UpdateRecipe} from '../axios/recipe.axios'

const Popup = ({recipe}) => {
  
  const [title, setTitle] = useState(recipe.blog_title);
  const [description, setDescription] = useState(recipe.blog_description);
  const [image, setImage] = useState(recipe.blog_img);
  const [time, setTime] = useState(recipe.blog_time);
  
  const handleUpdate = ()=> {
    UpdateRecipe(recipe.blog_id,title, description, image, time)
  }

  
  
  return (
    <div className="bg-black h-[100%] w-[100%] flex fixed top-0 left-0  flex-col items-center justify-center z-10">
      <div className="bg-white opacity-100 flex flex-col items-center justify-center rounded-lg p-5">
        <div className=''>
        <h1 className="text-3xl py-5">Update recipe</h1>
        </div>
        <form
          action=""
          onSubmit={handleUpdate}
          className="flex flex-col items-start justify-center"
        >
          <TextField
            id="outlined-basic"
            defaultValue={title}
            label="Title"
            variant="filled"
            fullWidth="true"
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e)=> setTitle(e.target.value)}
            // required
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            defaultValue={description}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e)=> setDescription(e.target.value)}
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />

          <Button
            variant="contained"
            type="submit"
            hidden="true"
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffb3b3",
              // "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <TextField
            id="outlined-adornment-amount"
            label="Time to make:"
            defaultValue={time}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e)=> setTime(e.target.value) }
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={handleUpdate}
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Update recipe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup