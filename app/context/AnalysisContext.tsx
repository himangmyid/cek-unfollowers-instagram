"use client";

import { createContext, useContext, useState } from "react";

type AnalysisContextType = {
  notFollowback: string[];
  mutualFollowers: string[];
  totalData: {
    totalFollowers: number;
    totalFollowing: number;
    notFollowback: number;
    mutualFollowers: number;
  };
  setResults: (data: {
    notFollowback: string[];
    mutualFollowers: string[];
  }) => void;
  setTotalData: (data: {
    totalFollowers: number;
    totalFollowing: number;
    notFollowback: number;
    mutualFollowers: number;
  }) => void;
  setNotFollowback: (data: string[]) => void;
  setMutualFollowers: (data: string[]) => void;
};

const AnalysisContext = createContext<AnalysisContextType | null>(null);

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
  const [notFollowback, setNotFollowback] = useState<string[]>([]);
  const [mutualFollowers, setMutualFollowers] = useState<string[]>([]);
  const [totalData, setTotalData] = useState({
    totalFollowers: 0,
    totalFollowing: 0,
    notFollowback: 0,
    mutualFollowers: 0,
  });

  const setResults = (data: {
    notFollowback: string[];
    mutualFollowers: string[];
  }) => {
    setNotFollowback(data.notFollowback);
    setMutualFollowers(data.mutualFollowers);
  };

  return (
    <AnalysisContext.Provider
      value={{
        notFollowback,
        mutualFollowers,
        totalData,
        setResults,
        setTotalData,
        setNotFollowback,
        setMutualFollowers,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error("useAnalysis must be used within AnalysisProvider");
  }
  return context;
}