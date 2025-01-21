import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image }) {
    const siteTitle = "Koushik Mannam | Software Developer & Data Engineer";

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}