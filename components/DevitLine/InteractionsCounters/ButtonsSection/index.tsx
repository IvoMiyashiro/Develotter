import { useContext, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { favDevit, unFavDevit } from 'actions/devit';
import { HoverableButton } from 'components/Buttons/HoverableButton';

import CommentIcon from 'components/Icons/Comment';
import FavIcon from 'components/Icons/Fav';
import RedevitIcon from 'components/Icons/Redevit';
import FavFill from 'components/Icons/FavFill';
import { ButtonComment, ButtonFav, ButtonRevit } from 'components/Devit/DevitCard/MainSection/FooterSection/styles';
import { theme } from 'styles/theme';
import { Div, Ul, Li } from './styles';

export const ButtonsSection = ({
  id,
  isDevitFaved,
  handleDevitFav,
  handleFavsCounter,
  handleQuoteRevitCounter,
  handleRevtisCounter,
}: any) => {

  const {userState, devitDispatch} = useContext(AppContext);
  const [hoverComments, setHoverComments] = useState(false);
  const [hoverRevits, setHoverRevits] = useState(false);
  const [hoverFavs, setHoverFavs] = useState(false);

  const handleFavDevit = async() => {
    
    if (isDevitFaved) {
      unFavDevit(id, userState.id, devitDispatch);
      handleDevitFav(false);
      return handleFavsCounter((prev: number) => (prev - 1));
    }

    favDevit(id, devitDispatch);
    handleDevitFav(true);
    handleFavsCounter((prev: number) => (prev + 1));
  };

  const iconCommentsColor = hoverComments ? theme.comments : theme.darker_white;
  const iconRevittedColor = hoverRevits ? theme.revits : theme.darker_white;

  return (
    <>
      <Div>
        <Ul>
          <Li
            onMouseOver={() => setHoverComments(true)}
            onMouseLeave={() => setHoverComments(false)}
          >
            <ButtonComment color={theme.darker_white}>
              <CommentIcon 
                width="22px"
                height="22px"
                color={iconCommentsColor}
              />
            </ButtonComment>
          </Li>
          <Li
            onMouseOver={() => setHoverRevits(true)}
            onMouseLeave={() => setHoverRevits(false)}
          >
            <ButtonRevit color={theme.darker_white}>
              <RedevitIcon 
                width="22px"
                height="22px"
                color={iconRevittedColor}
              />
            </ButtonRevit>
          </Li>
          <Li
            onClick={handleFavDevit}
            onMouseOver={() => setHoverFavs(true)}
            onMouseLeave={() => setHoverFavs(false)}
          >
            {
              !isDevitFaved
                ? (
                  <ButtonFav color={theme.fav}>
                    <FavIcon 
                      width="22px"
                      height="22px"
                      color={hoverFavs ? theme.fav : theme.darker_white}
                    />
                  </ButtonFav>
                )
                : (
                  <HoverableButton
                    icon={FavFill}
                    width="22px"
                    height="22px"
                    color={theme.fav}
                  />
                )
            } 
          </Li>
        </Ul>
      </Div>
    </>
  );
};