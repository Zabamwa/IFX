import {
  AuthorData,
  CardContainer,
  CardInfo,
  CardText,
  CardTextDetail,
  CardTitle,
  DetailsWrapper,
  FlexContainer,
} from "./Card.styles.ts";
import { useState } from "react";
import { IUser } from "../../types/user.ts";

interface ICardProps {
  title: string;
  body: string;
  theme: "dark" | "light";
  user: IUser;
}

const Card = ({ title, body, user, theme }: ICardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleDetails = () => {
    if (!user) return alert("No user data");
    setShowDetails((prev) => !prev);
  };

  const DetailBlock = ({ label, value }: { label: string; value: string }) => (
    <CardTextDetail
      $theme={theme}
      data-testid={`detail-${label.toLowerCase()}`}
    >
      {label}: <span>{value}</span>
    </CardTextDetail>
  );

  return (
    <CardContainer $theme={theme}>
      <FlexContainer $direction="column">
        {!!user ? (
          <AuthorData
            $theme={theme}
          >{`${user.username ?? ""} - ${user.email ?? ""}`}</AuthorData>
        ) : null}
        <CardTitle $theme={theme}>{title}</CardTitle>
        <CardText $theme={theme}>{body}</CardText>
        <FlexContainer $justify="flex-end">
          <CardInfo onClick={handleDetails}>
            {!showDetails ? "More details" : "Less details"}
          </CardInfo>
        </FlexContainer>
        {!!user ? (
          <DetailsWrapper $expanded={showDetails}>
            <FlexContainer $direction="row" $marginTop="24px" $rwd>
              <FlexContainer $direction="column">
                <DetailBlock label="Name" value={user.name} />
                <DetailBlock label="Username" value={user.username} />
                <DetailBlock label="Email" value={user.email} />
                <DetailBlock label="Phone" value={user.phone} />
                <DetailBlock label="Website" value={user.website} />
              </FlexContainer>

              <FlexContainer $direction="column">
                <DetailBlock label="Company" value={user.company.name} />
                <DetailBlock
                  label="Catch phrase"
                  value={user.company.catchPhrase}
                />
                <DetailBlock label="Bs" value={user.company.bs} />
              </FlexContainer>

              <FlexContainer $direction="column">
                <DetailBlock label="City" value={user.address.city} />
                <DetailBlock label="Street" value={user.address.street} />
                <DetailBlock label="Suite" value={user.address.suite} />
                <DetailBlock label="Zip code" value={user.address.zipcode} />
              </FlexContainer>
            </FlexContainer>
          </DetailsWrapper>
        ) : null}
      </FlexContainer>
    </CardContainer>
  );
};

export default Card;
