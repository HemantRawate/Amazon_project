import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div
        style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
          <SignIn />
        </div>
      );
}