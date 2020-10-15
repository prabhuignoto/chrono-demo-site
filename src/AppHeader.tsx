import React from "react";
import { GithubLogo, Header, LogoImage, LogoWrapper } from "./App.styles";
import AppLogo from "./assets/logo.png";

export default ({ type }: { type: string }) => {
  return (
    <Header>
      <LogoWrapper href="https://react-chrono.vercel.app/">
        <LogoImage src={AppLogo} />
      </LogoWrapper>

      <a
        href="http://github.com/prabhuignoto/react-chrono"
        target="_new"
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GithubLogo>
          <iframe
            src={`https://ghbtns.com/github-btn.html?user=prabhuignoto&repo=react-chrono&type=star&count=true&size=large`}
            frameBorder="0"
            scrolling="0"
            width="300"
            height="30"
            title="GitHub"
            style={{ position: "absolute" }}
          ></iframe>
        </GithubLogo>
      </a>
    </Header>
  );
};
