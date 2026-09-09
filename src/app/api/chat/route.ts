import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history, knowledge } = await req.json();

    const systemPrompt = `Eres el asistente virtual de Yeron Pool Cuero Montaño, un Ingeniero en TIC y Desarrollador Full Stack. 
Responde SIEMPRE en el mismo idioma que la pregunta del usuario.
Usa la siguiente base de conocimiento para responder:

${knowledge}

Instrucciones:
- Responde de manera profesional pero amigable.
- Sé conciso pero completo.
- Si la pregunta no está relacionada con Yeron, redirige cortésmente al tema profesional.
- Usa formato markdown para estructurar las respuestas cuando sea apropiado.
- Menciona proyectos, tecnologías y experiencia relevante según la pregunta.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const { ChatCompletion } = await import("z-ai-web-dev-sdk");

    const result = await ChatCompletion.create({
      model: "deepseek-chat",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply =
      typeof result === "string"
        ? result
        : result?.choices?.[0]?.message?.content ||
          "Lo siento, no pude generar una respuesta.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Lo siento, hubo un error procesando tu pregunta." },
      { status: 500 }
    );
  }
}