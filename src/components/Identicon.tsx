import { useEffect, useRef } from "react";
import { useEthers } from "@usedapp/core";
import Jazzicon from "@metamask/jazzicon";
import styled from "@emotion/styled";

const StyledIdenticon = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1.125rem;
  background-color: black;
`;

export default function Identicon(props:any) {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (props.account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(32, parseInt(props.account.slice(2, 10), 16)));
    }
  }, [props.account]);

  return <StyledIdenticon ref={ref as any} />;
}
