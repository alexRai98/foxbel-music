import { useDispatch } from 'react-redux';
import { setSound, showPlayer } from '../player/playerSlice';

const dispach = useDispatch();

export const  playSound = (titleSound,artistName, albumName,albumImage,soundUrl) => {
  dispach(showPlayer());
  dispach(
    setSound({titleSound,artistName, albumName,albumImage,soundUrl})
  );
};
