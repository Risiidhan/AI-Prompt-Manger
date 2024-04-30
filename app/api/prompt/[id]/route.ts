import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database"

export const GET = async (req: any, { params }: any) => {
    try {
        await connectToDb();
        const prompt = await Prompt.findById(params.id);

        if (!prompt)
            return new Response("Prompt with ID not found", { status: 200 });

        return new Response(JSON.stringify(prompt), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify(error),{ status: 500 })
    }
}

export const PATCH = async (req:any, {params}:any) =>{
    const {prompt, tag} = await req.json();
    try {
        await connectToDb();
        
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt)
            return new Response("Prompt with ID not found", { status: 200 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify(error),{ status: 500 })
    }
}

export const DELETE =async (req:any, {params}:any) =>{
    try {
        await connectToDb();

        const deletedPrompt = await Prompt.findByIdAndDelete(params.id);
        if (!deletedPrompt)
            return new Response("Prompt with ID not found", { status: 200 });

        return new Response(JSON.stringify("Prompt deleted Succussfully"), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error),{ status: 500 })
    }
}