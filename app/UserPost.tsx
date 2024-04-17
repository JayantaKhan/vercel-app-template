
import { Anchor, Box, Button, Flex, Image, Text, VariantColorsResolver, darken, defaultVariantColorsResolver, parseThemeColor, rem, rgba } from '@mantine/core';
import {IconAt, IconPhoneCall, IconStar, IconTrash, IconUserMinus, IconUserPlus, IconWorld } from '@tabler/icons-react';
import React,{ useEffect, useState } from 'react';



function UserPost({userData}) {
    const icon1 = <IconUserPlus size={14} color='#FFFFFF'/>;
    const icon2 = <IconTrash size={14} color='#228BE6'/>;
    const icon3 = <IconUserMinus size={14} color='#000000'/>;
    

    const [isFollowing, setIsFollowing] = useState(false);
    const [isDelete, setIsDelete] = useState(true);
  
    const handleFollow = () => {
      setIsFollowing(true);
    };
  
    const handleUnfollow = () => {
      setIsFollowing(false);
    };
    
    const handleDelete = () => {
      setIsDelete(false);
    };
    return <>
    {isDelete && 
    <div>
      <Flex direction={'column'} p={"20px"}  maw={"194px"} mah={"270px"} style={{ border: '1px solid #dee2e6' ,borderRadius: '20px'}} mt={"14px"} ml={"14px"}>
      <Flex justify={"center"} align={"center"} mb={"7px"} >
      <Image radius= "100"
      h={70}
      w={70}
      fit="contain"src={`https://api.dicebear.com/7.x/initials/svg?seed=${userData.name}`}alt={userData.name}/>
      </Flex>
      <Flex justify={"center"} align={"center"} mt={"7px"} >
      {isFollowing ?
      <Flex justify={"center"} align={"center"} gap={"3px"}> 
      <Text fz="sm" c={"#000000"}>{userData.name}</Text>
      <IconStar size={14} color='#000000'/></Flex>:(
           <Text fz="sm" c={"#000000"}>{userData.name}</Text>    
      )
}
      </Flex>
      <Flex justify={'flex-start'} align={"center"}fz="sm" mt={"5px"} gap={{ base: '2px', sm: '2px' }}><IconAt color="#868E96" size={16} />
<Anchor  variant="gradient"
      gradient={{ from: '#868E96', to: '#868E96' }} fz={"7px"}>{userData.email}</Anchor>
      </Flex>
      <Flex justify={'flex-start'} align={"center"} fz="sm" mt={"5px"} gap={{ base: '2px', sm: '2px' }}><IconPhoneCall color="#868E96" size={16}  />
<Anchor  variant="gradient"
      gradient={{ from: '#868E96', to: '#868E96' }} fz={"7px"}>{userData.phone}</Anchor>
      </Flex>
      <Flex justify={'flex-start'} align={"center"} fz="sm" mt={"5px"} gap={{ base: '2px', sm: '2px' }}><IconWorld color="#868E96" size={16} />
<Anchor  variant="gradient"
      gradient={{ from: '#868E96', to: '#868E96' }} fz={"7px"}>{userData.website}</Anchor>
      </Flex>
      <Flex gap="7px"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap= "nowrap"
      mt={"14px"}>
       {isFollowing ? (
                   <Button 
                   w={"120px"}
                   h={"23px"}
                   bg={'white'} 
                   justify="flex-start"
                   leftSection={icon3}
                   size={"7px"}
                   fw={"bold"}
                   variant="default"
                   onClick={handleUnfollow}>Unfollow</Button>
      ) : (
            <Button 
            w={"120px"}
            h={"23px"}
            bg={'blue'} 
            justify="flex-start"
            leftSection={icon1}
            variant="default"
            onClick={handleFollow}><Text c={"#FFFFFF"} fz={"7px"} fw={700}>Follow</Text></Button>
      )}
        <Button 
         w={"120px"}
         h={"23px"} justify="flex-start"
        leftSection={icon2}
        variant="outline"
        bg={"#FFFFFF"}
        onClick={handleDelete}
        ><Text c={"#228be6"} fz={"7px"} fw={700}>Delete</Text></Button>
      </Flex>
      </Flex>
      </div>
}
      </>;
  }
  
  export default UserPost;