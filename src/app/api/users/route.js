import connectDB from "@/lib/connectDB";
import { userModal } from "@/lib/models/UserModal";

export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();
    let newUser = await new userModal({ ...obj });
    newUser = await newUser.save();
    return Response.json(
      {
        error: false,
        msg: "User Registered Succesfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        error: true,
        msg: "Something Went Wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
    await connectDB()
    const users = await userModal.find()
    return Response.json(
        {
          error: false,
          msg: "User Registered Succesfully",
          user: users,
        },
        { status: 200 }
      );
}
export async function PUT(req) {}
export async function DELETE(req) {}
