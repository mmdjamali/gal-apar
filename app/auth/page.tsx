import Login from "@/components/login";

function Auth() {
  return (
    <main className="relative flex items-center justify-center w-full h-full bg-background">
      <div className="max-w-[984px] w-full flex flex-col items-center relative">
        <Login />
      </div>
    </main>
  );
}

export default Auth;
