export async function GET() {
  const res = await fetch("http://45.138.159.183:6061/api/Product")
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
