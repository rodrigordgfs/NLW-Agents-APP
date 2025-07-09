import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Room = {
  id: string;
  name: string;
};

type GetRoomsAPIResponse = Room[];

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["create-room"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      <div>
        {data?.map((room) => (
          <div key={room.id}>
            <h1>{room.name}</h1>
            <p>ID: {room.id}</p>
            <Link to={`/room/${room.id}`}>
              <Button>Join Room</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
