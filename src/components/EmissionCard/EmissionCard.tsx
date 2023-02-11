import {Card, Flex, Text, Spacer} from '@chakra-ui/react';
import React from 'react';
import StyledEmissionCard from './EmissionCard.style';

interface EmissionCardProps {
  emission_offset: string;
}
function EmissionCard({emission_offset}: EmissionCardProps) {
  return (
    <StyledEmissionCard data-testid="emission-card">
      <Card backgroundColor="#1f2837" color="#fff" borderRadius="md" p={2} mt={2}>
        <Flex>
          <Text fontSize="12px">Emission</Text>
          <Spacer />
          <Text fontSize="12px" data-testid="emission-value">
            {emission_offset}
          </Text>
        </Flex>
      </Card>
    </StyledEmissionCard>
  );
}

export default EmissionCard;
