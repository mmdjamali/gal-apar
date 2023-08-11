"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  src: string;
}

function UserAvatar({ src }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback />
    </Avatar>
  );
}

export default UserAvatar;
