export const projects = [
  {
    title: "BlockOps Network",
    description:
      "Web3 Infrastructure Made Easy: Manage, scale, deploy Blockchain Nodes Anywhere",
    imageUrl: "https://via.placeholder.com/600x400?text=BlockOps Network",
    projectUrl: "https://blockops.network/",
    details: {
      about:
        "BlockOps Network is a website dedicated to providing solutions for blockchain node provisioning and management. It offers tools and services aimed at simplifying the process of deploying and maintaining blockchain nodes.",
      implementation:
        "As the backend engineer on this project, my primary responsibility was to develop robust API endpoints to facilitate communication between the frontend and backend systems. These endpoints were crucial for handling various tasks, such as processing node configurations and persisting them into a relational database. I implemented the full lifecycle of data management operations, including storing, retrieving, updating, and deleting node configurations. Furthermore, I ensured seamless integration with other components of the infrastructure by transmitting processed data to the operations team responsible for managing the infrastructure. This collaboration enabled the provisioning of nodes on the infrastructure in a timely and efficient manner. Overall, my role as a backend engineer involved orchestrating the flow of data between different layers of the system, ensuring reliability, performance, and scalability throughout the process.",
      tools: [
        {
          name: "Express.js / Typescript",
          description:
            "Backend framework for creating server and writing backend logic.",
        },
        {
          name: "PostgreSQL",
          description:
            "Relational database for storing node configurations and other data.",
        },
        {
          name: "WebSocket",
          description: "Real-time alerting and connection handling.",
        },
        {
          name: "Postman",
          description:
            "API documentation and testing tool useful for team collaboration.",
        },
        {
          name: "Jest",
          description: "Framework for writing unit and integration tests.",
        },
        {
          name: "Bugsnag",
          description:
            "Tool for monitoring application errors and performance issues.",
        },
      ],
    },
  },
  {
    title: "Stable Borrow",
    description:
      "Stable Borrow (STB), a Web3 Platform where users can Borrow $STC, Earn and Exchange.",
    imageUrl: "https://via.placeholder.com/600x400?text=Stable Borrow",
    projectUrl: "https://www.stableborrow.com/",
    details: {
      about:
        "Stable Borrow(STB) works on a unique lending protocol that lends out STC to users against XDC in an over collateralized manner in order to ensure STC is stable and its price is tied to $1. STB also works on a unique regulatory protocol where regulation of prices and vault are done by haunters(SNFT holders) and they get to earn as they play(haunt) in the GameFi section of the platform and participate in various haunting tournaments and more. In addition STB is open to be a SocialFi where various self bound tokens will be owned and reputations can be built and you get to meet and makes friends of similar opinion and work(haunters and borrowers) even get to make opponents(haunter to borrower relationship) it’s all allowed and in plan for STB Specifications. In order to solve the problem of full decentralization with lending protocols,stable tokens, Gamefi and contradiction between the use of DAOs to oversees decentralization that may occurs due to nature of voting or attacks and having to stake high amount of tokens, STB provides:.",
      implementation:
        "As a frontend engineer on the StableBorrow project, I implemented the UI elements based on the provided designs. I collaborated closely with the blockchain engineer to integrate smart contracts by managing wallet connections, sending data to contract functions, retrieving data, and handling state management on the frontend. Additionally, I worked on saving data to IPFS using Pinata and integrating third-party APIs.",

      tools: [
        {
          name: "React.js",
          description:
            "Used for frontend implementation to build a responsive and dynamic user interface.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework used for styling the application efficiently.",
        },
        {
          name: "Pinata",
          description:
            "Service used to save data to decentralized IPFS (InterPlanetary File System).",
        },
        {
          name: "Axios",
          description:
            "HTTP client used to integrate with third-party APIs for data fetching.",
        },
        {
          name: "Web3.js",
          description:
            "JavaScript library used to interact with the Ethereum blockchain and smart contracts.",
        },
      ],
    },
  },
  {
    title: "Geolandmark",
    description:
      "Revolutionize Land Registration and Asset Management with GeoLandmark!.",
    imageUrl: "https://via.placeholder.com/600x400?text=Geolandmark",
    projectUrl: "https://geolandmark.vercel.app/",
    details: {
      about:
        "GeoLandmark is a Web3 application that simplifies land registration. It secures the registration of land assets using blockchain technology, providing transparent land transactions and ensuring secure ownership. This revolutionizes the process of transferring land ownership..",
      implementation:
        "For the implementation, I used React for the frontend to design the UI of the website, manage state, and interact with smart contract functions. I developed a map interface that identifies specific land parcels on OpenStreetMap, enhancing accurate visualization and enabling stakeholders to make informed decisions based on the map. Users can perform analyses such as checking the distance between parcels to aid in decision-making. Additionally, I integrated a platform for KYC to verify the legitimate owner of each land asset. Verified assets are tokenized as NFTs, ensuring secure and transparent ownership.",
      tools: [
        {
          name: "React.js",
          description:
            "Used for frontend implementation to build a responsive and dynamic user interface.",
        },
        {
          name: "Leaflet",
          description:
            "React library used for map integration to enhance accurate visualization of land parcels.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework used for styling the application efficiently.",
        },
        {
          name: "Pinata",
          description:
            "Service used to save data to decentralized IPFS (InterPlanetary File System).",
        },
        {
          name: "Axios",
          description:
            "HTTP client used to integrate with third-party APIs for data fetching.",
        },
        {
          name: "Web3.js",
          description:
            "JavaScript library used to interact with the Ethereum blockchain and smart contracts.",
        },
        {
          name: "Express.js",
          description:
            "Backend framework used to create server and handle backend logic.",
        },
      ],
    },
  },
  {
    title: "Nautilus Technologies Website",
    description: "We help startups architect and build infrastructure to scale",
    imageUrl: "https://via.placeholder.com/600x400?text=Nautilus Technologies",
    projectUrl: "https://www.nautilus.tech/",
    details: {
      about: "Official website of a Nautilus Technologies they help architect and build infrastructure that scale",
      implementation: "I orchestrated the implementation of the website by integrating the UI design using React.js.",
      tools: [
        {
          name: "React.js",
          description:
            "Used for frontend implementation to build a responsive and dynamic user interface.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework used for styling the application efficiently.",
        },
        {
          name: "Axios",
          description:
            "HTTP client used to integrate with third-party APIs for data fetching.",
        },
        {
          name: "Email.Js",
          description:
            "To get website contact data",
        },
      ],
    },
  },
];
