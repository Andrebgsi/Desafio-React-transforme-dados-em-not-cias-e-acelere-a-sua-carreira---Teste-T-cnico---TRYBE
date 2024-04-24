import React, { useContext } from 'react';
import { FavoriteType } from '../../types';
import styles from './BtnFavorite.module.css';
import FavoriteYes from '../../assets/FavoriteYes.svg';
import FavoriteNo from '../../assets/FavoriteNo.svg';
import IBGEContext from '../../context/IBGEContext';

// export type FavoriteType = {
//   id: number;
//   introducao: string;
//   link: string;
//   titulo: string;
//   DataReroativaString: string;
//   ImgSrting: string;
// };

export default function BtnFavorite({ newsFavorite }: { newsFavorite: FavoriteType }) {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const { favorite, updateFavorite } = useContext(IBGEContext);

  React.useEffect(() => {
    const check = favorite.some((item: any) => item.id === newsFavorite.id)
    setIsFavorite(check);
  },[favorite])
  
  const handleClick = () => {
    updateFavorite(newsFavorite);
  };

  return (
    <button
      className={ styles.BtnFavorite }
      type="button" 
      onClick={ () => {handleClick();}}
      data-testid="favorite-btn"
    >
      <img
        className={ styles.BtnImage }
        src={ isFavorite ? FavoriteYes : FavoriteNo }
        alt="Favorite"
      />
    </button>
  );
}