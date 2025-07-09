/** biome-ignore-all assist/source/useSortedAttributes: <Todo> */
/** biome-ignore-all assist/source/organizeImports: <Todo> */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoom />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
