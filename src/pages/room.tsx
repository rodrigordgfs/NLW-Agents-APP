import { Navigate, useParams } from "react-router-dom";

type RoomsParams = {
  id: string;
};

export const Room = () => {
  const { id } = useParams<RoomsParams>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return <div>Room {id}</div>;
};
