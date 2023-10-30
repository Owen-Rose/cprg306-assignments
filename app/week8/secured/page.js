"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, fireBaseSignOut } = useUserAuth();

  return (
    <main>
      <header>
        <h1>Secured Page</h1>
      </header>
      <section>
        {user ? (
          <p>Welcome, {user.displayName}. You are signed in!</p>
        ) : (
          <p>This content can only be viewed if you are signed in!</p>
        )}
      </section>
    </main>
  );
}
