export const tags = [ "new", "skin", "fragrance", "body", "makeup", "hair", "sale", "all"]

const shopData = [
    {
        id: 1,
        name: "Skin cleanser",
        manufactor: "Curology",
        image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: "10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "skin"
    },
    {
        id: 2,
        name: "Body lotion",
        manufactor: "Necessaire",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "28.85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "body, new"
    },
    {
        id: 3,
        name: "Clensing oil",
        manufactor: "The Body Shop",
        image: "https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "22",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "skin"
    },
    {
        id: 4,
        name: "Anti-age cream",
        manufactor: "Nuance",
        image: "https://images.unsplash.com/photo-1708477199100-e4d5f56a8eb2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: ""
    },
    {
        id: 5,
        name: "Face cream",
        manufactor: "Neauthy",
        image: "https://images.unsplash.com/photo-1606424359367-af69e3da9832?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "skin"
    },
    {
        id: 6,
        name: "Roller Set",
        manufactor: "xxx",
        image: "face-roller-kit",
        price: "15.50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 7,
        name: "Face Creme",
        manufactor: "xxx",
        image: "creme",
        price: "40.30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 8,
        name: "Face Care Set",
        manufactor: "xxx",
        image: "face-kit",
        price: "55.40",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 9,
        name: "Face Masks",
        manufactor: "xxx",
        image: "facemasks",
        price: "32.70",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 10,
        name: "Hair Renovation Set",
        manufactor: "xxx",
        image: "hair-kit",
        price: "40.50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "hair"
    },
    {
        id: 11,
        name: "Hair Mask",
        manufactor: "xxx",
        image: "hairmask",
        price: "16.30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "hair"
    },
    {
        id: 12,
        name: "Lip Balm",
        manufactor: "xxx",
        image: "lip-balm",
        price: "4.50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 13,
        name: "Shower Gel",
        manufactor: "xxx",
        image: "shower-gel",
        price: "9.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        size: "0.51 oz",
        tag: "body"
    },
    {
        id: 14,
        name: `Anti-Age Eye Cream`,
        manufactor: "xxx",
        image: "anti-age",
        price: "23.90",
        description: "something",
        size: "0.30 oz",
        tag: "face"
    },
    {
        id: 15,
        name: `Bakuchiol`,
        manufactor: "xxx",
        image: "bacuchiol",
        price: "40.30",
        description: "something",
        size: "0.51 oz",
        tag: "face"
    },
    {
        id: 16,
        name: ` Bath and Shower Gel`,
        manufactor: "xxx",
        image: "body-shower",
        price: "15.40",
        description: "something",
        size: "0.51 oz",
        tag: "body"
    }

]
export default shopData;