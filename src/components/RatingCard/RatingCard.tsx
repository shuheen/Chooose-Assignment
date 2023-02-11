import React from 'react';
import StyledRatingCard from './RatingCard.style';
import ReactStars from 'react-rating-stars-component';
import {Text, Flex, Center} from '@chakra-ui/react';

interface RatingCardProps {
  value: number;
}
function RatingCard({value}: RatingCardProps) {
  return (
    <StyledRatingCard>
      <Text fontSize="xs">Trip Rating</Text>
      <Flex p={0}>
        <Center>
          <ReactStars
            count={5}
            edit={false}
            activeColor="#ffd700"
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            value={value}
          />
          <Text fontSize="xs">{value}</Text>
        </Center>
      </Flex>
    </StyledRatingCard>
  );
}

export default RatingCard;
