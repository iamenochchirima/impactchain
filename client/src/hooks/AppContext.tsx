import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";

import { _SERVICE } from "./declarations/impact_chain_data/impact_chain_data.did";
import { dataCanisterId, dataIDL, network } from "./exporter";
import { Socket, io } from "socket.io-client";

const localhost = "http://localhost:4943";
const host = "https://icp0.io";

interface AuthContextType {
  dataActor: ActorSubclass<_SERVICE> | null;
  socket: Socket | null;
}

const initialContext: AuthContextType = {
  dataActor: null,
  socket: null,
};

const AuthContext = createContext<AuthContextType>(initialContext);

const useAuthClient = () => {
  const [dataActor, setBackendActor] = useState<ActorSubclass<_SERVICE> | null>(
    null
  );
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    updateClient();

    const newSocket = io("http://localhost:5000/", {
      path: "/socket.io",
      transports: ["websocket"],
    });
    setSocket(newSocket);

    return () => {
      if (newSocket) newSocket.close();
    };
  }, []);

  async function updateClient() {
    const agent = new HttpAgent({
      host: network === "ic" ? host : localhost,
    });

    if (network !== "ic") {
      agent.fetchRootKey();
    }

    const _backendActor: ActorSubclass<_SERVICE> = Actor.createActor(dataIDL, {
      agent,
      canisterId: dataCanisterId,
    });
    setBackendActor(_backendActor);
  }

  return {
    dataActor,
    socket,
  };
};

interface LayoutProps {
  children: React.ReactNode;
}

export const ContextProvider: FC<LayoutProps> = ({ children }) => {
  const auth = useAuthClient();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
