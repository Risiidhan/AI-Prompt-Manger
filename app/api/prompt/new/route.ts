import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req: any) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDb();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();
        return new Response(
            JSON.stringify(newPrompt),
            { status: 201 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify(`failed to create prompt ${error}`),
            { status: 500 }
        )
    }
}