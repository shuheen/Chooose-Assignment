import React from 'react';
import StyledTripCard from './TripCard.style';
import {Card, CardBody, Heading, Image, Text, Box, Flex, Center} from '@chakra-ui/react';
import {DataI} from '../../interfaces/data';
import EmissionCard from '../EmissionCard/EmissionCard';
import RatingCard from '../RatingCard/RatingCard';

interface TripCardProps extends DataI {}

function TripCard({title, background, countries_count, days_count, rating, emission_offset}: TripCardProps) {
  return (
    <StyledTripCard data-testid="trip-card">
      <Card maxW="sm" p="10px" borderRadius="2xl">
        <CardBody p={0} position="relative">
          <Flex>
            <Center>
              <Image src={background} maxH="100%" alt={title} borderRadius="lg" data-testid="card-image" />
              <Box className="overlay" borderRadius="lg">
                <Box className="content-container">
                  <Heading size="30px" color="#fff" data-testid="card-title">
                    {title}
                  </Heading>
                  <Text fontSize="10px" textAlign="center" color="#fff">
                    {countries_count} Countries, {days_count} days
                  </Text>
                  <EmissionCard emission_offset={emission_offset} />
                </Box>
              </Box>
              <RatingCard value={rating} />
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </StyledTripCard>
  );
}

export default TripCard;
