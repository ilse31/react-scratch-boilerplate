import React from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
type Props = {};

const PictureList = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url: "https://img.antaranews.com/cache/730x487/2022/10/04/FeJbx1YXwAs15li.jpg.webp",
  },
  {
    id: 3,
    url: "https://thumb.viva.co.id/media/frontend/thumbs3/2022/10/04/633bcce2a5c38-anime-naruto-rayakan-ulang-tahun-ke-20_1265_711.jpg",
  },
];

const DragDrop = (props: Props) => {
  const [board, setBoard] = React.useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: any) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id: any) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <div>
      <div className='Pictures'>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className='mx-auto  border bg-slate-600' ref={drop}>
        {board.map((picture: any) => (
          <div className='flex flex-row justify-center'>
            {picture ? <Picture url={picture.url} id={picture.id} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDrop;
