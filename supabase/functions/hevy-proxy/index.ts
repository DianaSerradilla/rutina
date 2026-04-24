import "@supabase/functions-js/edge-runtime.d.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
}

Deno.serve(async (req) => {
  // Manejar preflight request de CORS (Navegadores)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Obtener la API Key desde los secretos
    const HEVY_API_KEY = Deno.env.get('HEVY_API_KEY')
    
    if (!HEVY_API_KEY) {
      throw new Error('HEVY_API_KEY no está configurada en los secretos de Supabase.')
    }

    // 2. Extraer parámetros desde el body (Supabase invoke usa POST por defecto)
    let page = '1';
    let limit = '10';
    
    if (req.method === 'POST') {
      const body = await req.json();
      if (body.page) page = body.page.toString();
      if (body.limit) limit = body.limit.toString();
    }

    // 3. Hacer la petición real a Hevy
    const hevyResponse = await fetch(`https://api.hevyapp.com/v1/workouts?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'api-key': HEVY_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await hevyResponse.json();

    if (!hevyResponse.ok) {
       console.error("Hevy Error:", data);
       throw new Error(data.message || 'Error en la respuesta de Hevy');
    }

    // 4. Devolver los datos al frontend con las cabeceras CORS
    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      },
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 400, 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      },
    )
  }
})
