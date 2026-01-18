import { createContext, useContext, useEffect, useState } from "react";
import type { Job } from "../types/job";
import { getFromStorage, setToStorage } from "../utils/storage";

type FavoritesContextType = {
  favorites: Job[];
  toggleFavorite: (job: Job) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Job[]>(
    getFromStorage("favorites") || [],
  );

  useEffect(() => {
    setToStorage("favorites", favorites);
  }, [favorites]);

  const toggleFavorite = (job: Job) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === job.id);
      if (exists) {
        return prev.filter((item) => item.id !== job.id);
      }
      return [...prev, job];
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some((job) => job.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return ctx;
};
