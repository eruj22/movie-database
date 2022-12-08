import { SavedIcon } from "../icons/SavedIcon";
import { UserData } from "../types/user";
import Styled from "./Actions.styled";

type ActionsProps = {
  onClick: () => void;
  isInWatchlist: boolean;
  userData: UserData;
};

export const Actions = (props: ActionsProps) => {
  const { onClick, isInWatchlist, userData } = props;

  return (
    <Styled.ActionsWrapper>
      <Styled.Action
        onClick={onClick}
        selected={isInWatchlist}
        aria-label={
          isInWatchlist ? `Remove film from watchlist` : `Add film to watchlist`
        }
        disabled={userData === null}
      >
        <SavedIcon />
      </Styled.Action>
      <Styled.Flyout>
        {userData
          ? isInWatchlist
            ? `Remove film from watchlist`
            : `Add film to watchlist`
          : "You need to login to add movie to the watchlist"}
      </Styled.Flyout>
    </Styled.ActionsWrapper>
  );
};
