import React, {useEffect, useState} from 'react';
import TripCard from '../../components/TripCard/TripCard';
import StyledHome from './Home.style';
import {Box} from '@chakra-ui/react';
import {DataI} from '../../interfaces/data';
import services from '../../services/cards';

function Home() {
  const [cardData, setCardData] = useState<DataI[]>([]);

  const fetchCardsData = async () => {
    try {
      const result = await services.dataList();
      setCardData(result.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchCardsData();
  }, []);

  return (
    <StyledHome>
      <Box className="container">
        {cardData.map((data) => {
          const {title, background, countries_count, days_count, rating, emission_offset} = data;
          return (
            <TripCard
              title={title}
              background={background}
              countries_count={countries_count}
              days_count={days_count}
              rating={rating}
              emission_offset={emission_offset}
            />
          );
        })}
      </Box>
    </StyledHome>
  );
}

export default Home;
