import React, { FC } from "react";

type GreetingProps = {
  description: string;
  creationDate: Date;
  author: string;
  photoUrl: string;
}

const Greeting: FC<GreetingProps> = ({
  description,
  creationDate,
  author,
  photoUrl
}) => {
  return (
    <div>ok</div>
  )
};