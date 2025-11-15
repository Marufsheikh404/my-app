import Login from "@/components/Login";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="container mx-auto px-10">
      <Login></Login>
      <UserInfo></UserInfo>

      {
        JSON.stringify(session)
      }
    </div>
  );
}
