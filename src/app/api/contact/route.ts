import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const entry = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    };

    const dataDir = join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });

    const filePath = join(dataDir, "messages.json");
    let messages = [];

    try {
      const { readFile } = await import("fs/promises");
      const existing = await readFile(filePath, "utf-8");
      messages = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }

    messages.push(entry);
    await writeFile(filePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
