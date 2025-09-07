import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { model, messages }: { messages: UIMessage[]; model: string } =
        await req.json();

    const result = streamText({
        model: model,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}