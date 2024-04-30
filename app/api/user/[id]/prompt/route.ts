import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database"

export const GET = async (req: any, {params}:any) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({creator:params.id}).populate('creator')
        console.log(params, prompts);
        
        return new Response(
            JSON.stringify(prompts),
            { status: 200 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify(error),
            { status: 500 }
        )
    }
}