function findTreasure(x, y) {
    var treasureX = 3;
    var treasureY = 9;

    if (x == treasureX && y == treasureY) {
        console.log("you find the treasure");
        return;
    }

    while (x != treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right.");
            x++;
        }
        else if (x > treasureX) {
            console.log("Stepping to the left");
            x--;
        }
    }
    while (y != treasureY) {
        if (y < treasureY) {
            console.log("Stepping to the north.");
            y++;
        }
        else if (y > treasureY) {
            console.log("Stepping to the South");
            y--;
        }
    }
    console.log("you find the treasure");
}

findTreasure(12,3)