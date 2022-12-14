import React from 'react';
import { Box, Center, Flex, HStack, Link, Text } from 'native-base';

export const NotificationCard = () => {
  return (
    <Flex w="full" alignItems="center">
      <HStack>
        <Center mr="4">
          <Box
            h="2"
            w="2"
            rounded="full"
            bg="trueGray.600"
            mb="2"
            _light={{
              bg: 'trueGray.400',
            }}
          />
          <Box borderWidth="1" borderColor="trueGray.500" h="10" />
        </Center>

        <Box
          bg="trueGray.900"
          rounded="xl"
          p="4"
          w="5/6"
          _light={{
            bg: 'trueGray.100',
          }}>
          <Text
            color="trueGray.100"
            fontSize="lg"
            fontWeight="semibold"
            _light={{
              color: 'trueGray.900',
            }}>
            Device Offline Notification
          </Text>

          <Text
            color="trueGray.200"
            fontSize="md"
            fontWeight="normal"
            _light={{
              color: 'trueGray.800',
            }}>
            13:50:33 | open door{' '}
            <Link
              _text={{
                color: 'emerald.500',
                fontSize: 'md',
              }}>
              View
            </Link>
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};
