"use client";
import { Divider, Flex } from "@mantine/core";
import UserPost from "./UserPost";
import React, { useEffect, useState } from "react";


function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data.slice(0, 10)); // Get the first 10 users
          console.log("Fetched data:", data);
        } else {
          console.error("Error fetching users:", response.status);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        minHeight: "100vh",
        marginLeft: "2px",
        marginRight: "2px",
        marginTop: "2px",
      }}
    >
      <Flex c={"blue"} justify-={"enter"} align={"center"} fs={700} w={"full"}>
        Jayanta Khan
      </Flex>
      <Divider my="md" />
      <Flex wrap={"wrap"} justify="center">
        {users.map((user) => (
          <UserPost key={user.id} userData={user} />
        ))}
      </Flex>
    </Flex>
  );
}

export default HomePage;
