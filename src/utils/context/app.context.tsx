// React Context là một cơ chế giúp chia sẻ dữ liệu giữa nhiều component
//  mà không cần truyền props thủ công qua từng cấp (prop drilling).

import { createContext, useContext, useState } from "react";

interface IAppContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;
  user: IUser | null;
  setUser: (v: IUser | null) => void;
  isAppLoading: boolean;
  setIsAppLoading: (v: boolean) => void;
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type TProps = {
  children: React.ReactNode;
};

export const AppProvider = (props: TProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  return (
    // Phần data chia sẻ giữa các component
    <CurrentAppContext.Provider
      value={{
        isAuthenticated,
        user,
        isAppLoading,
        setIsAuthenticated,
        setUser,
        setIsAppLoading,
      }}
    >
      {props.children}
    </CurrentAppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(CurrentAppContext);

  if (!currentAppContext) {
    throw new Error(
      "useCurrentApp has to be used within <CurrentAppContext.Provider>"
    );
  }

  return currentAppContext;
};
