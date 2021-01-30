import { Box, Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from '../generated/graphql';

export const NavBar = () => {
  const [{ data, fetching }] = useMeQuery()
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation()

  let body = null

  if (fetching) {

  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    )
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant="link" isLoading={logoutFetching} onClick={() => logout()}>Logout</Button>
      </Flex >
    )
  }

  return (
    <Flex bg="tan" p={4}>
      <Box ml={"auto"} >
        {body}
      </Box>
    </Flex>
  )
}