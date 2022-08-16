import React from 'react';
import { Flex, Text } from 'native-base';
import { AnimationStack } from '../../components/AnimationStack';

export const Groups = ({ route }: any) => {
  return (
    <AnimationStack>
      <Flex>
        <Text color="white">Groups</Text>
      </Flex>
    </AnimationStack>
  );
};
