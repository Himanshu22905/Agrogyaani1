import { NextRequest, NextResponse } from "next/server";
import { getWeather } from "@/app/lib/Weather/client";

export async function GET(request: NextRequest) {
  const latitude = Number(
    request.nextUrl.searchParams.get("lat")
  );

  const longitude = Number(
    request.nextUrl.searchParams.get("lon")
  );

  if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
    return NextResponse.json(
      {
        error: "Latitude and Longitude required",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const weather = await getWeather(
      latitude,
      longitude
    );

    return NextResponse.json(weather);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch weather",
      },
      {
        status: 500,
      }
    );
  }
}