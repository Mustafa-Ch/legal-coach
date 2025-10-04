import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:1337/api/faq?populate=*", {
    headers: {
      Authorization:
        "Bearer ca5609e61bff0de48bd81604a2e84e54c99c24159be353783f9a1fe98f1fc4efb2b3d13bff6bf7306ba297f7cf59995fb95972b7d124b7227a7b8bb4165a656c110cefd5be38f98d60f7b409f5fea41f64d9f22ea3ee0b02b0493b0164a3af2f69203dd45849a5c0d705b70b4c80d2b9c52ce5d74de4895194e6a2eb4c908f37",
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}