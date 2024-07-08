"use client";
import { Bubble } from "@typebot.io/nextjs";

export const Typebot = () => {
  return (
    <div className="">
      <Bubble
        apiHost="https://viewer.macshinaider.cloud"
        typebot="lucas"
        previewMessage={{ message: "Precisa de Ajuda?", autoShowDelay: 10000 }}
        theme={{ button: { backgroundColor: "#0042DA" } }}
      />
    </div>
  );
};
