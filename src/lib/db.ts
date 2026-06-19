import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI");
}

interface Cached {
    conn: mongoose.Connection | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongooseCache: Cached;
}

let cached = global.mongooseCache;

if (!cached) {
    cached = global.mongooseCache = {
        conn: null,
        promise: null,
    };
}

export async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI);
    }

    const mongooseInstance = await cached.promise;

    cached.conn = mongooseInstance.connection;

    return cached.conn;
}