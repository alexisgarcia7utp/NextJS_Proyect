import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { IGalaxy } from "./components/GalaxyList/GalaxyList";

export async function middleware(request: NextRequest) {
    const urlItems = request.nextUrl.pathname.split('/').filter(Boolean);
    if (urlItems[0] === 'galaxy' && urlItems.length === 2) {
        const galaxyId = urlItems[1];
        const galaxys: IGalaxy[] = await fetch(process.env.NEXT_PUBLIC_API_URL + "/galaxy")
        .then((res) => res.json())
        .then((data: IGalaxy[]) => (data))
        .catch((error) => console.error(error)) as IGalaxy[];
        
        if (!galaxys.some((galaxy) => galaxy.id === Number(galaxyId))) {
            return NextResponse.redirect(new URL('/galaxy', request.url));
        }
    }
}

export const config = {
    matcher: '/galaxy/:id*'
}