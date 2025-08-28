// learning record in typescript
/**
    *?
    Record<K, T>
    Concept:

    Record<K, T> হলো একটি object type যা keys K এবং values T define করে।

    সহজ কথায়: "একটি map তৈরি কর যা key-এ K type, value-এ T type"
 */

// example one
type Role = "admin" | "editor" | "viwer";
const permissions: Record<Role, string[]> = {
  admin: ["create", "edit", "delete"],
  editor: ["edit"],
  viwer: ["read"],
};

// example two
/**
 * Practice Task (Record):

    ধরো তিনটি environment আছে: "dev" | "staging" | "production"
    প্রতিটিতে settings object আছে: { db: string, debug: boolean }
    Record ব্যবহার করে একটা envSettings তৈরি কর যা সব environment এর setting রাখবে।
 */

type Environments = "dev" | "staging" | "production";
type envOptions = {
  db: string;
  debug: boolean;
  baseUrl: string;
};

const envSettings: Record<Environments, envOptions> = {
  dev: {
    db: "local db",
    debug: true,
    baseUrl: "http://localhost:3000",
  },
  staging: {
    db: "staging db",
    debug: false,
    baseUrl: "https://staging.dashboard.ai",
  },
  production: {
    db: "production db or actual db",
    debug: false,
    baseUrl: "https://dashboard.ai",
  },
};

// make a function and return the config about this
const getConfig = (env: Environments) => {
  return envSettings[env];
};

const config = getConfig("dev");
console.log(config)
