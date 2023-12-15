// "use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '.5px solid #000',
  boxShadow: .54,
  p: 4,
  '& button': { m: .5 }
};

const format = [
  '4-Koma', 'Adaptation', 'Anthology',
  'Award Winning', 'Doujinshi', 'Fan Colored',
  'Full Color', 'Long Strip', 'Official Colored',
  'Oneshot', 'Self-Published', 'Web Comic'
];

const genre = [
  "Action", "Adventure", "Boys' Love",
  "Comedy", "Crime", "Drama",
  "Fantasy", "Girls Love", "Historical",
  "Horror", "Isekai", "Magical Girls",
  "Mecha", "Medical", "Mystery",
  "Philosophical", "Psychological", "Romance",
  "Sci-Fi", "Slice of Life",
  "Sports", "Superhero", "Thriller",
  "Tragedy", "Wuxia"
];

const theme = [
  "Aliens", "Animals", "Cooking",
  "Crossdressing", "Delinquents", "Demons",
  "Genderswap", "Ghosts", "Gyaru",
  "Harem", "Incest", "Loli",
  "Mafia", "Magic", "Martial Arts",
  "Military", "Monster Girls", "Monsters",
  "Music", "Ninja", "Office Workers", "Police",
  "Post-Apocalyptic", "Reincarnation",
  "Reverse Harem", "Samurai", "School Life",
  "Shota", "Supernatural", "Survival",
  "Time Travel", "Traditional Games",
  "Vampires", "Video Games", "Villainess",
  "Virtual Reality", "Zombies"
];


type Params = {
  params: {
    tagName: string;
  };
};


export default function TagWindow() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleClick = (tagName: any) => (event: any) =>{
  //   <FilterTag tagName={tagName}></FilterTag>
  // }

  const router = useRouter();

  const filter = async (e: { currentTarget: { value: any; }; }) => {
    router.push(`/filter/${e.currentTarget.value}`)
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Box sx={style}>
        {/* tags */}
        <Typography color={'black'} id="modal-modal-title" variant="h4" sx={{ mt: 1, mb: 3 }}>
          TAGS
        </Typography>

        <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left' sx={{ fontWeight: "bold" }}>Format</Divider>
        </Typography>

        <>
          {
            format.map((element) => {
              return <Button key={element} value={element} variant="outlined" size="small" sx={{ fontWeight: "bold", color: "#a084ff", borderBlockColor: "#a084ff" }} onClick={filter}>{element}</Button>
            })
          }
        </>

        <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left' sx={{ fontWeight: "bold" }}>Genre</Divider>
        </Typography>

        <>
          {
            genre.map((element) => {
              return <Button key={element} value={element} variant="outlined" size="small" sx={{ fontWeight: "bold", color: "#a084ff", borderBlockColor: "#a084ff" }} onClick={filter}>{element}</Button>
            })
          }
        </>

        <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left' sx={{ fontWeight: "bold" }}>Theme</Divider>
        </Typography>

        <>
          {
            theme.map((element) => {
              return <Button key={element} value={element} variant="outlined" size="small" sx={{ fontWeight: "bold", color: "#a084ff", borderBlockColor: "#a084ff" }} onClick={filter}>{element}</Button>
            })
          }
        </>


      </Box >
      {/* </Modal> */}
    </div >
  );
}