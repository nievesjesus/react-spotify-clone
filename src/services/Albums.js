export const getAllAlbums = () => {

    const random = (min, max) =>  { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const items1 = [
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Lorem ipsum dolor sit amet consectetur adipiscing"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Ridiculus metus nisl parturient primis lacus facilisi"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Litora eu consequat platea luctus tortor sem nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sagittis ridiculus magnis laoreet molestie fusce duis"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Curae taciti nisl dictum mus integer tellus tempus sed nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sociis magnis fames vitae ornare justo fusce vel integer"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Tempor maecenas iaculis erat eu cursus bibendum lacus"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Imperdiet egestas auctor porta enim commodo inceptos"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Per dapibus justo lobortis at felis euismod platea"}
    ]


    const items2 = [
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Lorem ipsum dolor sit amet consectetur adipiscing"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Ridiculus metus nisl parturient primis lacus facilisi"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Litora eu consequat platea luctus tortor sem nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sagittis ridiculus magnis laoreet molestie fusce duis"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Curae taciti nisl dictum mus integer tellus tempus sed nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sociis magnis fames vitae ornare justo fusce vel integer"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Tempor maecenas iaculis erat eu cursus bibendum lacus"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Imperdiet egestas auctor porta enim commodo inceptos"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Per dapibus justo lobortis at felis euismod platea"}
    ]


    const items3 = [
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Lorem ipsum dolor sit amet consectetur adipiscing"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Ridiculus metus nisl parturient primis lacus facilisi"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Litora eu consequat platea luctus tortor sem nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sagittis ridiculus magnis laoreet molestie fusce duis"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Curae taciti nisl dictum mus integer tellus tempus sed nulla"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Sociis magnis fames vitae ornare justo fusce vel integer"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Tempor maecenas iaculis erat eu cursus bibendum lacus"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Imperdiet egestas auctor porta enim commodo inceptos"},
        {cover: `https://picsum.photos/300/300?random=${random(1,100)}`, title: "Daily Mix 1", description: "Per dapibus justo lobortis at felis euismod platea"}
    ]

    return new Promise((resolve, reject) => {
            
        const allAlbums = [
            {title:"Pop", description: "Lorem ipsum dolor sit amet, consectetur", items: items1},
            {title:"Rock", description: "Neque porro quisquam est", items: items2},
            {title:"Viva Latino", description: "At vero eos et accusamus et iusto odio", items: items3}
        ]

        resolve(allAlbums)
    })

}