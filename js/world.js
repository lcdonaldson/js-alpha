function DrawMap() {
    var mapIndex = 0;

    for (var y = 0; y < 10; y++) 
    {
        for (var x = 0; x < 10; x++, mapIndex++) 
        {
            var tile_x = x * BLOCK_W;
            var tile_y = y * BLOCK_H;

            var tileType = map[mapIndex];

            if (tileType == 0) 
                dirt.draw(tile_x, tile_y);
            else
                water.draw(tile_x, tile_y);

        }
    } 
}
