document.addEventListener('alpine:init', () => {
    Alpine.data('cardInvestment', () => ({
        data: [
            {
                title: "Investment Fund",
                image: "image-card-2.png",
                icon: "calc.png",
                description: "FramerBite delivers the essential components to build a polished and professional website for your SaaS business."
            },
            {
                title: "Retirement Plan",
                image: "image-card-1.png",
                icon: "layer.png",
                description: "FramerBite offers the essential building blocks for developing a sophisticated website for your SaaS, a well-established fact recognized by numerous desktop publishing packages and web page editors."
            },
            {
                title: "Global Visa and Mastercard",
                image: "image-card-3.png",
                icon: "card.png",
                description: "FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools."
            }
        ],
    }))

    Alpine.data('numbers', () => ({
        data: [
            {
                value: "300+",
                icon: "UsersThree.png",
                description: "partner with us"
            },
            {
                value: "$3.2b+",
                icon: "Money.png",
                description: "Cumulative trending"
            },
            {
                value: "860k",
                icon: "ProjectorScreenChart.png",
                description: "Successful projects"
            },
            {
                value: "1.6%",
                icon: "Kanban.png",
                description: "Low Interest Rate"
            }
        ]

    }))


})
