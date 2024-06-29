const food = [
    {
        ItemCode: "B1001",
        ItemName: "Classic Burger (Large)",
        Price: 750.00,
        Discount: "-"
    },
    {
        ItemCode: "B1002",
        ItemName: "Classic Burger (Regular)",
        Price: 1500.00,
        Discount: "15%"
    },
    {
        ItemCode: "B1003",
        ItemName: "Turkey Burger",
        Price: 1600.00,
        Discount: "-"
    },
    {
        ItemCode: "B1004",
        ItemName: "Chicken Burger (Large)",
        Price: 1400.00,
        Discount: "-"
    },
    {
        ItemCode: "B1005",
        ItemName: "Chicken Burger (Regular)",
        Price: 800.00,
        Discount: "20%"
    },
    {
        ItemCode: "B1006",
        ItemName: "Cheese Burger (Large)",
        Price: 1000.00,
        Discount: "-"
    },
    {
        ItemCode: "B1007",
        ItemName: "Cheese Burger (Regular)",
        Price: 600.00,
        Discount: "-"
    },
    {
        ItemCode: "B1008",
        ItemName: "Bacon Burger",
        Price: 650.00,
        Discount: "15%"
    },
    {
        ItemCode: "B1009",
        ItemName: "Shawarma Burger",
        Price: 800.00,
        Discount: "-"
    },
    {
        ItemCode: "B1010",
        ItemName: "Olive Burger",
        Price: 1800.00,
        Discount: "-"
    },
    {
        ItemCode: "B1012",
        ItemName: "Double-Cheese Burger",
        Price: 1250.00,
        Discount: "20%"
    },
    {
        ItemCode: "B1013",
        ItemName: "Crispy Chicken Burger (Regular)",
        Price: 1200.00,
        Discount: "-"
    },
    {
        ItemCode: "B1014",
        ItemName: "Crispy Chicken Burger (Large)",
        Price: 1600.00,
        Discount: "10%"
    },
    {
        ItemCode: "B1015",
        ItemName: "Paneer Burger ",
        Price: 900.00,
        Discount: "-"
    },
    {
        ItemCode: "B1017",
        ItemName: "Crispy Chicken Submarine (Regular)",
        Price: 1500.00,
        Discount: "-"
    },
    {
        ItemCode: "B1018",
        ItemName: "Chicken Submarine (Large) ",
        Price: 1800.00,
        Discount: "3%"
    },
    {
        ItemCode: "B1019",
        ItemName: "Chicken Submarine (Regular)",
        Price: 1400.00,
        Discount: "-"
    },
    {
        ItemCode: "B1020",
        ItemName: "Grinder Submarine",
        Price: 2300.00,
        Discount: "-"
    },
    {
        ItemCode: "B1021",
        ItemName: "Cheese Submarine",
        Price: 2200.00,
        Discount: "-"
    },
    {
        ItemCode: "B1022",
        ItemName: "Double Cheese n Chicken Submarine ",
        Price: 1800.00,
        Discount: "16%"
    },
    {
        ItemCode: "B1023",
        ItemName: "Special Horgie Submarine",
        Price: 2800.00,
        Discount: "-"
    },
    {
        ItemCode: "B1024",
        ItemName: "MOS Special Submarine",
        Price: 3000.00,
        Discount: "-"
    },
    {
        ItemCode: "B1025",
        ItemName: "Steak Fries (Large)",
        Price: 1200.00,
        Discount: "-"
    },

    {
        ItemCode: "B1026",
        ItemName: "Steak Fries (Medium) ",
        Price: 600.00,
        Discount: "-"
    },
    {
        ItemCode: "B1027",
        ItemName: "French Fries (Large)",
        Price: 800.00,
        Discount: "-"
    },
    {
        ItemCode: "B1028",
        ItemName: "French Fries (Medium)",
        Price: 650.00,
        Discount: "-"
    },
    {
        ItemCode: "B1029",
        ItemName: "French Fries (Small)",
        Price: 450.00,
        Discount: "-"
    },
    {
        ItemCode: "B1030",
        ItemName: "Sweet Potato Fries (Large)",
        Price: 600.00,
        Discount: "-"
    },
    {
        ItemCode: "B1031",
        ItemName: "Chicken n Cheese Pasta ",
        Price: 1600.00,
        Discount: "15%"
    },
    {
        ItemCode: "B1032",
        ItemName: "Chicken Penne Pasta",
        Price: 1700.00,
        Discount: "-"
    },
    {
        ItemCode: "B1033",
        ItemName: "Ground Turkey Pasta Bake",
        Price: 2900.00,
        Discount: "10%"
    },
    {
        ItemCode: "B1034",
        ItemName: "Creamy Shrimp Pasta",
        Price: 2000.00,
        Discount: "-"
    },
    {
        ItemCode: "B1035",
        ItemName: "Lemon Butter Pasta",
        Price: 1950.00,
        Discount: "-"
    },
    {
        ItemCode: "B1036",
        ItemName: "Tagliatelle Pasta",
        Price: 2400.00,
        Discount: "1%"
    },
    {
        ItemCode: "B1037",
        ItemName: "Baked Ravioli",
        Price: 2000.00,
        Discount: "1%"
    },
    {
        ItemCode: "B1038",
        ItemName: "Fried Chicken (Small)",
        Price: 1200.00,
        Discount: "-"
    },
    {
        ItemCode: "B1039",
        ItemName: "Fried Chicken (Regular)",
        Price: 2300.00,
        Discount: "10%"
    },
    {
        ItemCode: "B1040",
        ItemName: "Fried Chicken (Large)",
        Price: 3100.00,
        Discount: "5%"
    },
    {
        ItemCode: "B1041",
        ItemName: "Hot Wings (Large)",
        Price: 2400.00,
        Discount: "-"
    },
    {
        ItemCode: "B1042",
        ItemName: "Devilled Chicken (Large)",
        Price: 900.00,
        Discount: "-"
    },
    {
        ItemCode: "B1043",
        ItemName: "BBQ Chicken (Regular)",
        Price: 2100.00,
        Discount: "-"
    },
    {
        ItemCode: "B1044",
        ItemName: "Pepsi (330ml)",
        Price: 990.00,
        Discount: "5%"
    },
    {
        ItemCode: "B1045",
        ItemName: "Coca-Cola (330ml)",
        Price: 1230.00,
        Discount: "-"
    },
    {
        ItemCode: "B1046",
        ItemName: "Sprite (330ml)",
        Price: 1500.00,
        Discount: "3%"
    },
    {
        ItemCode: "B1047",
        ItemName: "Mirinda (330ml)",
        Price: 850.00,
        Discount: "7%"
    }
]


function AddItems() {

    let itemCode = document.getElementById("txtItemCode").value;
    let itemName = document.getElementById("txtName").value;
    let price = document.getElementById("txtPrice").value;
    let discount = document.getElementById("txtDiscount").value;

    food.push({
        itemCode,
        itemName,
        price,
        discount
    })

    console.log(food);
    showAllCustomer();
}

