import { nextAuthConfig } from "@/lib/next-auth-config";
import { getServerSession } from "next-auth";

const Profile = async () => {
  const user = (await getServerSession(nextAuthConfig))?.user;

  return (
    <div className="flex flex-col py-6 w-full relative flex-shrink">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">{`${user?.name}'s Profile`}</h1>
      </div>
    </div>
  );
};

export default Profile;
