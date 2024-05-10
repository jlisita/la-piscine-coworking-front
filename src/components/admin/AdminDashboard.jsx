import { useVerifyToken } from "../../utils/authGuard";

const AdminDashboard = () => {
  useVerifyToken();

  return <h1>Bienvenue Admin</h1>;
};

export default AdminDashboard;