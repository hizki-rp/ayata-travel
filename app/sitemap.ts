import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [

        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
            
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`

        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookyourticket`

        }

    ]
}