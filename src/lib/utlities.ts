// lib/utilities.ts
import { currentUser } from "@clerk/nextjs/server";

let currentUserId: string | undefined;
let role: string | undefined;

const userPromise = currentUser().then(user => {
  currentUserId = user?.id;
  role = (user?.publicMetadata as { role?: string })?.role;
});

export { currentUserId, role, userPromise };