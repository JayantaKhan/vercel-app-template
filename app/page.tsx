"use client";
import { Button, Divider, Flex, Text, Title } from "@mantine/core";
import UserPost from "./UserPost";
import React, { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import userAtom from "./userAtom";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.slice(0, 10)); // Get the first 10 users
          console.log('Fetched data:', data); 
        } else {
          console.error('Error fetching users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);



  return <>
 <Flex c={"red"} justify={"enter"} align={"center"} fs={700} w={"full"}>Sahil Sk</Flex>
  <Divider my="md" />
  <Flex wrap={"wrap"}>

        {users.map((user) => (
          
          <UserPost userData={user}  />
        ))}
    </Flex>
    </>;
}

export default HomePage;