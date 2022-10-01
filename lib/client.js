// it work as a connection between nextjs and sanity

import sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
    projectId:'ogc0bq78',
    dataset:'production',
    apiVersion:"2022-09-01",
    useCdn:true,
    token:"sk8mEQYpAXlAFefkawIPvuNRXKz2i3WQ01QiQmV4gZJ8gfwBiEKHy5c8kE5poX6L4oQpyBl62FWjmBEgnfa5dMEUs1j6bG4hB19h8zCDPVdQxbTiSoGUGJiFvkRpofGoVHxu5B77vKKfgJenljeS0hbnABXvTteJrGxBl7p7xZgpmDj1Su4k"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
