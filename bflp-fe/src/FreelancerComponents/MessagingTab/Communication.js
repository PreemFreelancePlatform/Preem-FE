import React from "react";
import { Client } from "@stomp/stompjs";
import "../../styles/Shared-Styles/Comms.css";
import { useState } from "react";
import { useEffect } from "react";

export const Communication = () => {
  const SOCKET_URL = "ws://localhost:2019/ws-message";

  const [messages, setMessages] = useState();

  let onConnected = () => {
    console.log("Connected!!");
    client.subscribe("/hello", function (msg) {
      console.log(msg);
    });
  };

  let onDisconnected = () => {
    console.log("Disconnected!!");
  };

  const client = new Client({
    brokerURL: SOCKET_URL,
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect: onConnected,
    onDisconnect: onDisconnected,
  });

  useEffect(() => {
    client.activate();
  }, []);

  return (
    <div className="comms-cont">
      <h1 className="comms-header">Messaging</h1>

      <div>{messages}</div>
    </div>
  );
};
