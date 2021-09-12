import React, { useEffect, useRef } from "react";
import SockJsClient from "react-stomp";
import { useForm } from "react-hook-form";
import "../../styles/Shared-Styles/Comms.css";
import { useState } from "react";
import client from "react-stomp";

export const Communication = () => {
  const { register, handleSubmit } = useForm();
  const [messages, setMessages] = useState();
  let clientRef = useRef(null);

  const onSubmit = (data) => {
    const daref = clientRef.current;
    daref.sendMessage("/app/hello", data.email);
  };

  let onConnected = () => {
    console.log("Connected!!");
  };

  let onMessageReceived = (msg) => {
    console.log(msg);
  };

  const ok = {
    asf: "fafa",
  };

  return (
    <div>
      <SockJsClient
        url="http://localhost:2019/socket"
        topics={["/topic/messages"]}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={(msg) => onMessageReceived(msg)}
        debug={true}
        ref={clientRef}
        subscribeHeaders={ok}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="loginforminput"
          type="text"
          name="email"
          id="email"
          ref={register({ required: true })}
        ></input>
      </form>

      <div>{messages ? messages : "none"}</div>
    </div>
  );
};
